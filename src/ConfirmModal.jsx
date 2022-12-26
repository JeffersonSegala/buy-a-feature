import './App.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const ConfirmModal = ({ open, handleClose, handleConfirm }) => {
  return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Atenção"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que quer gastar seu precioso dinheirinho nisso?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm}>Sim</Button>
          <Button onClick={handleClose} autoFocus>
            deixa pra lá
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default ConfirmModal;
