import React from 'react'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@mdi/react';
import { mdiFileEdit, mdiDelete } from '@mdi/js'

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

const ListaProceso = ({ process, handleOpen}) => {

    return (
        <>
            <StyledTableRow key={process.id} style={{ textDecoration: 'none' }}>
                <StyledTableCell align="center" >{process.nombre}</StyledTableCell>
                <StyledTableCell align="center">{process.process_definition}</StyledTableCell>
                <StyledTableCell align="center">{process.descripcion}</StyledTableCell>
                <StyledTableCell align="center">
                    <Button
                        type="submit" variant="contained" color="primary"
                        className="jr-btn jr-btn-lg"
                        onClick={() => handleOpen(process)}
                    >
                        <Icon path={mdiFileEdit}
                            title="Editar"
                            size={1}
                        />
                    </Button>
                    <Button
                        type="submit"
                        disabled
                        variant="contained"
                        color="primary"
                        className="jr-btn jr-btn-lg" >
                        <Icon path={mdiDelete}
                            title="Eliminar"
                            size={1}

                        />
                    </Button>
                </StyledTableCell>
            </StyledTableRow>
        </>
    )
}

ListaProceso.propTypes = {
    process: PropTypes.object.isRequired
}

export default ListaProceso

