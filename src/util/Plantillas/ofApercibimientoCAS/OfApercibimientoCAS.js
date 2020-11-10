import React, { useState } from "react";
import ScrollableTabs from "util/ScrollableTabs";
import PropTypes from "prop-types";

import Formulario from "./Formulario";
import VistaPrevia from "./VistaPrevia";

// demo
import { body } from "./data";

const TabContainer = props => {
  return <div style={{ padding: 20 }}>{props.children}</div>;
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const firmante = [
  {
    id: 1,
    nombre: "CARMEN MONSALVE BENAVIDES",
    cargo: "INTENDENTA DE PRESTADORES DE SALUD (S) SUPERINTENDENCIA DE SALUD"
  },
  { id: 2, nombre: "Batman", cargo: "Caballero de la Noche" },
  { id: 3, nombre: "Super-Man", cargo: "SuperMandoneado" }
];

const OfApercibimientoCAS = props => {
  const {
    instanciaForm,
    setInstanciaForm,
    match,
    meses,
    region,
    comunas,
    provincia,
    tabOptions,
    loadingUpload,
    handleUploadPdf
  } = props;
  const [formPdf, setFormPdf] = useState({ cotizante: {} });
  const [tabSelect, setTab] = useState(0);
  const [bodyState, setBody] = useState(body)

  return (
    <>
      <ScrollableTabs
        tabOptions={tabOptions}
        tabSelect={tabSelect}
        setTab={setTab}
      />
      <div className="w-100">
        {tabSelect === 0 && (
          <TabContainer>
            <Formulario
              instanciaForm={instanciaForm}
              setInstanciaForm={setInstanciaForm}
              provincia={provincia}
              comunas={comunas}
              region={region}
              formPdf={formPdf}
              setFormPdf={setFormPdf}
              firmante={firmante}
              bodyState={bodyState}
              setBody={setBody}
            />
          </TabContainer>
        )}
        {tabSelect === 1 && (
          <TabContainer>
            <VistaPrevia
              match={match}
              instanciaForm={instanciaForm}
              setInstanciaForm={setInstanciaForm}
              meses={meses}
              formPdf={formPdf}
              comunas={comunas}
              region={region}
              firmante={firmante}
              loadingUpload={loadingUpload}
              handleUploadPdf={handleUploadPdf}
              //
              bodyState={bodyState}
            />
          </TabContainer>
        )}
      </div>
    </>
  );
};

export default OfApercibimientoCAS;
