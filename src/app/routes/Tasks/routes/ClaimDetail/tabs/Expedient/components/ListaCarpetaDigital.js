import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import { ModalPdf } from "util/ModalPdf";
import NewCustomDialog from "util/NewCustomDialog";
import ModalDelete from "./ModalDelete";
import { CustomDialog } from "util/CustomDialog";
import Icon from "@mdi/react";
import { mdiFileFind, mdiDownload, mdiTrashCanOutline } from "@mdi/js";
import Tooltip from "@material-ui/core/Tooltip";
import styled from "styled-components";

import FileIcon, { defaultStyles } from "react-file-icon";

import PropTypes from "prop-types";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "rgb(33, 144, 171  )",
    color: "rgb(39, 70, 77)"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const ViewIcon = styled(Icon)`
  color: #079cc4;
  :hover {
    color: #0783a4;
  }
`;

const DownloadIcon = styled(Icon)`
  color: #04da17;
  :hover {
    color: #05a713;
  }
`;

const DeleteIcon = styled(Icon)`
  color: #d01717;
  :hover {
    color: #ff0000;
  }
`;

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    },
    "&:hover": {
      backgroundColor: "#EDEDF3"
    }
  }
}))(TableRow);

const ListaTarea = ({ key, carpeta, token, setReset, viewDocument }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAction, setIsOpenAction] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const handeDialogClose = () => setIsOpen(false);
  const handleDialogOpen = () => setIsOpen(true);

  // ACTIONS
  const handleDialogActionClose = () => setIsOpenAction(false);
  const handleDialogActionOpen = () => setIsOpenAction(true);

  const handleDeleteFile = uuid => {
    setModalTitle("Eliminar archivo");
    setModalSubtitle(
      "Estás seguro que deseas eliminar este archivo de Dspace?"
    );
    setModalContent(
      <ModalDelete
        handleDialogActionClose={handleDialogActionClose}
        setReset={setReset}
        uuid={uuid}
      />
    );
    handleDialogActionOpen(true);
  };

  return (
    <>
      <StyledTableRow key={key}>
        <StyledTableCell align="left" onClick={handleDialogOpen}>
          {carpeta.format === "Adobe PDF" ? (
            <FileIcon extension="pdf" {...defaultStyles.pdf} />
          ) : carpeta.format === "docx" ? (
            <FileIcon extension="pdf" {...defaultStyles.docx} />
          ) : (
            <FileIcon extension="doc" />
          )}
        </StyledTableCell>
        <StyledTableCell align="left">{carpeta.name}</StyledTableCell>
        <StyledTableCell align="left">{carpeta.type}</StyledTableCell>
        <StyledTableCell align="left">{carpeta.firmante}</StyledTableCell>
        <StyledTableCell align="left">20/01/2020</StyledTableCell>
        <StyledTableCell align="left">21/01/2020</StyledTableCell>
        <StyledTableCell align="left">
          <>
            <span>
              <Tooltip
                title="Abrir en otra pestaña"
                onClick={() => viewDocument(token, carpeta.link)}
              >
                <ViewIcon path={mdiFileFind} size={1} />
              </Tooltip>
            </span>
            <span>
              <Tooltip title="Descargar PDF">
                <DownloadIcon path={mdiDownload} size={1} />
              </Tooltip>
            </span>
            <span>
              <Tooltip
                title="Eliminar de Dspace"
                onClick={() => handleDeleteFile(carpeta.uuid)}
              >
                <DeleteIcon path={mdiTrashCanOutline} size={0.95} />
              </Tooltip>
            </span>
          </>
        </StyledTableCell>
      </StyledTableRow>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handeDialogClose}
        title="Vista Previa"
      >
        <ModalPdf token={token} link={carpeta.link} />
      </CustomDialog>
      <NewCustomDialog
        size="xl"
        title={modalTitle}
        subtitle={modalSubtitle}
        isOpen={isOpenAction}
        handleClose={handleDialogActionClose}
      >
        {modalContent}
      </NewCustomDialog>
    </>
  );
};

ListaTarea.propTypes = {
  tarea: PropTypes.object.isRequired
};

export default ListaTarea;
