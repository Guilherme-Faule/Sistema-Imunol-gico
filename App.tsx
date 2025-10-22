
import React, { useState, useCallback } from 'react';
import { MagicCardData, ImmunePhase } from './types';
import { IMMUNE_PHASES } from './constants';
import { generateCardArtwork, generateCardDetails } from './services/geminiService';
import MagicCard from './components/MagicCard';
import PhaseController from './components/PhaseController';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [generatedCards, setGeneratedCards] = useState<Record<number, MagicCardData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentPhase: ImmunePhase = IMMUNE_PHASES[currentPhaseIndex];
  const currentCard = generatedCards[currentPhaseIndex];

  const handleGenerateCard = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [details, artworkUrl] = await Promise.all([
        generateCardDetails(currentPhase.prompt),
        generateCardArtwork(currentPhase.imagePrompt)
      ]);

      setGeneratedCards(prev => ({
        ...prev,
        [currentPhaseIndex]: { ...details, artworkUrl }
      }));
    } catch (e) {
      console.error(e);
      setError('Falha ao gerar o card. Por favor, verifique sua chave de API e tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }, [currentPhaseIndex, currentPhase]);

  const goToNextPhase = () => {
    setCurrentPhaseIndex(prev => Math.min(prev + 1, IMMUNE_PHASES.length - 1));
  };

  const goToPrevPhase = () => {
    setCurrentPhaseIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-4 sm:p-8 flex flex-col items-center">
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-300 tracking-wider" style={{ fontFamily: '"Cinzel Decorative", cursive' }}>
          Sistema Imunológico: A Batalha
        </h1>
        <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
          Explore as defesas do corpo contra invasores, com cada fase se materializando como uma carta única de Magic: The Gathering.
        </p>
      </header>

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col items-center justify-center">
          <PhaseController
            currentPhase={currentPhase}
            currentPhaseIndex={currentPhaseIndex}
            totalPhases={IMMUNE_PHASES.length}
            goToNextPhase={goToNextPhase}
            goToPrevPhase={goToPrevPhase}
            isGenerating={isLoading}
            isCardGenerated={!!currentCard}
            onGenerate={handleGenerateCard}
          />
           {error && <p className="mt-4 text-red-500 bg-red-900/50 p-3 rounded-md">{error}</p>}
        </div>

        <div className="flex items-center justify-center h-[520px] relative">
          {isLoading ? (
            <LoadingSpinner />
          ) : currentCard ? (
            <MagicCard card={currentCard} />
          ) : (
             <div className="w-[320px] h-[448px] bg-gray-800 border-2 border-dashed border-gray-600 rounded-2xl flex flex-col items-center justify-center text-center p-4">
               <p className="text-gray-400">Seu card gerado aparecerá aqui.</p>
               <p className="text-sm text-gray-500 mt-2">Clique em "Materializar Card" para iniciar o processo.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
