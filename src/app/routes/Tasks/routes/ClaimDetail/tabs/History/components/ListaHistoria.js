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

const ListaHistoria = ({ key, history }) => {

    return (
        <StyledTableRow key={key}>
            <StyledTableCell align="left">{history.descripcion}</StyledTableCell>
            <StyledTableCell align="left">
                {!history.usuario_responsable ? "Usuario no existe" : history.usuario_responsable }
            </StyledTableCell>
            <StyledTableCell align="left">{history.fecha_inicio}</StyledTableCell>
            <StyledTableCell align="left">
                {!history.fecha_termino ? "En proceso" : history.fecha_termino}
                </StyledTableCell>
            <StyledTableCell align="left">
                    {!history.dias_corridos ? "0" : history.dias_corridos}
            </StyledTableCell>
            <StyledTableCell align="left">
                {!history.dias_habiles ? "0" : history.dias_habiles}
            </StyledTableCell>
        </StyledTableRow>
    )
}

ListaHistoria.propTypes = {
    tarea: PropTypes.object.isRequired
}

export default ListaHistoria