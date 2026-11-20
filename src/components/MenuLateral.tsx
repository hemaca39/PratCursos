
// PAS 9 · El menú lateral amb les famílies

import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';

import ComputerIcon from '@mui/icons-material/Computer';
import CampaignIcon from '@mui/icons-material/Campaign';
import BusinessIcon from '@mui/icons-material/Business';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AppsIcon from '@mui/icons-material/Apps';

import { families, type Familia } from '../dades/cursos';

type Props = {
  obert: boolean;
  onTancar: () => void;
  familia: Familia | 'Totes';
  onFamilia: (nova: Familia | 'Totes') => void;
};

const icones: Record<Familia, React.ReactNode> = {
  Informàtica: <ComputerIcon />,
  Màrqueting: <CampaignIcon />,
  Administració: <BusinessIcon />,
  Logística: <LocalShippingIcon />,
};

export function MenuLateral({
  obert,
  onTancar,
  familia,
  onFamilia,
}: Props) {
  const seleccionarFamilia = (nova: Familia | 'Totes') => {
    onFamilia(nova);
    onTancar();
  };

  return (
    <Drawer anchor="left" open={obert} onClose={onTancar}>
      <Toolbar />
      <List sx={{ width: 280 }}>
        <ListItemButton
          selected={familia === 'Totes'}
          onClick={() => seleccionarFamilia('Totes')}
        >
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary="Totes les famílies" />
        </ListItemButton>

        <Divider />

        {families.map((f) => (
          <ListItemButton
            key={f}
            selected={familia === f}
            onClick={() => seleccionarFamilia(f)}
          >
            <ListItemIcon>{icones[f]}</ListItemIcon>
            <ListItemText primary={f} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}
