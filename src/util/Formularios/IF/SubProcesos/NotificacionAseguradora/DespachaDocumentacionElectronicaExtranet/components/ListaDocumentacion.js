import React, {useState} from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FileIcon, { defaultStyles } from "react-file-icon";
import PropTypes from "prop-types";
import { ModalPdf } from "util/ModalPdf";
import { CustomDialog } from "util/CustomDialog";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "rgb(33, 144, 171  )",
    color: "rgb(39, 70, 77)"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

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

const ListaDocumentacion = ({ key, document, appendDocument, token }) => {
  
  const [isOpen,setIsOpen] = useState(false);

  const handeDialogClose = () => setIsOpen(false);
  const handleDialogOpen = () => setIsOpen(true);

  return (
    <>
      <StyledTableRow key={key}>
        <StyledTableCell align="left">
          <Checkbox
            color="primary"
            onChange={e => appendDocument(e, document.retrieveLink)}
          />
        </StyledTableCell>
        <StyledTableCell align="left" onClick={handleDialogOpen}>
          {document.format === "Adobe PDF" ? (
            <FileIcon extension="pdf" {...defaultStyles.pdf} />
          ) : document.format === "docx" ? (
            <FileIcon extension="pdf" {...defaultStyles.docx} />
          ) : (
                <FileIcon extension="doc" />
              )}
        </StyledTableCell>
        <StyledTableCell align="left">{document.name}</StyledTableCell>
        <StyledTableCell align="left">{document.type}</StyledTableCell>
        <StyledTableCell align="left">{document.firmante}</StyledTableCell>
        <StyledTableCell align="left">20/01/2020</StyledTableCell>
        <StyledTableCell align="left">21/01/2020</StyledTableCell>
      </StyledTableRow>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handeDialogClose}
        title="Vista Previa"
      >
      <ModalPdf 
        token={token}
        link={document.link}
      />
      </CustomDialog>
    </>
  );
};

ListaDocumentacion.propTypes = {
  document: PropTypes.object.isRequired
};

export default ListaDocumentacion;
