import React from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const AntecendetesAseguradora = (props) => {

  const { classes} = props

  // ! TODO: revisar datos de prestador!

  return (
    <>
      <Divider className={classes.dividerBody} />
      <h1 className="card-title">Antecedentes de la Aseguradora</h1>
      <div className="row">
        <div className="col-md-6 col-12">
          <TextField
            name="aseguradora.nombre_isapre"
            label="Isapre"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled={true}
            value={'Colmena Golden Cross S.A'}
          />
        </div>
        <div className="col-md-6 col-12">
          <TextField
            name="aseguradora.codigo_isapre"
            label="Codigo Isapre"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled={true}
            value={'152'}
          />

        </div>
      </div>
    </>
  )
}

export default AntecendetesAseguradora
