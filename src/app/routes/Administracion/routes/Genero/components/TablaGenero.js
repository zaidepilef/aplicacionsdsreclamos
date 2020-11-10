import React, { Fragment } from 'react';
import ListaGenero from './ListaGenero';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import { SkeletonTable } from 'util/Skeleton'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#CBCBD5',
    color: 'rgb(39, 70, 77)',
  },
  body: {
    fontSize: 14,
  }
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const TablaGenero = (props) => {
  const { generos, setLoading, loading, token, setSearchInput, setRefresh } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Género</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {!loading && generos.map((generos, i) => (
              <ListaGenero
                key={i}
                generos={generos}
                setLoading={setLoading}
                loading={loading}
                setRefresh={setRefresh}
                token={token}
                setSearchInput={setSearchInput}
              />
            ))}
          </TableBody>
        </Table>
        {
          !generos.length && (
            <h3 className="text-center mt-2">No se encontraron datos</h3>

          )
        }
        {
          loading && !!generos.length &&(

            <SkeletonTable />

          )
        }
      </TableContainer>
    </Fragment>

  );
}

export default TablaGenero;