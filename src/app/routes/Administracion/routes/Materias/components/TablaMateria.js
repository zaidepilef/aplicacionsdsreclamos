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
import ListaMaterias from './ListaMaterias'
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

const TablaMateria = (props) => {
  const { materias, procesos, editarMateria, eliminarMateria, loading } = props
  const classes = useStyles()

  if (!materias) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>Error al cargar las materias</h3>
      </div>
    )
  }

  if (!materias.length) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>No se han encontrado materias</h3>
      </div>
    )
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID de Materia</StyledTableCell>
              <StyledTableCell align="center">Descripción</StyledTableCell>
              <StyledTableCell align="center">Proceso</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading && materias.map((materia, index) => (
              <ListaMaterias
                key={materia.id}
                materia={materia}
                editarMateria={editarMateria}
                eliminarMateria={eliminarMateria}
                procesos={procesos}
              />
            ))}
          </TableBody>
        </Table>
        {!materias.length && (
            <h3 className="text-center mt-2">No se encontraron datos</h3>
          )}
        {loading && materias.length &&(<SkeletonTable />)}
      </TableContainer>
    </>
  )
}

TablaMateria.propTypes = {
  editarMateria: PropTypes.func,
  eliminarMateria: PropTypes.func,
  materias: PropTypes.array,
  procesos: PropTypes.array,
  loading: PropTypes.bool,
}

export default TablaMateria
