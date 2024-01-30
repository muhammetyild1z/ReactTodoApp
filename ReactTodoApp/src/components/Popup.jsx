// components/.js
import React from 'react';
import Snackbar from '@mui/material/Snackbar';


const Popup = ({ message, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={true}
      autoHideDuration={3000}
      onClose={onClose}
      message={message}
    />
  );
};

export default Popup;
