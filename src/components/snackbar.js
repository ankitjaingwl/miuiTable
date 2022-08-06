import React from 'react'
import { Snackbar, Alert } from '@mui/material';

const SnackbarNotification = (props) => {
    const { snackbar, setSnackbar } = props
    const handleCloseSnackbar = () => setSnackbar(false);

  return (
    <Snackbar open={snackbar} autoHideDuration={1000} onClose={handleCloseSnackbar} 
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Data is updated successfully 
        </Alert>
      </Snackbar>
  )
}

export default SnackbarNotification