import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#2b6cb0');
  const [copied, setCopied] = useState(false);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    setColor(randomColor);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        backgroundColor: color,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          padding: '2rem 3rem',
          borderRadius: '12px',
          textAlign: 'center',
          backdropFilter: 'blur(5px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h1 style={{ margin: '0 0 1rem 0', fontSize: '2.5rem', letterSpacing: '2px' }}>
          {color}
        </h1>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button
            onClick={generateRandomColor}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              color: '#1a202c',
              border: 'none',
              borderRadius: '6px',
              transition: 'transform 0.1s',
            }}
          >
            Generate Color
          </button>

          <button
            onClick={copyToClipboard}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '2px solid #ffffff',
              borderRadius: '6px',
            }}
          >
            {copied ? 'Copied!' : 'Copy Code'}
          </button>
        </div>
      </div>
    </div>
  );
}
