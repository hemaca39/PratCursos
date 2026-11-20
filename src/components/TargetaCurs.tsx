
// PAS 4 · La targeta d'un curs

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Rating,
  Stack,
  Typography,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ScheduleIcon from '@mui/icons-material/Schedule';

import { colorFamilia, type Curs } from '../dades/cursos';

type Props = {
  curs: Curs;
  preferit?: boolean;
  onPreferit?: (id: number) => void;
  onDetall?: (curs: Curs) => void;
};

export function TargetaCurs({
  curs,
  preferit = false,
  onPreferit,
  onDetall,
}: Props) {
  const esgotat = curs.places === 0;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          bgcolor: colorFamilia[curs.familia],
          color: 'white',
          p: 2,
        }}
      >
        <Chip
          label={curs.familia}
          size="small"
          sx={{ bgcolor: 'white', mb: 1 }}
        />

        <Typography variant="h6" component="h3">
          {curs.nom}
        </Typography>
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {curs.resum}
        </Typography>

<Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            <Chip
            icon={<ScheduleIcon />}
            label={`${curs.hores} h`}
            size="small"
            variant="outlined"
          />

          <Chip
            label={curs.modalitat}
            size="small"
            variant="outlined"
          />
        </Stack>

        <Rating
          value={curs.valoracio}
          precision={0.5}
          readOnly
          sx={{ mt: 2 }}
        />
      </CardContent>

      <CardActions
        sx={{
          justifyContent: 'space-between',
          px: 2,
          pb: 2,
        }}
      >
        <Typography
          variant="body2"
          color={esgotat ? 'error' : 'text.secondary'}
        >
          {esgotat
            ? 'Places esgotades'
            : `${curs.places} places lliures`}
        </Typography>

        <Stack direction="row" spacing={1}>
          <IconButton
            aria-label={
              preferit
                ? 'Treure dels preferits'
                : 'Afegir als preferits'
            }
            onClick={() => onPreferit?.(curs.id)}
            color={preferit ? 'primary' : 'default'}
          >
            {preferit ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>

          <Button
            variant="contained"
            disabled={esgotat}
            onClick={() => onDetall?.(curs)}
          >
            Programa
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
}
