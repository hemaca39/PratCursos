
// PAS 10 · La fitxa d'un curs dins d'un diàleg

import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from '@mui/material';

import type { Curs } from '../dades/cursos';

type Props = {
  curs: Curs | null;
  onTancar: () => void;
  onInscriure: (curs: Curs) => void;
};

export function DetallCurs({ curs, onTancar, onInscriure }: Props) {
  if (!curs) {
    return null;
  }

  const esgotat = curs.places === 0;

  return (
    <Dialog open={Boolean(curs)} onClose={onTancar} fullWidth maxWidth="sm">
      <DialogTitle>{curs.nom}</DialogTitle>

      <DialogContent>
<Stack
  direction="row"
  spacing={1}
  sx={{ mb: 2, flexWrap: 'wrap' }}
>

          <Chip label={curs.familia} color="primary" />
          <Chip label={`${curs.hores} hores`} variant="outlined" />
          <Chip label={curs.modalitat} variant="outlined" />
        </Stack>

<Typography
  variant="body1"
  sx={{ mb: 2 }}
>       
       
          {curs.resum}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          Continguts del curs
        </Typography>

        <Stack spacing={1}>
          {curs.continguts.map((contingut, index) => (
            <Typography key={index} variant="body2">
              • {contingut}
            </Typography>
          ))}
        </Stack>

        <Typography
          variant="body2"
          color={esgotat ? 'error' : 'text.secondary'}
          sx={{ mt: 2 }}
        >
          {esgotat
            ? 'Places esgotades'
            : `${curs.places} places lliures`}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onTancar}>Tancar</Button>
        <Button
          variant="contained"
          disabled={esgotat}
          onClick={() => onInscriure(curs)}
        >
          Inscriure'm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
