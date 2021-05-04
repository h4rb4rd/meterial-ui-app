import React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle } from '@material-ui/core';

const DialogModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Log In</DialogTitle>
      <DialogContent>
        <DialogContentText>Log in to see content</DialogContentText>
        <TextField autoFocus margin="dense" id="mail" label="Email Address" type="email" fullWidth />
        <TextField autoFocus margin="dense" id="pass" label="Password" type="password" fullWidth />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Log In
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogModal;
