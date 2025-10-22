
export interface MagicCardData {
  name: string;
  manaCost: string;
  artworkUrl: string;
  cardType: string;
  abilities: string;
  flavorText: string;
  power: string;
  toughness: string;
}

export interface ImmunePhase {
  title: string;
  description: string;
  prompt: string;
  imagePrompt: string;
}
