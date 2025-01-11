import React, { useState } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Editor from './Components/Editor';
import Input from './Components/Input';
import Output from './Components/Output';
import Footer from './Components/Footer';
type Language = 'cpp' | 'c' | 'python' | 'java';

function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState<Language>('python');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const languages = [
    { id: 'python', name: 'Python', placeholder: 'print("Hello, World!")' },
    { id: 'cpp', name: 'C++', placeholder: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}' },
    { id: 'c', name: 'C', placeholder: '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}' },
    { id: 'java', name: 'Java', placeholder: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}' },
  ];

  const handleRun = async () => {
    try {
      const response = await axios.post('http://localhost:8080/compile', {
        code,
        language,
        input
      });
      setOutput(response.data.output);
    } catch (error) {
      setOutput('Error: Unable to compile the code.');
    }
  };

  const handleReset = () => {
    setCode('');
    setInput('');
    setOutput('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header language={language} setLanguage={setLanguage} languages={languages} />
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Editor code={code} setCode={setCode} handleRun={handleRun} handleReset={handleReset} language={language} languages={languages} />
          <div className="flex flex-col space-y-6">
            <Input input={input} setInput={setInput} />
            <Output output={output} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;