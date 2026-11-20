// PAS 3 · La presentació (la zona gran sota la capçalera)

// FORAT 3.1 · imports de MUI i de la icona

import { Box, Button, Container, Stack, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export function Presentacio() {

return (
  <Box
    sx={{
      bgcolor: 'secondary.main',
      color: 'white',
      py: { xs: 6, md: 10 },
    }}
  >
    <Container maxWidth="md">
<Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
          <Typography variant="overline">
          FORMACIÓ · PRATCURSOS
        </Typography>
        <Typography variant="h3" component="h2">
          Aprèn avui. Transforma el teu demà.
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.8 }}>
          Descobreix cursos pràctics per créixer personalment i professionalment.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowDownwardIcon />}
          href="#cursos"
        >
          Explora els cursos
        </Button>
      </Stack>
    </Container>
  </Box>
);
}
