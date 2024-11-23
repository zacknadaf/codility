import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  return (
    <div className="rounded-lg overflow-hidden my-4">
      <SyntaxHighlighter 
        language={language} 
        style={vs}
        customStyle={{
          margin: 0,
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '0.5rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}