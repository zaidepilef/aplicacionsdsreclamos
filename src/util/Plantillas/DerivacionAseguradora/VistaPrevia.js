import React from "react";
import PDF from "./PDF";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import { PDFViewer, BlobProvider } from "@react-pdf/renderer";

const VistaPrevia = props => {
  const {
    meses,
    formPdf,
    instanciaForm,
    firmante,
    handleUploadPdf,
    loadingUpload
  } = props;

  const form = {
    nombre: formPdf.cotizante.hasOwnProperty("nombres")
      ? formPdf.cotizante.nombres[0]
      : instanciaForm.cotizante.nombres,
    apellido_paterno: formPdf.cotizante.hasOwnProperty("apellido_paterno")
      ? formPdf.cotizante.apellido_paterno[0]
      : instanciaForm.cotizante.apellido_paterno,
    reclamo: formPdf.cotizante.hasOwnProperty("n_reclamo")
      ? formPdf.cotizante.n_reclamo[0]
      : instanciaForm.n_reclamo,
    tipo: "ORD. IF/N°",
    firmante: {
      nombre: formPdf.cotizante.hasOwnProperty("firmante")
        ? firmante.filter(f => f.id === formPdf.cotizante.firmante[0])[0].nombre
        : firmante[0].nombre,
      cargo: formPdf.cotizante.hasOwnProperty("firmante")
        ? firmante.filter(f => f.id === formPdf.cotizante.firmante[0])[0].cargo
        : firmante[0].cargo
    },
    ord_if: formPdf.cotizante.hasOwnProperty("ord_if")
      ? formPdf.cotizante.ord_if[0]
      : " ",
    fecha: {
      dia: formPdf.cotizante.hasOwnProperty("fecha")
        ? formPdf.cotizante.fecha[0].split("-")[2]
        : instanciaForm.fecha_inicio_reclamo.split("-")[2],
      mes: formPdf.cotizante.hasOwnProperty("fecha")
        ? meses[parseInt(formPdf.cotizante.fecha[0].split("-")[1]) - 1]
        : meses[parseInt(instanciaForm.fecha_inicio_reclamo.split("-")[1]) - 1],
      año: formPdf.cotizante.hasOwnProperty("fecha")
        ? formPdf.cotizante.fecha[0].split("-")[0]
        : instanciaForm.fecha_inicio_reclamo.split("-")[0]
    },
    aseguradora: formPdf.cotizante.hasOwnProperty("aseguradora")
      ? formPdf.cotizante.aseguradora[0]
      : ""
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
