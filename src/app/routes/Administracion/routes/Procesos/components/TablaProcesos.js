import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { SkeletonTable } from "util/Skeleton";

import EditProcessForm from "./EditProcessForm";
import NewCustomDialog from "util/NewCustomDialog";

import ListaProceso from "./ListaProceso";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#CBCBD5",
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

const TablaProcesos = props => {
  const classes = useStyles();
  const { loading, processes, error, setData } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = props => {
    setModalProps(props);
    setIsOpen(true);
  };

  if (error) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>Error al cargar los Procesos</h3>
      </div>
    );
  }

  if (loading) {
    return <SkeletonTable />;
  }

  if (!processes.results.length && loading) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>AAAAAAAAAAAAAAAAAAAAA</h3>
      </div>
    );
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Nombre</StyledTableCell>
              <StyledTableCell align="center">Instancia</StyledTableCell>
              <StyledTableCell align="center">Descripción</StyledTableCell>
              <StyledTableCell align="center">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {processes.results.map(process => (
              <ListaProceso
                key={process.id}
                process={process}
                handleOpen={handleOpen}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <NewCustomDialog
        isOpen={isOpen}
        handleClose={handleClose}
        title="Formulario Proceso"
        size="false"
      >
        <EditProcessForm
          processes={processes}
          process={modalProps}
          setData={setData}
          handleClose={handleClose}
        />
      </NewCustomDialog>
    </>
  );
};

export default TablaProcesos;
