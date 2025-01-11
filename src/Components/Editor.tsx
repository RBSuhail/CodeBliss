import React from 'react';
import { RotateCcw, Play } from 'lucide-react';

type EditorProps = {
  code: string;
  setCode: (code: string) => void;
  handleRun: () => void;
  handleReset: () => void;
  language: string;
  languages: { id: string; placeholder: string }[];
};

const Editor: React.FC<EditorProps> = ({ code, setCode, handleRun, handleReset, language, languages }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-900">Code Editor</h2>
        <div className="flex space-x-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </button>
          <button
            onClick={handleRun}
            className="inline-flex items-center px-3 py-1.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Play className="h-4 w-4 mr-1" />
            Run
          </button>
        </div>
      </div>
      <div className="p-4">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder={languages.find(lang => lang.id === language)?.placeholder}
          className="w-full h-[500px] font-mono text-sm p-4 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default Editor;