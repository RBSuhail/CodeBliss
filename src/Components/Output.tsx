import React from 'react';

type OutputProps = {
  output: string;
};

const Output: React.FC<OutputProps> = ({ output }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm flex flex-col">
      <div className="p-4 border-t border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Output</h2>
      </div>
      <div className="p-4 flex-grow">
        <textarea
          value={output || 'Run your code to see the output here...'}
          readOnly
          className="w-full h-full font-mono text-sm p-4 border rounded-md bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500"
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default Output;