import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import ListaCarpetaDigital from "./ListaCarpetaDigital";

import { SkeletonTable } from "util/Skeleton";
import { notificationsApi } from "util/Notifications";
import { viewDocumentApi } from "api/Instancias/instancia";
import { openBase64InNewTab } from "util/Base64Pdf";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#E2E2F6",
    color: "rgb(39, 70, 77)"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const TablaCarpetaDigital = ({
  dataFolders,
  loading,
  error,
  token,
  setReset
}) => {
  const classes = useStyles();

  if (error) {
    return (
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h3>Error al cargar las observaciones</h3>
        </div>
      </div>
    );
  }

  if (loading) {
    return <SkeletonTable />;
  }

  if (!dataFolders.length) {
    return (
      <div className="col d-flex justify-content-center">
        <h3> No se han encontrado expedientes</h3>
      </div>
    );
  }

  const viewDocument = async (token, link) => {
    const response = await viewDocumentApi(token, link);

    if (response.error) {
      return notificationsApi("error", "Error al visualizar el pdf");
    }

    openBase64InNewTab(response.data.file, "application/pdf");
  };


  return (
    <>
      <div className="table-responsive-material">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Formato</StyledTableCell>
              <StyledTableCell align="left">Nombre</StyledTableCell>
              <StyledTableCell align="left">Tipo de Documento</StyledTableCell>
              <StyledTableCell align="left">Firmado Por</StyledTableCell>
              <StyledTableCell align="left">Fecha Creación</StyledTableCell>
              <StyledTableCell align="left">Fecha Modificación</StyledTableCell>
              <StyledTableCell align="left">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataFolders.map(carpeta => (
              <ListaCarpetaDigital
                token={token}
                key={carpeta.uuid}
                carpeta={carpeta}
                viewDocument={viewDocument}
                setReset={setReset}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default TablaCarpetaDigital;
