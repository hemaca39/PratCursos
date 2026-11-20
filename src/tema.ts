// PAS 1 · El tema de PratCursos
// El TEMA és el lloc on diem a MUI els colors, la lletra i les formes.
// Tots els components de la llibreria el llegeixen: no cal repetir colors.

// FORAT 1.3 · importa createTheme
import { createTheme } from '@mui/material/styles';
// FORAT 1.4 · crea i exporta el tema
export const tema = createTheme({
  palette: {
    primary: { main: '#E1211D' },
    secondary: { main: '#1F2A30' },
    background: { default: '#F6F7F9' },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: 'system-ui, "Segoe UI", Roboto, sans-serif',
    h3: { fontWeight: 800 },
    button: { textTransform: 'none', fontWeight: 700 },
  },
});