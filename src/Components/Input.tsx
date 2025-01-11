import React from 'react';

type InputProps = {
  input: string;
  setInput: (input: string) => void;
};

const Input: React.FC<InputProps> = ({ input, setInput }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Input</h2>
      </div>
      <div className="p-4 flex-grow">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter input here..."
          className="w-full h-full font-mono text-sm p-4 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default Input;