import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { Controller } from "react-hook-form";

const BotonFirma = ({ control, register, errors, handleDialogOpen }) => {
  return (
    <div className="col-lg-12 d-flex justify-content-center">
      <Controller
        as={
          <ButtonGroup color="primary">
            <Button
              style={{ marginTop: 15 }}
              variant="contained"
              className="jr-btn jr-btn-lg"
              value={true}
              onClick={handleDialogOpen}
            >
              Firmar documentos seleccionados
            </Button>
            <Button
              style={{ marginTop: 15 }}
              variant="contained"
              className="jr-btn jr-btn-lg"
              value={false}
            >
              Rechazar documentos para firma
            </Button>
          </ButtonGroup>
        }
        name="intendenteFirma"
        control={control}
      />
    </div>
  );
};

export default BotonFirma;
