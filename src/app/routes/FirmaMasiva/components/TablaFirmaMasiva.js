import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import { mdiDraw } from '@mdi/js';
import Icon from '@mdi/react'

import ListaFirmaMasiva from './ListaFirmaMasiva'
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

const TablaFirmaMasiva = (props) => {

    const { signatures = [], handleDialogOpen, loading, error, appendIdSignature } = props

    const classes = useStyles();

    const onOpenPDF = (url) => {
        window.open(url)
    }

    if (error) {
        return (<div className="col d-flex justify-content-center">
            <h3>Error al cargar los documentos</h3>
        </div>)
    }

    if (loading) {
        return (
            <SkeletonTable/>
        )
    }

    if (!signatures.length) {
        return (<div className="col d-flex justify-content-center">
            <h3> No se han encontrado documentos por firmar</h3>
        </div>)
    }


    return (
        <>
            <div className="jr-btn-group d-flex flex-row-reverse ">
                <Button
                    variant="contained"
                    onClick={handleDialogOpen}
                    className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white">
                    <Icon
                        path={mdiDraw}
                        size={0.8}
                        color="	#505050"
                    />
                    <span>Firmar Documentos</span>
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Firma</StyledTableCell>
                            <StyledTableCell align="center">Formato</StyledTableCell>
                            <StyledTableCell align="center">Nombre</StyledTableCell>
                            <StyledTableCell align="center">Tipo Documento</StyledTableCell>
                            <StyledTableCell align="center">Firmante</StyledTableCell>
                            <StyledTableCell align="center">Fecha</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {signatures.map((signature, index) => (
                            <ListaFirmaMasiva
                                key={signature.id}
                                signature={signature}
                                appendIdSignature={appendIdSignature}
                                onOpenPDF={onOpenPDF}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TablaFirmaMasiva
