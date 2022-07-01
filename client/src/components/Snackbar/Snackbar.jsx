import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';

const SnackbarComponent = (props) => {
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={props.handleClose}>
                Закрыть
            </Button>
        </React.Fragment>
    );
    return (
        <Snackbar
            open={props.open}
            autoHideDuration={6000}
            onClose={props.handleClose}
            message={props.message}
            action={action}
        />
    );
};

export default SnackbarComponent;