import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DangerousIcon from '@mui/icons-material/Dangerous';
import FeedIcon from '@mui/icons-material/Feed';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

import { type ModalProps, ModalType } from './info-modal.types';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 100,
};

const modalHeader = (modalType: ModalType): ReactNode => {
  let background: string | undefined;
  let headerText: string;
  let headerIcon: ReactNode;

  switch (modalType) {
    case ModalType.Success:
      background = 'success.main';
      headerText = 'CORRECTO';
      headerIcon = (
        <CheckCircleOutlineIcon fontSize="large" sx={{ color: 'white' }} />
      );
      break;
    case ModalType.Warning:
      background = 'warning.main';
      headerText = 'ALERTA';
      headerIcon = (
        <WarningAmberIcon fontSize="large" sx={{ color: 'white' }} />
      );
      break;
    case ModalType.Error:
      background = 'error.main';
      headerText = 'ERROR';
      headerIcon = <DangerousIcon fontSize="large" sx={{ color: 'white' }} />;
      break;
    case ModalType.Info:
      background = 'info.main';
      headerText = 'INFORMACION';
      headerIcon = <FeedIcon fontSize="large" sx={{ color: 'white' }} />;
      break;
    case ModalType.Neutro:
      background = 'text.disabled';
      headerText = 'AVISO IMPORTANTE';
      headerIcon = <FeedIcon fontSize="large" sx={{ color: 'white' }} />;
      break;
  }

  return (
    <Box sx={headerStyle} bgcolor={background}>
      <Grid container spacing={2}>
        <Grid item xs={2} container display="flex" justifyContent="center">
          {headerIcon}
        </Grid>
        <Grid item xs={8} container display="flex" justifyContent="center">
          <Typography variant="h6" align="center" color="white">
            {headerText}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export const InfoModal = ({
  type,
  title,
  messages,
  open,
  onClose,
}: ModalProps) => {
  const multipleMessages = (): ReactNode => {
    if (messages && messages.length > 0) {
      const result = messages.map((item, index) => (
        <DialogContentText paragraph id="alert-dialog-description" key={index}>
          {item}
        </DialogContentText>
      ));
      return <div>{result}</div>;
    } else {
      return <div></div>;
    }
  };
  return (
    <Dialog
      open={open!}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      {modalHeader(type)}
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent dividers>{multipleMessages()}</DialogContent>
      <DialogActions>
        <Button variant="contained" color="success" onClick={onClose}>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
