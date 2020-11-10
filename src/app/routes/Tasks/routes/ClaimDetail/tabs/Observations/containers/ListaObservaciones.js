import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: 'rgb(33, 144, 171  )',
        color: 'rgb(39, 70, 77)',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        '&:hover': {
            backgroundColor: '#EDEDF3'
        }
    },
}))(TableRow);

const ListaObservaciones = ({ key, observacion }) => {

    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    
    return (
        <StyledTableRow key={key}>
            <StyledTableCell align="left">{observacion.descripcion}</StyledTableCell>
            <StyledTableCell align="left">{observacion.user}</StyledTableCell>
            <StyledTableCell align="left">{observacion.tarea}</StyledTableCell>
            <StyledTableCell align="left">{(new Date(observacion.fecha)).toLocaleDateString('es-CL', options)}</StyledTableCell>
        </StyledTableRow>
    )
}

ListaObservaciones.propTypes = {
    observacion: PropTypes.object.isRequired
}

export default ListaObservaciones