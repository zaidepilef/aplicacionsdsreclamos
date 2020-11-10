import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SeleccionarTipoDoc from './componentsFormulario/SeleccionarTipoDoc'

const AdjuntarDocumento = ({carpetaForm, setCarpetaForm}) => {

    const handleChange = e => {
        setCarpetaForm({
            ...carpetaForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h3>Adjuntar Documento</h3>
            <form className="row" noValidate autoComplete="off">
                <div className="col-md-4 col-12">
                    <SeleccionarTipoDoc
                        carpetaForm={carpetaForm}
                        setCarpetaForm={setCarpetaForm}
                    />
                </div>
                <div className="col-md-4 col-12">
                    <TextField
                        id="outlined-error-helper-text"
                        name="nombreDocumento"
                        label="Nombre de documento"
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        onChange={handleChange}
                        value={carpetaForm.nombreDocumento}
                    />
                </div>
                <div className="col-md-4 col-12 align-self-center">
                    <Button
                        type="submit" variant="contained" color="primary"
                        className="jr-btn jr-btn-lg" >
                        Buscar
                    </Button>
                </div>
            </form>

        </div>
    )
}

export default AdjuntarDocumento
