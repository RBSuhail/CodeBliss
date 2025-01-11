import React from 'react';
import { Code2 } from 'lucide-react';

type HeaderProps = {
  language: string;
  setLanguage: (language: string) => void;
  languages: { id: string; name: string }[];
};

const Header: React.FC<HeaderProps> = ({ language, setLanguage, languages }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Code2 className="h-8 w-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">CodeBliss</h1>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {languages.map((lang) => (
              <option key={lang.id} value={lang.id}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;