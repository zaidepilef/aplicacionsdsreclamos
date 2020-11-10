import React from 'react';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import PropTypes from 'prop-types';

const NewCustomDialog = (props) => {

    const {
        isOpen,
        handleClose,
        size,
        title,
        subtitle,
        children
    } = props

    return (
        <div>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth={size}>
                <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {subtitle}
                    </DialogContentText>
                    {children}
                </DialogContent>
            </Dialog>
        </div>
    );
}
export default NewCustomDialog

NewCustomDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    size: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.element
}


