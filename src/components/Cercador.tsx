
// PASSOS 6 i 7 · El cercador de text i el desplegable de família

import { MenuItem, Stack, TextField } from '@mui/material';

import type { Familia } from '../dades/cursos';

type Props = {
  text: string;
  onText: (nou: string) => void;
  familia?: Familia | 'Totes';
  onFamilia?: (nova: Familia | 'Totes') => void;
};

export function Cercador({ text, onText, familia, onFamilia }: Props) {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={2}
      sx={{ mb: 3 }}
    >
      <TextField
        fullWidth
        label="Cerca cursos"
        placeholder="Escriu el nom o una paraula clau..."
        value={text}
        onChange={(event) => onText(event.target.value)}
      />

      {familia !== undefined && onFamilia && (
        <TextField
          select
          fullWidth
          label="Família professional"
          value={familia}
          onChange={(event) =>
            onFamilia(event.target.value as Familia | 'Totes')
          }
        >
          <MenuItem value="Totes">Totes les famílies</MenuItem>
          <MenuItem value="Informàtica">Informàtica</MenuItem>
          <MenuItem value="Màrqueting">Màrqueting</MenuItem>
          <MenuItem value="Administració">Administració</MenuItem>
          <MenuItem value="Logística">Logística</MenuItem>
        </TextField>
      )}
    </Stack>
  );
}
