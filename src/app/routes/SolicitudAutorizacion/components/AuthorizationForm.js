import React, { useState, useRef } from "react";
import CardBox from "components/CardBox";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import renderSteps from "./steps/renderSteps";
import BeforeForm from "./steps/BeforeForm";
import { useHistory } from 'react-router-dom';
import { notificationsApi } from "util/NotificationApi";

const AuthorizationForm = () => {

  const history = useHistory();

  const goHome = () => {
    history.push('/app/index')
  }
  const myRef = useRef();

  const [activeStep, setActiveStep] = useState(0);
  const ActiveStepRender = renderSteps(activeStep);
  const [acceptTermn , setAcceptTermn] =  useState(false);
  const [accept, setAccept] = useState(false);
  const steps = [
    "Prestador",
    "Propietario",
    "Director",
    "Representante Legal",
    "Autorización Sanitaria",
    "Responsable de Calidad",
    "Responsable Solicitud",
    "Descarga Solicitud",
  ];

  const confirmAndNext = ()=>{
    notificationsApi('success','Solicitud Generada Exitosamente');
    handleNext();
  }

  const titleStep = [
    "Datos Prestador Institucional",
    "Datos Propietario Prestador Institucional",
    "Datos Director Prestador Institucional",
    "Datos Representante Legal Prestador Institucional",
    "Primera Resolución de Autorización y funcionamiento Prestador Institucional",
    "Datos Responsable de Calidad Prestador Institucional",
    "Datos Responsable Solicitud Prestador Institucional",
    "Solicitud de Acreditación"
  ];

  const handleNext = () => {
    setActiveStep((prevState) => prevState + 1);
  };

  const handleBack = () => {
    setActiveStep((prevState) => prevState - 1);
  };

  return (
    <div className="row" ref={myRef}>
      <CardBox

        styleName="col-lg-12"
        childrenStyle="d-flex justify-content-center"
        heading="Formulario Solicitud Autorizacion"
      >
        <div className="w-100">
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            className="horizontal-stepper-linear"
          >
            {steps.map((label, index) => {
              return (
                <Step
                  key={label}
                  className={`horizontal-stepper ${
                    index === activeStep ? "active" : ""
                  }`}
                >
                  <StepLabel className="stepperlabel">{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
      </CardBox>
      <CardBox
        styleName="col-lg-12"
        heading={accept ? titleStep[activeStep] : ""}
      >
        <div className="w-100">
          {accept && (
            <div>
              {<ActiveStepRender acceptTermn={acceptTermn} setAcceptTermn={setAcceptTermn}/>}
              <div className="app-wrapper">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-12">
                    <div
                      className={`d-flex ${
                        activeStep !== 7
                          ? "justify-content-between"
                          : "justify-content-center"
                      }`}
                    >
                      {activeStep !== 7 && (
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          variant="contained"
                          color="primary"
                        >
                          <i className="zmdi zmdi-arrow-left zmdi-hc-fw" />
                          <span>Atras</span>
                        </Button>
                      )}
                      {activeStep < 6 && (
                        <Button
                          className="center"
                          variant="contained"
                          color="primary"
                          onClick={()=> { notificationsApi('success','Datos Guardados Exitosamente') }}
                        >
                          <span>Guardar</span>
                          <i className="zmdi zmdi-save zmdi-hc-fw" />
                        </Button>
                      )}
                      {activeStep === 6 && (
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={!acceptTermn}
                          onClick={confirmAndNext}
                        >
                          <i className="zmdi zmdi-check-all zmdi-hc-fw" />
                          <span>Confirmar Solicitud</span>
                        </Button>
                      )}
                      {activeStep === 7 && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={goHome}
                        >
                          <span>Salir</span>
                        </Button>
                      )}
                      {activeStep !== 7 && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleNext}
                          disabled={activeStep === steps.length - 2}
                        >
                          <span>Siguiente</span>
                          <i className="zmdi zmdi-arrow-right zmdi-hc-fw" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!accept && <BeforeForm setAccept={setAccept} />}
        </div>
      </CardBox>
    </div>
  );
};

export default AuthorizationForm;
