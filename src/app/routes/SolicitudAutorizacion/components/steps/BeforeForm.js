import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "@material-ui/core/Button";

const BeforeForm = ({ setAccept }) => {

  const [terms, setTerms] = useState(false);

  return (
    <div className="app-wrapper">
      <div className="row">
        <div className="col-md-12 col-lg-12 col-12  mt-2">
          <p className="font-weight-bold text-center h3 title">
            {" "}
            Preliminares - Acreditación Prestador institucional
          </p>
        </div>
        <div className="col-md-12 col-lg-12 col-12  mt-4">
          <p className="font-weight-bold text-center h1">Importante</p>
        </div>
        <div className="col-md-12 col-lg-12 col-12  mt-4">
          <p className="text-justify">
            Para quer su solicitud de autorización sea gestionada oportunamente,
            debera acompañar la documentación de los antecendetes requeridos y
            confirmar el conocimiento de cada una de las siguientes condiciones.
          </p>
        </div>
        <div className="col-md-12 col-lg-12 col-12">
          <p className="text-justify">
            Tomo conocimiento de la obligatoriedad de adjuntar en sistema los
            siguientes documentos:
          </p>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox color="primary" disabled checked={true} id="one" />
              }
              label="1. Todas las Resoluciones de autorizaciones sanitarias vigentes"
              className="ml-3"
            />
            <FormControlLabel
              control={<Checkbox disabled checked={true} color="primary" />}
              label="2. Informe de Autoevaluación firmado por el Representante Legal"
              className="ml-3"
            />
            <FormControlLabel
              control={<Checkbox disabled checked={true} color="primary" />}
              label="3. Personería Jurídica del Representante Legal o copia legalizada"
              className="ml-3"
            />
            <FormControlLabel
              control={<Checkbox disabled checked={true} color="primary" />}
              label="4. Solicitud web de acreditación firmada por el Representante Legal"
              className="ml-3"
            />
            <FormControlLabel
              control={<Checkbox disabled checked={true} color="primary" />}
              label="5. Planos esquemáticos de Planta Física, Organigrama y Cartera de prestaciones"
              className="ml-3"
            />
          </FormGroup>
        </div>
        <div className="col-md-12 col-lg-12 col-12 border-bottom border-black mt-2">
          Nota: La veracidad y la autenticidad de los antecedentes acompañados,
          son de exclusiva responsabilidad del Solicitante
        </div>
        <div className="col-md-12 col-lg-12 col-12  mt-5">
          <FormGroup>
            <FormControlLabel
              onClick={()=>{setTerms(!terms)}}
              control={<Checkbox color="primary" checked={terms} id="one" />}
              label="Acepto ser comunicado a la dirección de correo electrónico, indicado en esta plataforma,
              respecto de todos los hitos relacionados con la presente solicitud de acredictación. 
              Las claves de acceso, la correcta utilización del correo electrónico y su periódica verificación son
              de exclusiva responsabilidad del usuario titular, asi como su utilización por terceros."
              className="ml-3"
            />
          </FormGroup>
        </div>
        <div className="col-md-12 col-lg-12 col-12  mt-5 d-flex justify-content-center">
          <Button
            className="mr-2"
            variant="contained"
            color="primary"
            onClick={() => setAccept(true)}
            disabled={!terms}
          >
            Ir a Formulario
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BeforeForm;
