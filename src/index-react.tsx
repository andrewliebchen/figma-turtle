/** @jsxImportSource theme-ui */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'theme-ui';
import { Box, Flex } from 'theme-ui';
import { theme } from './theme';
import { Chat } from './Chat';
import { Preview } from './Preview';
import { listenTS, dispatchTS } from './utils';

const App: React.FC = () => {
  console.log('[UI] App component rendering');

  return (
    <ThemeProvider theme={theme}>
      <Flex 
        sx={{ 
          height: '100vh', 
          width: '100vw',
          fontFamily: 'body',
        }}
      >
        <Box sx={{ width: '45%', height: '100%' }}>
          <Chat />
        </Box>
        <Box sx={{ width: '55%', height: '100%' }}>
          <Preview />
        </Box>
      </Flex>
    </ThemeProvider>
  );
};

console.log('[UI] Mounting React app');
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 