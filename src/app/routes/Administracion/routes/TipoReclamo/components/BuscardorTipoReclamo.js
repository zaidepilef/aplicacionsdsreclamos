import React, { Fragment } from 'react';
import TextField from "@material-ui/core/TextField";

const BuscadorViaTramitacion = (props) => {
    const { setSearchInput, searchInput } = props;
    const filtro = e => {
        setSearchInput(e.target.value)
    }

    return (
        <Fragment>
            <TextField
                name="tipo"
                label="Buscar"
                variant="outlined"
                margin="dense"
                onChange={filtro}
                value={searchInput}
            />
        </Fragment>
    );
}
 
export default BuscadorViaTramitacion;