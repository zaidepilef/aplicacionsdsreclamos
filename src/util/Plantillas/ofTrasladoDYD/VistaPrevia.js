import React from 'react'
import PDF from './PDF'
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';


import { PDFViewer, BlobProvider } from '@react-pdf/renderer';


const VistaPrevia = (props) => {

  const { meses, formPdf, instanciaForm, firmante, handleUploadPdf, loadingUpload } = props

  const form = {
    nombre: formPdf.cotizante.hasOwnProperty('nombres') ? formPdf.cotizante.nombres[0] : instanciaForm.cotizante.nombres,
    apellido_paterno: formPdf.cotizante.hasOwnProperty('apellido_paterno') ? formPdf.cotizante.apellido_paterno[0] : instanciaForm.cotizante.apellido_paterno,
    reclamo: formPdf.cotizante.hasOwnProperty('n_reclamo') ? formPdf.cotizante.n_reclamo[0] : instanciaForm.n_reclamo,
    rut: formPdf.cotizante.hasOwnProperty('rut') ? formPdf.cotizante.rut[0] : instanciaForm.cotizante.rut,
    tipo: "ORD. IP/N°",
    firmante: {
      nombre: formPdf.cotizante.hasOwnProperty('firmante') ? firmante.filter(f => f.id === formPdf.cotizante.firmante[0])[0].nombre : firmante[0].nombre,
      cargo: formPdf.cotizante.hasOwnProperty('firmante') ? firmante.filter(f => f.id === formPdf.cotizante.firmante[0])[0].cargo : firmante[0].cargo
    },
    ord_ip: formPdf.cotizante.hasOwnProperty('ord_ip') ? formPdf.cotizante.ord_ip[0] : " ",
    fecha: {
      dia: formPdf.cotizante.hasOwnProperty('fecha') ? formPdf.cotizante.fecha[0].split("-")[0] : instanciaForm.fecha_inicio_reclamo.split("-")[0],
      mes: formPdf.cotizante.hasOwnProperty('fecha') ? meses[parseInt(formPdf.cotizante.fecha[0].split("-")[1]) - 1] : meses[parseInt(instanciaForm.fecha_inicio_reclamo.split("-")[1]) - 1],
      año: formPdf.cotizante.hasOwnProperty('fecha') ? formPdf.cotizante.fecha[0].split("-")[2] : instanciaForm.fecha_inicio_reclamo.split("-")[2]
    },
    expediente_del_reclamo: {
      nombre: formPdf.cotizante.hasOwnProperty('nombre') ? formPdf.cotizante.nombre[0] : "Renata Luiza",
      apellido: formPdf.cotizante.hasOwnProperty('apellido') ? formPdf.cotizante.apellido[0] : "Santana de Oliveira",
    },
    representacion: {
      nombre: formPdf.cotizante.hasOwnProperty('nombre_representante') ? formPdf.cotizante.nombre_representante[0] : "Leila Cristina",
      apellido: formPdf.cotizante.hasOwnProperty('apellido_representante') ? formPdf.cotizante.apellido_representante[0] : "De OLiveira",
      rut: formPdf.cotizante.hasOwnProperty('rut_representante') ? formPdf.cotizante.rut_representante[0] : "23.456.456-K",
    },
    prestador: {
      prestador_publico: formPdf.cotizante.hasOwnProperty('prestador_publico') ? formPdf.cotizante.prestador_publico[0] : "Prestador Publico",
      prestador_privado: formPdf.cotizante.hasOwnProperty('prestador_privado') ? formPdf.cotizante.prestador_privado[0] : "Prestador Privado"
    }
  }

  if (loadingUpload) {
    return (
      <div>
        <h3 className="d-flex justify-content-center ">
          Subiendo Plantilla...
                </h3>
        <LinearProgress />
      </div>
    )
  }

  return (
    <div>
      <BlobProvider document={<PDF form={form} />}>
        {({ blob, url, loading, error }) => {

          if (error) {
            return `Error al crear el PDF: ${error}`
          }
          return loading ? (

            `Generando el PDF... `

          ) : (

              <>
                <PDFViewer width="92%" height="500" >
                  <PDF form={form} />
                </PDFViewer>

                <div className="d-flex justify-content-center ">
                  <Button
                    variant="contained" color="primary"
                    className="jr-btn jr-btn-lg"
                    onClick={(e) => handleUploadPdf(e, blob)}
                  >
                    Subir PDF
                  </Button>
                </div>
              </>
            )
        }}
      </BlobProvider>
    </div >
  )
}
export default VistaPrevia