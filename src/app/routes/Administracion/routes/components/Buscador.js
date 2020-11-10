import PropTypes from 'prop-types'
import React from 'react'
import TextField from '@material-ui/core/TextField'

const Buscador = (props) => {
  const { setSearchInput, searchInput } = props
  const filtro = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <>
      <TextField
        label="Buscar"
        variant="outlined"
        margin="dense"
        onChange={filtro}
        value={searchInput}
      />
    </>
  )
}

Buscador.propTypes = {
  searchInput: PropTypes.string.isRequired,
  setSearchInput: PropTypes.func.isRequired,
}

export default Buscador
