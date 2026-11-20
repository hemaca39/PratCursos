
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// FORAT 1.5 · importa ThemeProvider, CssBaseline i el nostre tema
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { tema } from './tema';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* FORAT 1.6 · embolcalla App amb ThemeProvider i CssBaseline */}
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
