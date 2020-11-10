import React from "react";
import TextField from "@material-ui/core/TextField";
import CardBox from "components/CardBox";
import PropTypes from "prop-types";

const ClaimHeader = ({ instanciaData }) => {
  return (
    <div className="row">
      <CardBox styleName="col-lg-12">
        <form className="row" noValidate autoComplete="off">
          <div className="col-md-4 col-12">
            <TextField
              name="nReclamo"
              label="N° Reclamo"
              variant="outlined"
              margin="normal"
              fullWidth
              value={instanciaData.n_reclamo}
            />
          </div>
          <div className="col-md-4 col-12">
            <TextField
              name="proceso"
              label="Proceso"
              variant="outlined"
              margin="normal"
              fullWidth
              value={instanciaData.process_definition.tipo_admisibilidad}
            />
          </div>
          <div className="col-md-4 col-12">
            <TextField
              name="fechaHoraSolicitud"
              label="Fecha y hora de solicitud"
              variant="outlined"
              margin="normal"
              fullWidth
              value={instanciaData.fecha_reclamo_prestador}
            />
          </div>
          <div className="col-md-4 col-12">
            <TextField
              name="reclamante"
              label="Reclamante"
              variant="outlined"
              margin="normal"
              fullWidth
              value={`${instanciaData.cotizante.nombres} ${instanciaData.cotizante.apellido_paterno}`}
            />
          </div>
          <div className="col-md-4 col-12">
            <TextField
              name="afectado"
              label="Paciente"
              variant="outlined"
              margin="normal"
              fullWidth
              value={`${instanciaData.cotizante.nombres} ${instanciaData.cotizante.apellido_paterno}`}
            />
          </div>
          <div className="col-md-4 col-12">
            <TextField
              name="etapa"
              label="Etapa"
              variant="outlined"
              margin="normal"
              fullWidth
              value={instanciaData.nombre_task_camunda}
            />
          </div>
        </form>
      </CardBox>
    </div>
  );
};

ClaimHeader.propTypes = {
  instanciaData: PropTypes.object.isRequired
};

export default ClaimHeader;
