import React from "react";
import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";

import { notificationsApi } from "util/Notifications";

import { deleteFieldDigitalFoldierAPI } from "api/Tareas/tareas";

const ModalDelete = ({ handleDialogActionClose, setReset, uuid }) => {
  const deleteFieldDigitalFoldier = async () => {
    const res = await deleteFieldDigitalFoldierAPI(uuid);

    if (res.error) {
      return notificationsApi("error", "Error al eliminar archivo");
    }

    notificationsApi("success", "Archivo eliminado");
    setReset(true);
    handleDialogActionClose();
  };

  return (
    <div>
      <DialogActions>
        <Button onClick={handleDialogActionClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={deleteFieldDigitalFoldier} color="secondary" autoFocus>
          Eliminar
        </Button>
      </DialogActions>
    </div>
  );
};

export default ModalDelete;
