import React, { Fragment } from 'react';
import ListaPlantillas from './ListaPlantillas';
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

const TablaPlantillas = (props) => {

    const { estados, plantillas, setLoading, loading, token, setSearchInput, setPlantillas } = props;
    const classes = useStyles();

    return (
        <Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Nombre Archivo</StyledTableCell>
                            <StyledTableCell align="center">Version</StyledTableCell>
                            <StyledTableCell align="center">Descripción</StyledTableCell>
                            <StyledTableCell align="center">Plantilla</StyledTableCell>
                            <StyledTableCell align="center">Estado</StyledTableCell>
                            <StyledTableCell align="center">Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!loading && plantillas.map((plantilla, index) => (
                            <ListaPlantillas
                                key={index}
                                estados={estados}
                                plantilla={plantilla}
                                setLoading={setLoading}
                                loading={loading}
                                token={token}
                                setSearchInput={setSearchInput}
                                setPlantillas={setPlantillas}
                            />
                        ))}
                    </TableBody>
                </Table>
                {
                    !plantillas.length  && (
                        <h3 className="text-center mt-2">No se encontraron datos</h3>

                    )
                }
                {
                    loading && !!plantillas.length && (

                        <SkeletonTable />

                    )
                }
            </TableContainer>
        </Fragment>

    );
}

export default TablaPlantillas;