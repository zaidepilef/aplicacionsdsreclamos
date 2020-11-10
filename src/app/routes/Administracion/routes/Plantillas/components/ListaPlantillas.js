import React, { useState, Fragment } from 'react';
import { deletePlantilla } from 'api/Mantenedores/Plantillas/plantillas'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { notificationsApi } from 'util/Notifications';
import Swal from 'sweetalert2';
import Icon from "@mdi/react";
import { mdiDelete, mdiFileEdit } from "@mdi/js";
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import NewCustomDialog from 'util/NewCustomDialog';
//modal
import EditarPlantilla from './modal/EditarPlantilla';
import VistaPreviaPdf from './modal/VistaPreviaPdf';


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


const ListaPlantillas = (props) => {

  const { estados, plantilla, setLoading, token, setPlantillas } = props;
  const [isOpen, setIsOpen] = useState(false);


  //opciones modal
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const handleViewEdit = () => {
    setModalTitle("Editar Plantilla")
    setModalContent(<EditarPlantilla
      estados={estados}
      token={token}
      plantilla={plantilla}
      setLoading={setLoading}
      handeDialogClose={handeDialogClose}
      setPlantillas={setPlantillas}
    />)
    handleDialogOpen();
  }

  const handlePdfView = () => {
    setModalTitle(`Plantilla: ${plantilla.nombre}`)
    setModalContent(<VistaPreviaPdf
      plantilla={plantilla}
    />)
    handleDialogOpen();
  }

  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => {
    setIsOpen(false);
    setModalTitle("");
    setModalContent(null);
  };


  const eliminarPlantilla = () => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "Esta accion no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Eliminar'
    })
      .then(result => {
        if (result.value) {
          deletePlantilla(token, plantilla).then(response => {
            Swal.fire(
              'Eliminado!',
              'La Plantilla a sido eliminada.',
              'success'
            )
          })
            .catch(err => {
              notificationsApi('error', err)
            })
        }

      })
  }
  return (
    <Fragment>
      <StyledTableRow style={{ textDecoration: 'none' }}>
        <StyledTableCell align="center" >{plantilla.filename}</StyledTableCell>
        <StyledTableCell align="center" >{plantilla.version}</StyledTableCell>
        <StyledTableCell align="center" >{plantilla.descripcion}</StyledTableCell>
        <StyledTableCell align="center">{plantilla.nombre}</StyledTableCell>
        <StyledTableCell align="center">{plantilla.nombre_estado}</StyledTableCell>
        <StyledTableCell align="center">
          <div className="d-flex align-items-center">
            <Button
              onClick={handlePdfView}
              variant="contained"
              color="primary"
              className="jr-btn jr-btn-lg" >
              <PictureAsPdfIcon />
            </Button>

            <Button
              variant="contained"
              color="primary"
              className="jr-btn jr-btn-lg"
              onClick={handleViewEdit}
            >
              <Icon
                path={mdiFileEdit}
                title="Editar"
                size={1}
              />
            </Button>
            <Button

              onClick={eliminarPlantilla}
              variant="contained"
              color="primary"
              className="jr-btn jr-btn-lg" >
              <Icon
                path={mdiDelete}
                title="Eliminar"
                size={1}
              />
            </Button>
            <NewCustomDialog
              size={true}
              title={modalTitle}
              isOpen={isOpen}
              handleClose={handeDialogClose}
            >
              {modalContent}
            </NewCustomDialog>
          </div>
        </StyledTableCell>
      </StyledTableRow>

    </Fragment>
  );
}

export default ListaPlantillas;