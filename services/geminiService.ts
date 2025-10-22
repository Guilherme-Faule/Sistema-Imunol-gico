
import { GoogleGenAI, Type } from "@google/genai";
import { MagicCardData } from '../types';

if (!process.env.API_KEY) {
  throw new Error("A variável de ambiente API_KEY não está definida");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const cardSchema = {
  type: Type.OBJECT,
  properties: {
    name: { type: Type.STRING },
    manaCost: { type: Type.STRING },
    cardType: { type: Type.STRING },
    abilities: { type: Type.STRING },
    flavorText: { type: Type.STRING },
    power: { type: Type.STRING },
    toughness: { type: Type.STRING },
  },
  required: ['name', 'manaCost', 'cardType', 'abilities', 'flavorText', 'power', 'toughness'],
};


export const generateCardDetails = async (prompt: string): Promise<Omit<MagicCardData, 'artworkUrl'>> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: cardSchema,
      },
    });

    const text = response.text.trim();
    // Sometimes the model wraps the JSON in ```json ... ```, so we strip that.
    const cleanJson = text.replace(/^```json\s*|```$/g, '');
    
    const parsed = JSON.parse(cleanJson);
    
    // Basic validation to ensure we have the right structure
    if (typeof parsed.name !== 'string' || typeof parsed.manaCost !== 'string') {
        throw new Error("Estrutura JSON inválida recebida da API");
    }

    return parsed as Omit<MagicCardData, 'artworkUrl'>;

  } catch (error) {
    console.error("Error generating card details:", error);
    throw new Error("Falha ao analisar os detalhes do card da API Gemini.");
  }
};

export const generateCardArtwork = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '3:4', // Correct for card art
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
            return `data:image/jpeg;base64,${base64ImageBytes}`;
        } else {
            throw new Error("Nenhuma imagem foi gerada.");
        }
    } catch (error) {
        console.error("Error generating card artwork:", error);
        throw new Error("Falha ao gerar a arte da API Imagen.");
    }
};
