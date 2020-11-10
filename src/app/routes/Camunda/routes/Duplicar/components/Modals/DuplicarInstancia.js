import React, { useState } from "react";
import {
  FormHelperText,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { notificationsApi } from "util/Notifications";
import { duplicateInstance } from "api/Instancias/camunda";
import LinearProgress from "@material-ui/core/LinearProgress";


const DuplicarInstancia = props => {
  const { selected, handeDialogClose } = props;
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [openS, setOpenS] = useState(false);
  const handleCloseS = () => setOpenS(false);
  const handleOpenS = () => setOpenS(true);
  const [duplicate, setDuplicate] = useState(false);

  const methodSelected = e => {

    if (e.target.value) {
      setDuplicate(false);
    } else {
      setDuplicate(true);
    }
  };

  const duplicateInstanceApi = async () => {
    setLoadingRequest(true)
    const duplicar = await duplicateInstance(selected, duplicate);
    if (duplicar.data === null) {
      setLoadingRequest(false);
      notificationsApi(
        "error",
        `Error al ${duplicate ? "Duplicar" : "Copiar"}`
      );
    } else {
      setLoadingRequest(false);
      notificationsApi(
        "success",
        `Instancias ${duplicate ? "Duplicadas " : "Copiadas"} Correctamente`
      );
    }
    handeDialogClose();
  };

  return (
    <div className="row">
      {loadingRequest && (
        <div className="col-md-12 col-12">
          <h3 className="d-flex justify-content-center ">
          {duplicate ? "Duplicando" : "Copiando"} Instancias
          </h3>
          <LinearProgress />
        </div >
      )}
      {!loadingRequest && (
        <>
          <div className="col-md-12 col-12 mb-2">
            <FormControl variant="outlined" margin="normal" fullWidth>
              <InputLabel>Metodo</InputLabel>
              <Select
                id="method"
                open={openS}
                fullWidth
                label="Metodo"
                onClose={handleCloseS}
                onOpen={handleOpenS}
                onChange={methodSelected}
              >
                <MenuItem value={0}>Duplicar</MenuItem>
                <MenuItem value={1}>Copiar</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-md-12 col-12 d-flex flex-row-reverse">
            <Button
              className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white"
              color="primary"
              onClick={duplicateInstanceApi}
            >
              Aceptar
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default DuplicarInstancia;
