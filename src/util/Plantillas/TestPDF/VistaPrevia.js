import React from "react";
import PDF from "./PDF";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

import { PDFViewer, BlobProvider } from "@react-pdf/renderer";

const VistaPrevia = props => {
  const {
    instanciaForm,
    loadingUpload,
    handleUploadPdf
  } = props;

  const form = {
    nombre: instanciaForm.cotizante.nombres,
    apellido_paterno: instanciaForm.cotizante.apellido_paterno,
    reclamo: instanciaForm.n_reclamo,
    tipo: "ORD. IP/N°",
    fecha: {
      dia: "17",
      mes: "06",
      año: "2020"
    },
    math: "Solicita Expediente",
    de: "SUPERMAN",
    a:
      "Director/Representante Legal (Prestador) calle N°, Comuna Santiago Centro, Region Metropolitana"
  };

  if (loadingUpload) {
    return (
      <div>
        <h3 className="d-flex justify-content-center ">
          Subiendo Plantilla...
        </h3>
        <LinearProgress />
      </div>
    );
  }

  return (
    <div>
      <BlobProvider document={<PDF form={form} />}>
        {({ blob, url, loading, error }) => {
          if (error) {
            return `Error al crear el PDF: ${error}`;
          }

          return loading ? (
            `Generando el PDF... `
          ) : (
            <>
              <PDFViewer width="92%" height="500">
                <PDF form={form} />
              </PDFViewer>

              <div className="d-flex justify-content-center ">
                <Button
                  variant="contained"
                  color="primary"
                  className="jr-btn jr-btn-lg"
                  onClick={e => handleUploadPdf(e, blob)}
                >
                  Subir PDF
                </Button>
              </div>
            </>
          );
        }}
      </BlobProvider>
    </div>
  );
};

export default VistaPrevia;
