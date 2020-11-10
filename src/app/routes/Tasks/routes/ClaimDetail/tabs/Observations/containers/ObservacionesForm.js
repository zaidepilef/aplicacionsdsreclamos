import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));


const ObservacionesForm = ({ observacionForm, setObservacion, newObservationSubmit }) => {

    const classes = useStyles();

    return (
        <>
            <form className={classes.root} onSubmit={newObservationSubmit} noValidate autoComplete="off">
                <TextField
                    id="outlined-multiline-static"
                    label="Observaciones"
                    name="descripcion"
                    multiline
                    rows="4"
                    variant="outlined"
                    onChange={(e) => setObservacion({
                        ...observacionForm,
                        [e.target.name]: e.target.value
                    })}
                    value={observacionForm.descripcion}
                />
                <div className="p-3 col-md-12 col-12 d-flex flex-row-reverse">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="jr-btn jr-btn-lg">
                        Agregar
                    </Button>
                </div>
            </form>
        </>
    )
}


ObservacionesForm.propTypes = {
    observacionForm: PropTypes.object.isRequired,
    setObservacion: PropTypes.func.isRequired
}

export default ObservacionesForm
