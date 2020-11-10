import React from 'react'
import PDF from './PDF'
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { PDFViewer, BlobProvider } from '@react-pdf/renderer';

const VistaPrevia = (props) => {

    const { meses, formPdf, comunas, region, instanciaForm, firmante,  handleUploadPdf,loadingUpload } = props
    const form = {
        nombre: formPdf.cotizante.hasOwnProperty('nombres') ?  formPdf.cotizante.nombres[0] : instanciaForm.cotizante.nombres,
        apellido_paterno: formPdf.cotizante.hasOwnProperty('apellido_paterno') ? formPdf.cotizante.apellido_paterno[0] :  instanciaForm.cotizante.apellido_paterno,
        reclamo:  formPdf.cotizante.hasOwnProperty('n_reclamo') ? formPdf.cotizante.n_reclamo[0] : instanciaForm.n_reclamo,
        rut:formPdf.cotizante.hasOwnProperty('rut') ? formPdf.cotizante.rut[0] : instanciaForm.cotizante.rut,
        paciente : {
            nombres_paciente:formPdf.cotizante.hasOwnProperty('nombres_paciente') ?  formPdf.cotizante.nombres_paciente[0] : '',
            apellido_paciente:formPdf.cotizante.hasOwnProperty('apellido_paciente') ? formPdf.cotizante.apellido_paciente[0] : '',
        },
        tipo: "ORD. IP/N°",
        firmante: {
            nombre: formPdf.cotizante.hasOwnProperty('firmante') ? firmante.filter(f => f.id === formPdf.cotizante.firmante[0])[0].nombre  : firmante[0].nombre,
            cargo: formPdf.cotizante.hasOwnProperty('firmante') ? firmante.filter(f => f.id === formPdf.cotizante.firmante[0])[0].cargo: firmante[0].cargo
        },
        ord_ip: formPdf.cotizante.hasOwnProperty('ord_ip') ? formPdf.cotizante.ord_ip[0] : " ",
        fecha:{
            dia: formPdf.cotizante.hasOwnProperty('fecha') ? formPdf.cotizante.fecha[0].split("-")[0] : instanciaForm.fecha_inicio_reclamo.split("-")[0],
            mes: formPdf.cotizante.hasOwnProperty('fecha') ? meses[parseInt(formPdf.cotizante.fecha[0].split("-")[1]) -1]:meses[parseInt(instanciaForm.fecha_inicio_reclamo.split("-")[1]) -1] ,
            año: formPdf.cotizante.hasOwnProperty('fecha') ? formPdf.cotizante.fecha[0].split("-")[2]: instanciaForm.fecha_inicio_reclamo.split("-")[2]
        },
        fecha_ocurrido: {
            dia: formPdf.cotizante.hasOwnProperty('fecha_ocurrido') ? formPdf.cotizante.fecha_ocurrido[0].split("-")[0] :  '',
            mes: formPdf.cotizante.hasOwnProperty('fecha_ocurrido') ? meses[parseInt(formPdf.cotizante.fecha_ocurrido[0].split("-")[1]) -1]: '',
            año: formPdf.cotizante.hasOwnProperty('fecha_ocurrido') ? formPdf.cotizante.fecha_ocurrido[0].split("-")[2]: ''
        },
        reclamante: {
            nombre_reclamante:formPdf.cotizante.hasOwnProperty('nombre_reclamante') ?  formPdf.cotizante.nombre_reclamante[0] : '',
            apellido_reclamante:formPdf.cotizante.hasOwnProperty('apellido_reclamante') ? formPdf.cotizante.apellido_reclamante[0] :  instanciaForm.cotizante.apellido_reclamante,
            rut_reclamante:formPdf.cotizante.hasOwnProperty('rut_reclamante') ? formPdf.cotizante.rut_reclamante[0] : instanciaForm.cotizante.rut_reclamante,
            presentacion:formPdf.cotizante.hasOwnProperty('presentacion') ? formPdf.cotizante.presentacion[0] : '',
            fecha_ocurrido :{
                dia: formPdf.cotizante.hasOwnProperty('fecha_ocurrido') ? formPdf.cotizante.fecha_ocurrido[0].split("-")[0] :'' ,
                mes: formPdf.cotizante.hasOwnProperty('fecha_ocurrido') ? meses[parseInt(formPdf.cotizante.fecha_ocurrido[0].split("-")[1]) -1]:'',
                año: formPdf.cotizante.hasOwnProperty('fecha_ocurrido') ? formPdf.cotizante.fecha_ocurrido[0].split("-")[2]: ''
            },
            ip_anterior: formPdf.cotizante.hasOwnProperty('ord_ip_anterior') ? formPdf.cotizante.ord_ip_anterior[0] : "Ord Anterior",
            fecha_ip_anterior:{
                dia: formPdf.cotizante.hasOwnProperty('fecha_ip_anterior') ? formPdf.cotizante.fecha_ip_anterior[0].split("-")[0] : '',
                mes: formPdf.cotizante.hasOwnProperty('fecha_ip_anterior') ? meses[parseInt(formPdf.cotizante.fecha_ip_anterior[0].split("-")[1]) -1] : '',
                año: formPdf.cotizante.hasOwnProperty('fecha_ip_anterior') ? formPdf.cotizante.fecha_ip_anterior[0].split("-")[2]: ''
            }
        },
        fecha_representacion:{
            dia: formPdf.cotizante.hasOwnProperty('fecha_representacion') ? formPdf.cotizante.fecha_representacion[0].split("-")[0] : instanciaForm.fecha_reclamo_prestador.split("-")[0],
            mes: formPdf.cotizante.hasOwnProperty('fecha_representacion') ? meses[parseInt(formPdf.cotizante.fecha_representacion[0].split("-")[1]) -1]:meses[instanciaForm.fecha_reclamo_prestador.split("-")[1] - 1],
            año: formPdf.cotizante.hasOwnProperty('fecha_representacion') ? formPdf.cotizante.fecha_representacion[0].split("-")[2]: instanciaForm.fecha_reclamo_prestador.split("-")[2]
        },
        prestador: {
            prestador:formPdf.cotizante.hasOwnProperty('prestador') ? formPdf.cotizante.prestador[0] : "Prestador",
        },
        direccion: {
            calle:formPdf.cotizante.hasOwnProperty('direccion_nombre_calle') ? formPdf.cotizante.direccion_nombre_calle[0] : instanciaForm.cotizante.direccion_nombre_calle ,
            num:formPdf.cotizante.hasOwnProperty('direccion_numero_calle') ? formPdf.cotizante.direccion_numero_calle[0] : instanciaForm.cotizante.direccion_numero_calle,
            comuna: formPdf.cotizante.hasOwnProperty('comuna') ? comunas.find(c => c.id === formPdf.cotizante.comuna[0]).nombre : comunas.find(c => c.id === instanciaForm.comuna.id).nombre,
            region: formPdf.cotizante.hasOwnProperty('region') ? region.find(r => r.id === formPdf.cotizante.region[0]).nombre : region.find(r => r.id === instanciaForm.region.id).nombre,
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
