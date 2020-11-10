import React, { Fragment } from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ListaTipoCalle from "./ListaTipoCalle";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import { SkeletonTable } from 'util/Skeleton'

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#CBCBD5",
    color: "rgb(39, 70, 77)"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const TablaTipoCalle = (props) => {
  const { loading, setLoading, tipoCalle, token, setRefresh } = props;
  const classes = useStyles();

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>
              <StyledTableCell align="center">Tipo Calle</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading && tipoCalle.map((tipo_calle, i) => (
              <ListaTipoCalle
                key={i}
                tipoCalle={tipo_calle}
                setLoading={setLoading}
                loading={loading}
                token={token}
                setRefresh={setRefresh}
              />
            ))}
          </TableBody>
        </Table>
        {
          !tipoCalle.length && (
            <h3 className="text-center mt-2">No se encontraron datos</h3>

          )
        }
        {
          loading && !!tipoCalle.length && (

            <SkeletonTable />

          )
        }
      </TableContainer>

    </Fragment>

  );
}

export default TablaTipoCalle;