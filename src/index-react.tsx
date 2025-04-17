import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { listenTS, dispatchTS } from './utils';

const App: React.FC = () => {
  console.log('[UI] App component rendering');
  const [prompt, setPrompt] = useState('');
  const [testMessage, setTestMessage] = useState('');

  useEffect(() => {
    console.log('[UI] Setting up effect');
    // Listen for response from the plugin code
    const cleanup = listenTS("connection-response", (data) => {
      console.log('[UI] Received connection response:', data);
      setTestMessage(data.message);
    });
    return () => {
      console.log('[UI] Cleaning up effect');
      cleanup();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('[UI] Handling form submit with prompt:', prompt);
    if (prompt.trim()) {
      dispatchTS("generate-layout", { prompt });
      setPrompt('');
    }
  };

  const testConnection = () => {
    console.log('[UI] Testing connection');
    dispatchTS("test-connection", {});
  };

  return (
    <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2>Figma Turtle</h2>
      
      {/* Test connection section */}
      <div style={{ marginBottom: '20px' }}>
        <button onClick={testConnection} style={{ marginBottom: '10px' }}>
          Test Connection
        </button>
        {testMessage && (
          <div style={{ padding: '10px', backgroundColor: '#e6ffe6', borderRadius: '4px' }}>
            {testMessage}
          </div>
        )}
      </div>

      <div style={{ flex: 1, overflowY: 'auto', marginBottom: '20px' }}>
        {/* Message history will go here */}
      </div>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your layout..."
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Generate
        </button>
      </form>
    </div>
  );
};

console.log('[UI] Mounting React app');
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 