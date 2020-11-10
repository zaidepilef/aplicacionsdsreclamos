import React from 'react'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'

import { PDFViewer, BlobProvider } from '@react-pdf/renderer'
import PDF from './PDF'

const VistaPrevia = (props) => {
  const { instanciaForm, formPdf, firmante, handleUploadPdf,loadingUpload } = props
  const form = {
    // {3 de junio de 2020} o {3-6-2020} o {03-06-2020}
    fecha: formPdf.hasOwnProperty('fecha_reclamo_prestador') ? formPdf.fecha_reclamo_prestador[0] : instanciaForm.fecha_reclamo_prestador,
    // SOLICITUD N°: 12345-{2020}
    año: new Date(instanciaForm.fecha_reclamo_prestador).getFullYear(),
    // SOLICITUD N°: {12345}-2020
    solicitud: formPdf.hasOwnProperty('n_reclamo') ? formPdf.n_reclamo[0] : instanciaForm.n_reclamo,
    // Ordinario Circular IP/ N°: {1234}
    ordinario: formPdf.hasOwnProperty('n_ordinario') ? formPdf.n_ordinario[0] : instanciaForm.n_ordinario, // undefined
    // TABLA MATERIA
    // MAT.: {Informa inadmisibilidad.}
    materia: {
      descripcion: formPdf.hasOwnProperty('descripcion') ? formPdf.descripcion[0] : instanciaForm.materia.descripcion,
    },
    // Santiago, {28 de Diciembre de 2017}
    fecha_hoy: formPdf.hasOwnProperty('fecha') ? formPdf.fecha[0] : new Date(), // now para form ?
    // TABLA COTIZANTE
    cotizante: {
      // {ROCIO(nombres)} {BETANCOURT(apellido_paterno)} {LÓPEZ(apellido_materno)}
      nombres: formPdf.hasOwnProperty('nombres') ? formPdf.nombres[0] : instanciaForm.cotizante.nombres,
      apellido_paterno: formPdf.hasOwnProperty('apellido_paterno') ? formPdf.apellido_paterno[0] : instanciaForm.cotizante.apellido_paterno,
      apellido_materno: formPdf.hasOwnProperty('apellido_materno') ? formPdf.apellido_materno[0] : instanciaForm.cotizante.apellido_materno,
      // {BOMBERO SALAS} N° {1369}, {DEPTO. {3}},
      direccion_nombre_calle: formPdf.hasOwnProperty('direccion_nombre_calle') ? formPdf.direccion_nombre_calle[0] : instanciaForm.cotizante.direccion_nombre_calle,
      direccion_numero_calle: formPdf.hasOwnProperty('direccion_numero_calle') ? formPdf.direccion_numero_calle[0] : instanciaForm.cotizante.direccion_numero_calle,
      direccion_departamento: formPdf.hasOwnProperty('direccion_departamento') ? formPdf.direccion_departamento[0] : instanciaForm.cotizante.direccion_departamento,
      // TABLA PROVINCIA Y TABLA REGION Y COMUNA?
      // {SANTIAGO} {REGIÓN METROPOLITANA}
      // comuna: comunas.find(c => c.id === instanciaForm.cotizante.comuna[0]).nombre,
      // region: region.find(r => r.id === instanciaForm.cotizante.region[0]).nombre
    },
    // TABLA PROVINCIA
    provincia: {
      // {SANTIAGO} REGIÓN METROPOLITANA
      nombre: formPdf.hasOwnProperty('provincia') ? formPdf.provincia.nombre[0] : instanciaForm.provincia.nombre,
    },
    // TABLA REGION
    region: {
      // SANTIAGO {REGIÓN METROPOLITANA}
      nombre: formPdf.hasOwnProperty('region') ? formPdf.region.nombre[0] : instanciaForm.region.nombre,
    },
    comuna: {
      // SANTIAGO {REGIÓN METROPOLITANA}
      nombre: formPdf.hasOwnProperty('comuna') ? formPdf.comuna.nombre[0] : instanciaForm.comuna.nombre,
    },
    // por la que reclama en contra de {Clínica Indisa}, por hechos que
    // temp
    establecimiento: formPdf.hasOwnProperty('establecimiento') ? formPdf.establecimiento[0] : instanciaForm.establecimiento,
    firmante: {
      nombre: formPdf.hasOwnProperty('firmante') ? firmante.filter(f => f.id === formPdf.firmante[0])[0].nombre : firmante[0].nombre,
      cargo: formPdf.hasOwnProperty('firmante') ? firmante.filter(f => f.id === formPdf.firmante[0])[0].cargo : firmante[0].cargo
    },
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
              <PDFViewer width="92%" height="500">
                <PDF form={form} />
              </PDFViewer>
              <div className="d-flex justify-content-center ">
                <Button
                  variant="contained"
                  color="primary"
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
    </div>
  )
}

export default VistaPrevia
