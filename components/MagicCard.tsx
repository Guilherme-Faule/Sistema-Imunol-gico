
import React from 'react';
import { MagicCardData } from '../types';

interface MagicCardProps {
  card: MagicCardData;
}

const ManaSymbol: React.FC<{ symbol: string }> = ({ symbol }) => {
    const colorMap: Record<string, string> = {
        'W': 'bg-yellow-100',
        'U': 'bg-blue-300',
        'B': 'bg-gray-500',
        'R': 'bg-red-400',
        'G': 'bg-green-300',
    };
    const symbolColor = colorMap[symbol] || 'bg-gray-300';

    return (
        <div className={`w-6 h-6 rounded-full ${symbolColor} flex items-center justify-center text-black font-bold text-sm shadow-md`}>
            {symbol}
        </div>
    );
};

const ManaCost: React.FC<{ cost: string }> = ({ cost }) => {
    const symbols = cost.replace(/[{}]/g, ' ').trim().split(' ').filter(Boolean);
    return (
        <div className="flex items-center gap-1">
            {symbols.map((s, i) => <ManaSymbol key={i} symbol={s} />)}
        </div>
    );
};


const MagicCard: React.FC<MagicCardProps> = ({ card }) => {
  return (
    <div className="w-[320px] h-[448px] bg-[#2a2a2a] rounded-2xl border-2 border-black p-2.5 flex flex-col shadow-2xl select-none transition-transform duration-300 hover:scale-105 hover:shadow-yellow-400/20">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg p-2 flex justify-between items-center border-b-2 border-gray-500 shadow-inner">
        <h2 className="font-bold text-lg truncate text-white">{card.name}</h2>
        <ManaCost cost={card.manaCost} />
      </div>

      {/* Artwork */}
      <div className="my-2 h-[150px] w-full bg-black rounded-md overflow-hidden border-2 border-gray-900">
        <img src={card.artworkUrl} alt={`Artwork for ${card.name}`} className="w-full h-full object-cover" />
      </div>

      {/* Type Line */}
      <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg p-1.5 flex justify-between items-center text-sm border-b-2 border-gray-500 shadow-inner">
        <p className="font-bold text-white">{card.cardType}</p>
        {/* Placeholder for set symbol */}
        <div className="w-5 h-5 bg-gray-500 rounded-full border border-gray-400"></div>
      </div>

      {/* Abilities Text Box */}
      <div className="bg-[#d3d3d3] text-black p-2 flex-grow my-2 rounded-md border-2 border-gray-900 overflow-y-auto text-sm flex flex-col justify-between">
        <p className="whitespace-pre-wrap leading-tight">{card.abilities}</p>
        <p className="italic mt-2 pt-2 border-t border-gray-400/50 whitespace-pre-wrap leading-tight text-xs">{card.flavorText}</p>
      </div>

      {/* Power/Toughness */}
      {card.power && card.toughness && (
        <div className="self-end bg-gradient-to-r from-gray-600 to-gray-800 rounded-full px-4 py-1 mt-auto text-lg font-extrabold text-white border-2 border-gray-500 shadow-md">
          <span>{card.power}/{card.toughness}</span>
        </div>
      )}
    </div>
  );
};

export default MagicCard;
