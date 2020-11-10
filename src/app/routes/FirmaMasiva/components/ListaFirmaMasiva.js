import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';


import FileIcon, { defaultStyles } from 'react-file-icon';

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

const ListaFirmaMasiva = ({ key, signature, appendIdSignature, onOpenPDF}) => {

    
    return (
        <StyledTableRow key={key}>
            <StyledTableCell align="left">
                <Checkbox
                    color="primary"
                    onChange={(e) => appendIdSignature(e, signature.id)}
                />
            </StyledTableCell>
            <StyledTableCell align="center">
                {signature.nombre.includes('.pdf') ?
                    <FileIcon extension="pdf" {...defaultStyles.pdf} />
                    :
                    signature.nombre.includes('.docx') ?
                        <FileIcon extension="pdf" {...defaultStyles.docx} />
                        :
                        <FileIcon extension="doc" />
                }
            </StyledTableCell>
            <StyledTableCell align="center" onClick={() => onOpenPDF(signature.url)}>{signature.nombre} </StyledTableCell>
            <StyledTableCell align="center">{signature.tipo_documento}</StyledTableCell>
            <StyledTableCell align="center">{signature.firmante}</StyledTableCell>
            <StyledTableCell align="center">{signature.fecha}</StyledTableCell>
        </StyledTableRow>
    )
}

ListaFirmaMasiva.propTypes = {
    signature: PropTypes.object.isRequired
}

export default ListaFirmaMasiva