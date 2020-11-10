import PropTypes from 'prop-types'
import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import ListaNacionalidades from './ListaNacionalidades'
import { SkeletonTable } from 'util/Skeleton'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#CBCBD5',
    color: 'rgb(39, 70, 77)',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

const TablaNacionalidad = (props) => {
  const { nacionalidades, editarNacionalidad, eliminarNacionalidad, loading } = props
  const classes = useStyles()

  if (!nacionalidades) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>Error al cargar las nacionalidades</h3>
      </div>
    )
  }

  if (!nacionalidades.length) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>No se han encontrado nacionalidades</h3>
      </div>
    )
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Código</StyledTableCell>
              <StyledTableCell align="center">Nombre</StyledTableCell>
              <StyledTableCell align="center">Gentilicio</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading && nacionalidades.map((nacionalidad, index) => (
              <ListaNacionalidades
                key={nacionalidad.id}
                nacionalidad={nacionalidad}
                editarNacionalidad={editarNacionalidad}
                eliminarNacionalidad={eliminarNacionalidad}
              />
            ))}
          </TableBody>
        </Table>
        {!nacionalidades.length && (
            <h3 className="text-center mt-2">No se encontraron datos</h3>
          )}
        {loading && nacionalidades.length &&(<SkeletonTable />)}
      </TableContainer>
    </>
  )
}

TablaNacionalidad.propTypes = {
  editarNacionalidad: PropTypes.func,
  eliminarNacionalidad: PropTypes.func,
  nacionalidades: PropTypes.array,
  loading: PropTypes.bool,
}

export default TablaNacionalidad
