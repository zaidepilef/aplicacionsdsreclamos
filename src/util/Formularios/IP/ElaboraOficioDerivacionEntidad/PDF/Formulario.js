import React from 'react'
import TextField from '@material-ui/core/TextField';

const Formulario = (props) => {

    const { instanciaForm, setInstanciaForm } = props

    const handleChange = (e) => {
        setInstanciaForm({
                ...instanciaForm,
                cotizante:{
                    ...instanciaForm.cotizante,
                    [e.target.name]: [e.target.value]
                }
        })
    }

    return (
        <div className="row">
            <div className="col-md-4 col-12">
                <TextField
                    id="outlined-error-helper-text"
                    name="nombres"
                    label="Nombre"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={instanciaForm.cotizante.nombres}
                    onChange={handleChange}
                />
            </div>
            <div className="col-md-4 col-12">
                <TextField
                    id="outlined-error-helper-text"
                    name="apellido_paterno"
                    label="Apellido"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={instanciaForm.cotizante.apellido_paterno}
                    onChange={handleChange}
                />
            </div>
            <div className="col-md-4 col-12">
                <TextField
                    id="outlined-error-helper-text"
                    name=""
                    label="Data"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
            </div>
        </div>


    )
}

export default Formulario
