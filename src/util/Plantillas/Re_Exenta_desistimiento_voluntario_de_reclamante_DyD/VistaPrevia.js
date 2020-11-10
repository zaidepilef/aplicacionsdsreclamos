import React from "react";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

import { PDFViewer, BlobProvider } from "@react-pdf/renderer";
import PDF from "./PDF";

const VistaPrevia = props => {
  const {
    instanciaForm,
    meses,
    formPdf,
    region,
    comunas,
    documentos,
    firmante,
    handleUploadPdf,
    loadingUpload
  } = props;

  const form = {
    // Cotizante
    nombre: formPdf.cotizante.hasOwnProperty("nombres")
      ? formPdf.cotizante.nombres[0]
      : instanciaForm.cotizante.nombres,
    apellido_paterno: formPdf.cotizante.hasOwnProperty("apellido_paterno")
      ? formPdf.cotizante.apellido_paterno[0]
      : instanciaForm.cotizante.apellido_paterno,
    rut: formPdf.cotizante.hasOwnProperty("rut")
      ? formPdf.cotizante.rut[0]
      : instanciaForm.cotizante.rut,
    direccion: {
      comuna: formPdf.cotizante.hasOwnProperty("comuna")
        ? comunas.find(c => c.id === formPdf.cotizante.comuna[0]).nombre
        : comunas.find(c => c.id === instanciaForm.comuna.id).nombre,
      region: formPdf.cotizante.hasOwnProperty("region")
        ? region.find(r => r.id === formPdf.cotizante.region[0]).nombre
        : region.find(r => r.id === instanciaForm.region.id).nombre,
      calle: formPdf.cotizante.hasOwnProperty("direccion_nombre_calle")
        ? formPdf.cotizante.direccion_nombre_calle[0]
        : instanciaForm.cotizante.direccion_nombre_calle,
      num: formPdf.cotizante.hasOwnProperty("direccion_numero_calle")
        ? formPdf.cotizante.direccion_numero_calle[0]
        : instanciaForm.cotizante.direccion_numero_calle
    },

    // No cotizante
    ord_ip: formPdf.hasOwnProperty("ord_ip") ? formPdf.ord_ip[0] : "54852",
    fecha: {
      dia: formPdf.hasOwnProperty("fecha")
        ? formPdf.fecha[0].split("-")[2]
        : instanciaForm.fecha_inicio_reclamo.split("-")[2],
      mes: formPdf.hasOwnProperty("fecha")
        ? meses[parseInt(formPdf.fecha[0].split("-")[1]) - 1]
        : meses[parseInt(instanciaForm.fecha_inicio_reclamo.split("-")[1]) - 1],
      año: formPdf.hasOwnProperty("fecha")
        ? formPdf.fecha[0].split("-")[0]
        : instanciaForm.fecha_inicio_reclamo.split("-")[0]
    },
    firmante: {
      nombre: formPdf.hasOwnProperty("firmante")
        ? firmante.filter(f => f.id === formPdf.firmante[0])[0].nombre
        : firmante[0].nombre,
      cargo: formPdf.hasOwnProperty("firmante")
        ? firmante.filter(f => f.id === formPdf.firmante[0])[0].cargo
        : firmante[0].cargo
    },
    prestador: {
      nombre: formPdf.prestador
      ? formPdf.prestador.nombre[0]
      : 'prestador'
    },
    reclamo: formPdf.hasOwnProperty("n_reclamo")
      ? formPdf.n_reclamo[0]
      : instanciaForm.n_reclamo,
    tipo: "ORD. IP/N°",

    documentos: {
      ci: documentos.ci,
      hec: documentos.hec,
      nac: documentos.nac,
      pod: documentos.pod,
      recl: documentos.recl,
      res: documentos.res
    }
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
