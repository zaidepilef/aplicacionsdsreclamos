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
import ListaSubmaterias from './ListaSubmaterias'
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

const TablaSubmateria = (props) => {
  const { submaterias, materias, editarSubmateria, eliminarSubmateria, loading } = props
  const classes = useStyles()

  if (!submaterias) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>Error al cargar las submaterias</h3>
      </div>
    )
  }

  if (!submaterias.length) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>No se han encontrado submaterias</h3>
      </div>
    )
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID de Submateria</StyledTableCell>
              <StyledTableCell align="center">Descripción</StyledTableCell>
              <StyledTableCell align="center">Materia</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading && submaterias.map((submateria, index) => (
              <ListaSubmaterias
                key={submateria.id}
                submateria={submateria}
                editarSubmateria={editarSubmateria}
                eliminarSubmateria={eliminarSubmateria}
                materias={materias}
              />
            ))}
          </TableBody>
        </Table>
        {!submaterias.length && (
            <h3 className="text-center mt-2">No se encontraron datos</h3>
          )}
        {loading && submaterias.length &&(<SkeletonTable />)}
      </TableContainer>
    </>
  )
}

TablaSubmateria.propTypes = {
  editarSubmateria: PropTypes.func,
  eliminarSubmateria: PropTypes.func,
  materias: PropTypes.array,
  submaterias: PropTypes.array,
  loading: PropTypes.bool,
}

export default TablaSubmateria
