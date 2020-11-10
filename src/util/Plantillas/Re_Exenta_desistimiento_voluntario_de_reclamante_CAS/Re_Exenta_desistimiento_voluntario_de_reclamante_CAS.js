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

const Re_Exenta_desistimiento_voluntario_de_reclamante_CAS = ({
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
  const [documentos, setDocumentos] = useState({
    ci: false,
    nac: false,
    res: false,
    recl: false,
    pod: false,
    hec: false
  });
    const [firmante,setFirmante]= useState([
        {id:1,nombre:'CARMEN MONSALVE BENAVIDES',cargo:'INTENDENTA DE PRESTADORES DE SALUD (S) SUPERINTENDENCIA DE SALUD'},
        {id:2,nombre:'Carlos',cargo:'Gerente'},
        {id:3,nombre:'Alicia', cargo:'RRHH'}])


    return (
        <>
            <ScrollableTabs
        tabOptions={tabOptions}
        tabSelect={tabSelect}
        setTab={setTab}
        />
            <div className="w-100">
                {tabSelect === 0 &&
                    <TabContainer>
                        <Formulario
                            instanciaForm={instanciaForm}
                            setInstanciaForm={setInstanciaForm}
                            region={region}
                            comunas={comunas}
                            provincia={provincia}
                            formPdf={formPdf}
                            setFormPdf={setFormPdf}
                            documentos={documentos}
                            setDocumentos={setDocumentos}
                            setFirmante={setFirmante}
                            firmante={firmante}
                        />
                    </TabContainer>
                }
                {tabSelect === 1 &&
                    <TabContainer>
                        <VistaPrevia
                            match={match}
                            instanciaForm={instanciaForm}
                            setInstanciaForm={setInstanciaForm}
                            meses={meses}
                            region={region}
                            comunas={comunas}
                            provincia={provincia}
                            formPdf={formPdf}
                            documentos={documentos}
                            firmante={firmante}
                            loadingUpload={loadingUpload}
                            handleUploadPdf={handleUploadPdf}
                        />
                    </TabContainer>}
            </div>
        </>
    );
};
export default Re_Exenta_desistimiento_voluntario_de_reclamante_CAS;
