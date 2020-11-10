import React, { Fragment } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import ListaTipoReclamo from './ListaTipoReclamo';
import { SkeletonTable } from 'util/Skeleton';

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


const TablaTipoReclamo = (props) => {

    const classes = useStyles();
    const { tipoReclamo,
        setLoading,
        loading,
        token,
        setSearchInput } = props;

    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {/* <StyledTableCell />
                            <StyledTableCell >ID</StyledTableCell>
                            <StyledTableCell >Proceso</StyledTableCell> */}
                             <StyledTableCell align="center">ID</StyledTableCell>
                             <StyledTableCell align="center" >Tipo Reclamo</StyledTableCell>
                             <StyledTableCell align="center" >Acciones</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tipoReclamo.map((tipoReclamo, i) => (
                            <ListaTipoReclamo
                                key={i}
                                tipoReclamo={tipoReclamo}
                                setLoading={setLoading}
                                loading={loading}
                                token={token}
                                setSearchInput={setSearchInput}
                            />
                        ))}
                    </TableBody>
                </Table>
                {
                    !tipoReclamo.length && (
                        <h3 className="text-center mt-2">No se encontraron datos</h3>

                    )
                }
                {
                    loading && !!tipoReclamo.length && (

                        <SkeletonTable />

                    )
                }
            </TableContainer>
        </Fragment>
    );
}

export default TablaTipoReclamo;