import React from "react";
import { Button } from "@material-ui/core";

const BotonAcciones = ({ styleName, disabled = false }) => {
  return (
    <div className="row">
      <div className={`${styleName}`}>
        <Button
          style={{ marginTop: 15 }}
          id="back"
          type="submit"
          variant="contained"
          color="primary"
          className="jr-btn jr-btn-lg"
        >
          Volver
        </Button>
        <Button
          style={{ marginTop: 15 }}
          id="saveForm"
          type="submit"
          variant="contained"
          color="primary"
          className="jr-btn jr-btn-lg"
        >
          Guardar
        </Button>
        <Button
          style={{ marginTop: 15 }}
          id="completeTask"
          type="submit"
          variant="contained"
          color="primary"
          className="jr-btn jr-btn-lg"
          disabled={disabled}
        >
          Completar
        </Button>
      </div>
    </div>
  );
};

BotonAcciones.defaultProps = {
  styleName: "col-12 d-flex justify-content-center"
};

export default BotonAcciones;
