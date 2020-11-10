import React, { useState } from 'react'
import PDF from './PDF'
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';

import { PDFViewer, BlobProvider } from '@react-pdf/renderer';


const VistaPrevia = (props) => {

    const {  instanciaForm, handeDialogClose, firmante, meses, formPdf, region, comunas, provincia, loadingUpload, handleUploadPdf } = props

    const arreglin = "2020-11-13";
    const date = new Date();

    const form = {
        nombre: formPdf.cotizante.hasOwnProperty('nombres') ? formPdf.cotizante.nombres[0] : instanciaForm.cotizante.nombres,
        apellido_paterno:formPdf.cotizante.hasOwnProperty('apellido_paterno') ? formPdf.cotizante.apellido_paterno[0] :  instanciaForm.cotizante.apellido_paterno,
        apellido_materno:formPdf.cotizante.hasOwnProperty('apellido_materno') ? formPdf.cotizante.apellido_materno[0] :  instanciaForm.cotizante.apellido_materno,
        rut:formPdf.cotizante.hasOwnProperty('rut') ? formPdf.cotizante.rut[0] : "19.456.784-k",
        reclamo:formPdf.cotizante.hasOwnProperty('n_reclamo') ? formPdf.cotizante.n_reclamo[0] : instanciaForm.n_reclamo ,
        tipo: "ORD. IP/N°",
        ord_ip:formPdf.cotizante.hasOwnProperty('ord_ip') ? formPdf.cotizante.ord_ip[0] : "3231",
        fecha:{
            fecha: {
                dia: date.getDate(),
                mes: meses[date.getMonth()],
                año: date.getFullYear()
            },
        },
        solicitud:{
            fecha_creacion:{
                dia:formPdf.cotizante.hasOwnProperty('fecha_actual') ?  formPdf.cotizante.fecha_actual[0].split("-")[2] : instanciaForm.fecha_inicio_reclamo.split("-")[2]  ,
                mes: formPdf.cotizante.hasOwnProperty('fecha_actual')?  meses[parseInt(formPdf.cotizante.fecha_actual[0].split("-")[1]) -1] : meses[parseInt(instanciaForm.fecha_inicio_reclamo.split("-")[1]) -1] , 
                año: formPdf.cotizante.hasOwnProperty('fecha_actual')?  formPdf.cotizante.fecha_actual[0].split("-")[0] : instanciaForm.fecha_inicio_reclamo.split("-")[0]
            }
        },
        reclamo_previo:{
            nombre:formPdf.cotizante.hasOwnProperty('nombre_reclamante') ? formPdf.cotizante.nombre_reclamante[0] : "Claudio Andres",
            apellido:formPdf.cotizante.hasOwnProperty('apellido_reclamante') ? formPdf.cotizante.apellido_reclamante[0] : "Aravena",
            rut:formPdf.cotizante.hasOwnProperty('rut_reclamante') ? formPdf.cotizante.rut_reclamante[0] : "16.565.786-k",
            reclamo: formPdf.cotizante.hasOwnProperty('n_reclamo_anterior') ? formPdf.cotizante.n_reclamo_anterior[0] : "845587",
            fecha:{
                dia:formPdf.cotizante.hasOwnProperty('fecha_amterior') ?  formPdf.cotizante.fecha_actual[0].split("-")[2] : arreglin.split("-")[2]  ,
                mes: formPdf.cotizante.hasOwnProperty('fecha_amterior')?  meses[parseInt(formPdf.cotizante.fecha_actual[0].split("-")[1]) -1] : meses[parseInt(arreglin.split("-")[1]) -1] , 
                año: formPdf.cotizante.hasOwnProperty('fecha_amterior')?  formPdf.cotizante.fecha_actual[0].split("-")[0] : arreglin.split("-")[0]
            }
        },
        direccion:{
            provincia:formPdf.cotizante.hasOwnProperty('provincia') ? provincia.find(p => p.id === formPdf.cotizante.provincia[0]).nombre : provincia.find(p => p.id === instanciaForm.provincia.id).nombre,
            comuna:formPdf.cotizante.hasOwnProperty('comuna') ? comunas.find(c => c.id === formPdf.cotizante.comuna[0]).nombre : comunas.find(c => c.id === instanciaForm.comuna.id).nombre,
            region: formPdf.cotizante.hasOwnProperty('region') ? region.find(r => r.id === formPdf.cotizante.region[0]).nombre : region.find(r => r.id === instanciaForm.region.id).nombre,
            calle:formPdf.cotizante.hasOwnProperty('direccion_nombre_calle') ? formPdf.cotizante.direccion_nombre_calle[0] : instanciaForm.cotizante.direccion_nombre_calle,
            num: formPdf.cotizante.hasOwnProperty('direccion_numero_calle') ? formPdf.cotizante.direccion_numero_calle[0] : instanciaForm.cotizante.direccion_numero_calle,
        },
        firmante: {
            nombre: formPdf.cotizante.hasOwnProperty('firmante') ? firmante.filter(f => f.id === formPdf.cotizante.firmante[0])[0].nombre  : firmante[0].nombre,
            cargo: formPdf.cotizante.hasOwnProperty('firmante') ? firmante.filter(f => f.id === formPdf.cotizante.firmante[0])[0].cargo: firmante[0].cargo
        },
        math: "Deriva por competencia respecto de lo solicitado.",
        de: "INTENDENTA DE PRESTADORES DE SALUD SUPERINTENDENCIA DE SALUD",
        a:formPdf.cotizante.hasOwnProperty('representante_legal') ? formPdf.cotizante.representante_legal[0] : "DIRECTOR DEL SERVICIO COMPIN",
        en_contra:formPdf.cotizante.hasOwnProperty('en_contra') ? formPdf.cotizante.en_contra[0] : "Hospital Clínico Universidad de Chile",
    }

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