import React, { useState } from "react"
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

const OfValorPrestaciones = ({
    instanciaForm,
    setInstanciaForm,
    match,
    meses,
    region,
    comunas,
    provincia,
    // function upload
    tabOptions,
    loadingUpload,
    handleUploadPdf
  }) => {
    const [tabSelect, setTab] = useState(0);
    const [formPdf, setFormPdf] = useState({ cotizante: {} });
    const [firmante] = useState([
      {
        id: 1,
        nombre: "CARMEN MONSALVE BENAVIDES",
        cargo: "INTENDENTA DE PRESTADORES DE SALUD (S) SUPERINTENDENCIA DE SALUD"
      },
    ]);

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
                meses={meses}
                provincia={provincia}
                comunas={comunas}
                region={region}
                formPdf={formPdf}
                setFormPdf={setFormPdf}
                firmante={firmante}
              />
            </TabContainer>
          )}
          {tabSelect === 1 && (
            <TabContainer>
              <VistaPrevia
                instanciaForm={instanciaForm}
                setInstanciaForm={setInstanciaForm}
                meses={meses}
                match={match}
                provincia={provincia}
                comunas={comunas}
                region={region}
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

  export default OfValorPrestaciones;
