
import React from 'react';
import { ImmunePhase } from '../types';

interface PhaseControllerProps {
  currentPhase: ImmunePhase;
  currentPhaseIndex: number;
  totalPhases: number;
  goToNextPhase: () => void;
  goToPrevPhase: () => void;
  isGenerating: boolean;
  isCardGenerated: boolean;
  onGenerate: () => void;
}

const PhaseController: React.FC<PhaseControllerProps> = ({
  currentPhase,
  currentPhaseIndex,
  totalPhases,
  goToNextPhase,
  goToPrevPhase,
  isGenerating,
  isCardGenerated,
  onGenerate
}) => {
  return (
    <div className="w-full max-w-md bg-gray-800/50 p-6 rounded-2xl border border-gray-700 shadow-lg">
      <div className="text-center mb-4">
        <p className="text-yellow-400 font-semibold">Fase {currentPhaseIndex + 1} / {totalPhases}</p>
        <h2 className="text-3xl font-bold text-white mt-1">{currentPhase.title}</h2>
      </div>
      <p className="text-gray-300 text-left mb-6 h-24 overflow-y-auto">{currentPhase.description}</p>
      
      {!isCardGenerated && (
         <button
            onClick={onGenerate}
            disabled={isGenerating}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-4 rounded-lg transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center text-lg shadow-md hover:shadow-lg disabled:shadow-none transform hover:scale-105"
         >
            {isGenerating ? 'Materializando...' : 'Materializar Card'}
        </button>
      )}

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={goToPrevPhase}
          disabled={currentPhaseIndex === 0}
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Anterior
        </button>
        <div className="flex-grow flex justify-center items-center gap-2 px-4">
            {Array.from({length: totalPhases}).map((_, index) => (
                <div key={index} className={`h-2 rounded-full transition-all duration-300 ${index === currentPhaseIndex ? 'w-8 bg-yellow-400' : 'w-4 bg-gray-600'}`}></div>
            ))}
        </div>
        <button
          onClick={goToNextPhase}
          disabled={currentPhaseIndex === totalPhases - 1}
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default PhaseController;
