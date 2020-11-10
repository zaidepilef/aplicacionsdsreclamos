import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import OtherForm from "./OtherForm";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

const ResponsibleForRequest = ({ setAcceptTermn, acceptTermn }) => {
  const [other, setOther] = useState(false);

  return (
    <div className="app-wrapper">
      <div className="row">
        <div className="col-12 col-md-12">
          <FormControl component="ds_check">
            <RadioGroup aria-label="responsible" name="responsible">
              <FormControlLabel
                value="diretor"
                control={<Radio color="primary" />}
                label="Director"
                margin="normal"
                onChange={() => {
                  setOther(false);
                }}
              />
              <FormControlLabel
                margin="normal"
                value="legal_representative"
                control={<Radio color="primary" />}
                label="Representante Legal"
                onChange={() => {
                  setOther(false);
                }}
              />
              <FormControlLabel
                margin="normal"
                value="quality_manager"
                control={<Radio color="primary" />}
                label="Responsable Calidad"
                onChange={() => {
                  setOther(false);
                }}
              />
              <FormControlLabel
                value="other"
                control={<Radio color="primary" />}
                label="Otros"
                onChange={() => {
                  setOther(true);
                }}
              />
            </RadioGroup>
          </FormControl>
          <OtherForm other={other} />
          <div className="col-12 col-md-12 mt-4">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox color="primary" checked={acceptTermn} id="one" />
                }
                label={
                  <b className="text-uppercase">
                    declaro que me hago responsable de recibir la notificación
                    eletrónica de la resoluciones y actualizaciones que se
                    refieren en el numeral 123456 de la circular IP Nº 13216
                    fecha 12/12/2020, emitidas por la intendecia de prestadores,
                    en la dirección de correo electrónico indicada
                    anteriormente."
                  </b>
                }
                onClick={() => {
                  setAcceptTermn(!acceptTermn);
                }}
              />
            </FormGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsibleForRequest;
