
// PAS 12 · El peu de pàgina

import { Box, Container, Divider, Typography } from '@mui/material';

export function PeuDePagina() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'secondary.main',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 3 }} />

<Typography
  variant="body2"
  sx={{ textAlign: 'center' }}
>          © {new Date().getFullYear()} PratCursos · Formació contínua per a tothom
        </Typography>

 <Typography
  variant="caption"
  sx={{
    display: 'block',
    textAlign: 'center',
    mt: 1,
    color: 'rgba(255,255,255,0.7)',
  }}
>
          Aprèn avui. Transforma el teu demà.
        </Typography>
      </Container>
    </Box>
  );
}
