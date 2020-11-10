import React, { Fragment } from 'react';
import ListaEstadoPlantilla from './ListaEstadoPlantilla';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';


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

const TablaEstadoPlantilla = (props) => {

    const { estadoplantilla, setLoading, loading, token, setSearchInput } = props;
    const classes = useStyles();

    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Estado Plantilla</StyledTableCell>
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {estadoplantilla.map((estadoplant, index) => (
                            <ListaEstadoPlantilla
                                key={estadoplant.id}
                                estadoplantilla={estadoplant} 
                                setLoading={setLoading}
                                loading={loading}
                                token={token}
                                setSearchInput={setSearchInput}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>

    );
}

export default TablaEstadoPlantilla;