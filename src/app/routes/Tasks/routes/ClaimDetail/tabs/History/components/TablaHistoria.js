import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import ListaHistoria from './ListaHistoria'
import { SkeletonTable } from 'util/Skeleton'

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#CBCBD5',
        color: 'rgb(39, 70, 77)',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

const TablaHistoria = (props) => {

    const classes = useStyles();

    const { historys, loading, error } = props

    if (loading) {
        return (
            <SkeletonTable/>
        )
    }

    if (error) {
        return (
            <div className="col d-flex justify-content-center">
                <h3>Error al cargar las historias</h3>
            </div>
        )
    }

    if (!historys.length) {
        return (<div className="col d-flex justify-content-center">
            <h3> No se han encontrado historias</h3>
        </div>)
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">Tarea</StyledTableCell>
                        <StyledTableCell align="left">Responsable</StyledTableCell>
                        <StyledTableCell align="left">Fecha Inicio</StyledTableCell>
                        <StyledTableCell align="left">Fecha Cierre</StyledTableCell>
                        <StyledTableCell align="left">Dias Corridos</StyledTableCell>
                        <StyledTableCell align="left">Dias Habiles</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {historys.map(history => (
                        <ListaHistoria
                            key={history.id}
                            history={history}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TablaHistoria
