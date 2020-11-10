import React, { useState, useEffect, useMemo } from "react";
import ScrollableTabs from "util/ScrollableTabs";
import PropTypes from "prop-types";
import Formulario from "./components/Formulario/Formulario";
import VistaPrevia from "./components/VistaPrevia/VistaPrevia";
import { body } from "./data";

const TabContainer = props => {
  return <div style={{ padding: 20 }}>{props.children}</div>;
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const ModalPlantila = React.memo(props => {
  const {
    instanciaForm,
    loadingUpload,
    handleUploadPdf,
    plantillaSeleccionada
  } = props;

  const [bodyState, setBody] = useState(prevState => {
    const parrafo = body.filter(parr => parr.id ===  plantillaSeleccionada.name)[0].parrafo;
    return parrafo;
  });
  const [materiaPdf, setMateriaPdf] = useState(() => {
    const mat =  body.filter(parr => parr.id ===  plantillaSeleccionada.name)[0].materia_form;
    return mat;
  });
  const [formPdf, setFormPdf] = useState(undefined);

  useEffect(() => {
    const asignarData = () => {
      setFormPdf({
        ...instanciaForm,
        documentos: {
          ci: false,
          nac: false,
          res: false,
          recl: false,
          pod: false,
          hec: false
        },
        firmante: {
          id: 1,
          nombre: "CARMEN MONSALVE BENAVIDES",
          cargo:
            "INTENDENTA DE PRESTADORES DE SALUD (S) SUPERINTENDENCIA DE SALUD"
        },
        bodyState,
        materia_form: materiaPdf,
        mediacion:false,
        tipo_prestador:null
      });
    };

    if (formPdf === undefined) {
      asignarData();
      console.log("se asigna data",formPdf);
    } else {
      console.log("ajale wey");
    }
  }, [instanciaForm]);
  const tabOptions = ["Fomulario", "Vista Previa"];
  // !TODO: revisar esta logica para mejorar performance
  // const formPdfMemo = useMemo(()=> {
  //   formPdf === undefined ? instanciaForm : formPdf
  // },[formPdf]);
  // console.log('form memo', formPdfMemo);
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
            {formPdf !== undefined && (
              <Formulario
                formPdf={formPdf}
                setFormPdf={setFormPdf}
                plantillaSeleccionada={plantillaSeleccionada}
                bodyState={bodyState}
                setBody={setBody}
              />
            )}
          </TabContainer>
        )}

        {tabSelect === 1 && (
          <TabContainer>
            <VistaPrevia
              formPdf={formPdf}
              loadingUpload={loadingUpload}
              handleUploadPdf={handleUploadPdf}
              plantillaSeleccionada={plantillaSeleccionada}
            />
          </TabContainer>
        )}
      </div>
    </>
  );
});

export default ModalPlantila;
