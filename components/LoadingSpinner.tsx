
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
        <div className="relative w-24 h-24">
            <div className="absolute border-4 border-t-4 border-gray-600 border-t-yellow-400 rounded-full w-full h-full animate-spin"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-yellow-300 font-bold text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
        <p className="mt-4 text-lg text-yellow-300">Gerando Card...</p>
        <p className="text-sm text-gray-400">Isso pode levar um momento.</p>
    </div>
  );
};

export default LoadingSpinner;
