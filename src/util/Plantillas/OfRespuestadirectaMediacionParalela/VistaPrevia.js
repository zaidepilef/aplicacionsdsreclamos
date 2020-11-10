import React from 'react'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'

import { PDFViewer, BlobProvider } from '@react-pdf/renderer'
import PDF from './PDF'

const VistaPrevia = (props) => {
  const { instanciaForm, formPdf, firmante, handleUploadPdf,loadingUpload } = props
  const form = {
    // {3 de junio de 2020} o {3-6-2020} o {03-06-2020}
    fecha: formPdf.hasOwnProperty('fecha_reclamo_prestador') ? formPdf.cotizante.fecha_reclamo_prestador[0] : instanciaForm.fecha_reclamo_prestador,
    // SOLICITUD N°: 12345-{2020}
    año: new Date(instanciaForm.fecha_reclamo_prestador).getFullYear(),
    // SOLICITUD N°: {12345}-2020
    solicitud: formPdf.hasOwnProperty('n_reclamo') ? formPdf.cotizante.n_reclamo[0] : instanciaForm.n_reclamo,
    // Ordinario Circular IP/ N°: {1234}
    ordinario: formPdf.hasOwnProperty('n_ordinario') ? formPdf.cotizante.n_ordinario[0] : instanciaForm.n_ordinario, // undefined
    // TABLA MATERIA
    // MAT.: {Informa inadmisibilidad.}
    materia: {
      descripcion: formPdf.hasOwnProperty('descripcion') ? formPdf.cotizante.descripcion[0] : instanciaForm.materia.descripcion,
    },
    // Santiago, {28 de Diciembre de 2017}
    fecha_hoy: formPdf.hasOwnProperty('fecha') ? formPdf.cotizante.fecha[0] : new Date(), // now para form ?
    // TABLA COTIZANTE
    cotizante: {
      // {ROCIO(nombres)} {BETANCOURT(apellido_paterno)} {LÓPEZ(apellido_materno)}
      nombres: formPdf.hasOwnProperty('nombres') ? formPdf.cotizante.nombres[0] : instanciaForm.cotizante.nombres,
      apellido_paterno: formPdf.hasOwnProperty('apellido_paterno') ? formPdf.cotizante.apellido_paterno[0] : instanciaForm.cotizante.apellido_paterno,
      apellido_materno: formPdf.hasOwnProperty('apellido_materno') ? formPdf.cotizante.apellido_materno[0] : instanciaForm.cotizante.apellido_materno,
      // {BOMBERO SALAS} N° {1369}, {DEPTO. {3}},
      direccion_nombre_calle: formPdf.hasOwnProperty('direccion_nombre_calle') ? formPdf.cotizante.direccion_nombre_calle[0] : instanciaForm.cotizante.direccion_nombre_calle,
      direccion_numero_calle: formPdf.hasOwnProperty('direccion_numero_calle') ? formPdf.cotizante.direccion_numero_calle[0] : instanciaForm.cotizante.direccion_numero_calle,
      direccion_departamento: formPdf.hasOwnProperty('direccion_departamento') ? formPdf.cotizante.direccion_departamento[0] : instanciaForm.cotizante.direccion_departamento,
      // TABLA PROVINCIA Y TABLA REGION Y COMUNA?
      // {SANTIAGO} {REGIÓN METROPOLITANA}
      // comuna: comunas.find(c => c.id === instanciaForm.cotizante.comuna[0]).nombre,
      // region: region.find(r => r.id === instanciaForm.cotizante.region[0]).nombre
    },
    direccion:{
      provincia:formPdf.cotizante.hasOwnProperty('provincia') ? formPdf.cotizante.provincia[0] : instanciaForm.provincia.nombre ,
      comuna:formPdf.cotizante.hasOwnProperty('comuna') ? formPdf.cotizante.comuna[0] : instanciaForm.comuna.nombre ,
      region: formPdf.cotizante.hasOwnProperty('region') ?  formPdf.cotizante.region[0] : instanciaForm.region.nombre ,
    },
    // temp
    paciente: {
      nombres_paciente: formPdf.hasOwnProperty('nombres_paciente') ? formPdf.cotizante.nombres_paciente[0] : instanciaForm.nombres_paciente,
      apellido_paterno_paciente: formPdf.hasOwnProperty('apellido_paterno_paciente') ? formPdf.cotizante.apellido_paterno_paciente[0] : instanciaForm.apellido_paterno_paciente,
      apellido_materno_paciente: formPdf.hasOwnProperty('apellido_materno_paciente') ? formPdf.cotizante.apellido_materno_paciente[0] : instanciaForm.apellido_materno_paciente,
    },
    presentacion: {
      n_presentacion: formPdf.hasOwnProperty('n_presentacion') ? formPdf.cotizante.n_presentacion[0] : instanciaForm.n_presentacion,
      fecha_presentacion: formPdf.hasOwnProperty('fecha_presentacion') ? formPdf.cotizante.fecha_presentacion[0] : instanciaForm.fecha_presentacion,
      n_formulario: formPdf.hasOwnProperty('n_formulario') ? formPdf.cotizante.n_formulario[0] : instanciaForm.n_formulario,
    },
    // temp
    establecimiento: formPdf.hasOwnProperty('establecimiento') ? formPdf.cotizante.establecimiento[0] : instanciaForm.establecimiento,
    firmante: {
      nombre: formPdf.hasOwnProperty('firmante') ? firmante.filter(f => f.id === formPdf.cotizante.firmante[0])[0].nombre : firmante[0].nombre,
      cargo: formPdf.hasOwnProperty('firmante') ? firmante.filter(f => f.id === formPdf.cotizante.firmante[0])[0].cargo : firmante[0].cargo
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
