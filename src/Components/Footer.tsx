import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500">
          CodeCanvas - Online Code Compiler © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;