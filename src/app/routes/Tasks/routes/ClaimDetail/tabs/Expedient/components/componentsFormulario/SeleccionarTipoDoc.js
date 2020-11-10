import React from 'react'

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const tiposDocumentoApis = [
    {
        value: 'Adecuación de Contrato',
        label: 'd1',
    },
    {
        value: 'Cotizaciones adeudadas',
        label: 'd2',
    },
    {
        value: 'Licencias médicas  subsidios por incapacidad',
        label: 'd3',
    },
    {
        value: 'Suscripción o midificación de Contrato',
        label: 'd4',
    },
    {
        value: 'Término de contrato',
        label: 'd5',
    },
];

const SeleccionarTipoDoc = ({ carpetaForm, setCarpetaForm }) => {

    return (
        <div className="row">
            <div className="p-3 col-md-12 col-12">
                <FormControl variant="outlined" className="w-100 mb-2">
                    <InputLabel id="demo-simple-select-outlined-label">Estado</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Estado"
                        onChange={e => setCarpetaForm({
                            ...carpetaForm,
                            estado: e.target.value
                        })}
                        value={carpetaForm.estado}
                    >
                        <MenuItem value="">
                            <em></em>
                        </MenuItem>
                        {tiposDocumentoApis.map(tipoDocumento => 
                            <MenuItem key={tipoDocumento.value} value={tipoDocumento.value}>
                                {tipoDocumento.value}
                            </MenuItem>
                        )}
                        
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}

export default SeleccionarTipoDoc