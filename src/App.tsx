
import { useState } from 'react';

import {
  Alert,
  Container,
  Snackbar,
  Typography,
} from '@mui/material';

import { Capcalera } from './components/Capcalera';
import { Presentacio } from './components/Presentacio';
import { Cercador } from './components/Cercador';
import { LlistaCursos } from './components/LlistaCursos';
import { MenuLateral } from './components/MenuLateral';
import { DetallCurs } from './components/DetallCurs';
import { PeuDePagina } from './components/PeuDePagina';

import {
  cursos,
  type Curs,
  type Familia,
} from './dades/cursos';

export default function App() {
  // Estat del cercador
  const [text, setText] = useState('');

  // Estat de la família seleccionada
  const [familia, setFamilia] = useState<Familia | 'Totes'>('Totes');

  // Estat dels cursos preferits
  const [preferits, setPreferits] = useState<Set<number>>(new Set());

  // Estat del menú lateral
  const [menuObert, setMenuObert] = useState(false);

  // Estat del curs seleccionat
  const [cursObert, setCursObert] = useState<Curs | null>(null);

  // Estat del missatge d'inscripció
  const [missatge, setMissatge] = useState('');

  // Filtrar cursos per text i família
  const cursosFiltrats = cursos.filter((curs) => {
    const cerca = text.toLowerCase().trim();

    const coincideixText =
      curs.nom.toLowerCase().includes(cerca) ||
      curs.resum.toLowerCase().includes(cerca) ||
      curs.continguts.some((contingut) =>
        contingut.toLowerCase().includes(cerca)
      );

    const coincideixFamilia =
      familia === 'Totes' || curs.familia === familia;

    return coincideixText && coincideixFamilia;
  });

  // Afegir o treure un curs dels preferits
  const canviaPreferit = (id: number) => {
    setPreferits((actuals) => {
      const nous = new Set(actuals);

      if (nous.has(id)) {
        nous.delete(id);
      } else {
        nous.add(id);
      }

      return nous;
    });
  };

  // Inscriure's a un curs
  const inscriu = (curs: Curs) => {
    setMissatge(`T'has inscrit al curs: ${curs.nom}`);
    setCursObert(null);
  };

  return (
    <>
      <Capcalera
        preferits={preferits.size}
        onObrirMenu={() => setMenuObert(true)}
      />

      <MenuLateral
        obert={menuObert}
        onTancar={() => setMenuObert(false)}
        familia={familia}
        onFamilia={setFamilia}
      />

      <Presentacio />

      <Container maxWidth="lg" id="cursos" sx={{ py: 5 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Catàleg de cursos
        </Typography>

        <Cercador
          text={text}
          onText={setText}
          familia={familia}
          onFamilia={setFamilia}
        />

        <LlistaCursos
          cursos={cursosFiltrats}
          preferits={preferits}
          onPreferit={canviaPreferit}
          onDetall={setCursObert}
        />
      </Container>

      <PeuDePagina />

      <DetallCurs
        curs={cursObert}
        onTancar={() => setCursObert(null)}
        onInscriure={inscriu}
      />

      <Snackbar
        open={missatge !== ''}
        autoHideDuration={4000}
        onClose={() => setMissatge('')}
      >
        <Alert
          onClose={() => setMissatge('')}
          severity="success"
          variant="filled"
        >
          {missatge}
        </Alert>
      </Snackbar>
    </>
  );
}
