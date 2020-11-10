import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const DownloadDetail = () => {

  return (
    <div className="app-wrapper">
      <div className="row">
        <div className="col-12 col-md-12">
          <p className="title h3">Sr(a). Responsable</p>
        </div>
        <div className="col-12 col-md-12">
          <p className="subtitle h4">
            {" "}
            Su solicitud de acreditación para Prestador Institucional de Salud
            Prestador ha sido ingresada con éxito en el sistema
          </p>
        </div>
        <div className="col-12 col-md-5">
          <TextField
            id="n_application"
            name="n_application"
            label="Número de Solicitud"
            variant="outlined"
            margin="normal"
            disabled
            value={123456}
            fullWidth
          />
        </div>
        <div className="w-100"></div>
        <div className="col-12 col-md-5">
          <TextField
            id="date_application"
            name="date_application"
            label="Fecha Solcitud Web"
            variant="outlined"
            margin="normal"
            disabled
            value="13/08/2020"
            fullWidth
          />
        </div>
        <div className="w-100"></div>
        <div className="col-12 col-md-6 mt-4">
          <p className="title h4">Favor Descargar achivo de Solicitud web.</p>
          <p className="title h4">
            Una vez firmado adjuntarlo con la demás documentación requerida
          </p>
          <p className="title h4">
            (Adjuntar en menú lateral "documentación Adjunta")
          </p>
        </div>
        <div className="col-12 col-md-6 mt-4">
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="p-3"
            
          >
            <i className="zmdi zmdi-download zmdi-hc-fw" />
            <span>Descarga Solicitud Web PDF</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadDetail;
