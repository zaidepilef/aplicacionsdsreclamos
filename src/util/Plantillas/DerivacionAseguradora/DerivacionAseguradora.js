import React, { useState } from "react";
import ScrollableTabs from "util/ScrollableTabs";
import PropTypes from "prop-types";
import Formulario from "./Formulario";
import VistaPrevia from "./VistaPrevia";

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

const DerivacionAseguradora = props => {
  const {
    instanciaForm,
    setInstanciaForm,
    match,
    meses,
    region,
    comunas,
    token,
    provincia,
    tabOptions,
    loadingUpload,
    handleUploadPdf
  } = props;
  const [formPdf, setFormPdf] = useState({ cotizante: {} });
  const [tabSelect, setTab] = useState(0);

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
              token={token}
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
            />
          </TabContainer>
        )}
      </div>
    </>
  );
};

export default DerivacionAseguradora;
