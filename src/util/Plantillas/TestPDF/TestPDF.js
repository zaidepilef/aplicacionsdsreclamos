import React, { useState, useEffect } from "react";
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

const TestPDF = ({
  instanciaData,
  plantillas,
  setPlantillas,
  match,
  tabOptions,
  loadingUpload,
  handleUploadPdf
}) => {
  const [tabSelect, setTab] = useState(0);
  const [loading, setLoading] = useState(true);
  const [instanciaForm, setInstanciaForm] = useState({});


  useEffect(() => {
    setInstanciaForm(instanciaData);
    setLoading(false);
  }, [instanciaData]);

  if (loading) {
    return <h3>Cargando...</h3>;
  }


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
            />
          </TabContainer>
        )}
        {tabSelect === 1 && (
          <TabContainer>
            <VistaPrevia
              match={match}
              instanciaForm={instanciaForm}
              plantillas={plantillas}
              setPlantillas={setPlantillas}
              loadingUpload={loadingUpload}
              handleUploadPdf={handleUploadPdf}
            />
          </TabContainer>
        )}
      </div>
    </>
  );
};

export default TestPDF;
