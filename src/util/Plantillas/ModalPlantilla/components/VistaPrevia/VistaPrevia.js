import React from 'react'
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import { PDFViewer, BlobProvider } from "@react-pdf/renderer";
import { RenderPdf } from './RenderPdf';

const VistaPrevia = (props) => {

  const { formPdf, loadingUpload, handleUploadPdf, plantillaSeleccionada} = props;
  const PDF = RenderPdf(plantillaSeleccionada.name);
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  
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
      {formPdf !== undefined && (<BlobProvider document={<PDF formPdf={formPdf} meses={meses} />}>
        {({ blob, url, loading, error }) => {
          if (error) {
            return `Error al crear el PDF: ${error}`;
          }

          return loading  ? (
            `Generando el PDF... `
          ) : (
            <>
              <PDFViewer width="100%" height="500">
                <PDF formPdf={formPdf} meses={meses}/>
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
      </BlobProvider>)}
    </div>
  );
}

export default VistaPrevia
