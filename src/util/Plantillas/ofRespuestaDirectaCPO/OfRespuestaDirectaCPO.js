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

const OfRespuestaDirectaCPO = ({
  instanciaForm,
  setInstanciaForm,
  match,
  meses,
  comunas,
  region,
  provincia,
  // function upload
  tabOptions,
  loadingUpload,
  handleUploadPdf
}) => {
  const [tabSelect, setTab] = useState(0);
  const [formPdf, setFormPdf] = useState({ cotizante: {} });

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
              meses={meses}
              instanciaForm={instanciaForm}
              setInstanciaForm={setInstanciaForm}
              region={region}
              comunas={comunas}
              provincia={provincia}
              formPdf={formPdf}
              setFormPdf={setFormPdf}
              firmante={firmante}
            />
          </TabContainer>
        )}
        {tabSelect === 1 && (
          <TabContainer>
            <VistaPrevia
              meses={meses}
              match={match}
              instanciaForm={instanciaForm}
              setInstanciaForm={setInstanciaForm}
              region={region}
              comunas={comunas}
              provincia={provincia}
              formPdf={formPdf}
              setFormPdf={setFormPdf}
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

export default OfRespuestaDirectaCPO;
