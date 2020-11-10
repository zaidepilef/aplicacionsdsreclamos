import PropTypes from 'prop-types'
import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import ListaPrestadores from './ListaPrestadores'
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

const TablaPrestador = (props) => {
  const {
    prestadores,
    loading
  } = props
  const classes = useStyles()


  if (loading) {
    return <SkeletonTable />;
  }

  if (!prestadores.length) {
    return (
      <div className="col d-flex justify-content-center">
        <h3> No se han encontrado prestadores</h3>
      </div>
    );
  }

  return (
    <>
      <TableContainer >
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Nombre</StyledTableCell>
              <StyledTableCell align="center">Dirección</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prestadores.map(prestador => (
              <ListaPrestadores
                key={prestador.id}
                prestador={prestador}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

TablaPrestador.propTypes = {
  prestadores: PropTypes.array,
  loading: PropTypes.bool,
}

export default TablaPrestador
