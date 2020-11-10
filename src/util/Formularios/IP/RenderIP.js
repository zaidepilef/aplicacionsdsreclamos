import Default from "./Default";
import CompletarCaratula from "./CompletarCaratula/CompletarCaratula";
import AnalizarAdmisibilidad from "./AnalizarAdmisibilidad/AnalizarAdmisibilidad";
import ElaborarSolicitud from "./ElaborarSolicitud/ElaborarSolicitud";
import ElaboraRespuestaDirecta from "./ElaboraRespuestaDirecta/ElaboraRespuestaDirecta";
import ElaboraOficioDerivacionPrestador from "./ElaboraOficioDerivacionPrestador/ElaboraOficioDerivacionPrestador";
import ElaboraOficioDerivacionEntidad from "./ElaboraOficioDerivacionEntidad/ElaboraOficioDerivacionEntidad";
import ElaboraTrasladoPrestador from "./ElaboraTrasladoPrestador/ElaboraTrasladoPrestador";
import DespachaDocFisica from "./DespachaDocFisica/DespachaDocFisica";
import DespachaDocFisicaEntidadExterna from './DespachaDocFisicaEntidadExterna/DespachaDocFisicaEntidadExterna'
import AnalizaRespuesta from "./AnalizaRespuesta/AnalizaRespuesta";
import AnalizaRespuestaDeEntidadExterna from './AnalizaRespuestaDeEntidadExterna/AnalizaRespuestaDeEntidadExterna'
import EsperaRespuestaArchivoTransitorio from "./EsperaRespuestaArchivoTransitorio/EsperaRespuestaArchivoTransitorio";
import EsperaRespuestaReclamanteArchivoTransitorio from './EsperaRespuestaReclamanteArchivoTransitorio/EsperaRespuestaReclamanteArchivoTransitorio'
import Visa_Registra_Observacion from "./Visa_Registra_Observacion/Visa_Registra_Observacion";
import DespachaDocumentacionElectronica from "./DespachaDocumentacionElectronica/DespachaDocumentacionElectronica";
import DespachaDocumentacionElectronicaEntidadExterna from './DespachaDocumentacionElectronicaEntidadExterna/DespachaDocumentacionElectronicaEntidadExterna'
import ElaboraResolucion from "./ElaboraResolucion/ElaboraResolucion";
import FirmaResolucion from "./FirmaResolucion/FirmaResolucion";
import AnalizaPosibleRecurso from './AnalizaPosibleRecurso/AnalizaPosibleRecurso'
import ControlarNotificacionReclamante from './ControlarNotificacionReclamante/ControlarNotificacionReclamante'
import ControlarNotificacionEntidadExterna from './ControlarNotificacionEntidadExterna/ControlarNotificacionEntidadExterna'
import Finalizada from './Finalizada/Finalizada'

export const RenderIP = task_camunda => {
  switch (task_camunda) {
    case "analizar_admisibilidad":
      return AnalizarAdmisibilidad;
    case "completar_datos_de_la_caratula":
      return CompletarCaratula;
    case "elaborar_solicitud_de_antecedentes_al_reclamante":
      return ElaborarSolicitud;
    case "elabora_respuesta_directa":
      return ElaboraRespuestaDirecta;
    case "elabora_oficio_de_derivacion_a_prestador":
      return ElaboraOficioDerivacionPrestador;
    case "elabora_oficio_de_derivacion_a_otra_entidad":
      return ElaboraOficioDerivacionEntidad;
    case "elaborar_traslado_al_prestador":
      return ElaboraTrasladoPrestador;
    case "despacha_documentacion_fisica_al_reclamante":
      return DespachaDocFisica;
    case "despacha_documentacion_fisica_a_entidad_externa":
      return DespachaDocFisicaEntidadExterna;
    case "espera_respuesta_-_archivo_transitorio":
      return EsperaRespuestaArchivoTransitorio;
    case "espera_respuesta_reclamante_-_archivo_transitorio":
      return EsperaRespuestaReclamanteArchivoTransitorio;
    case "analiza_respuesta_del_reclamante":
      return AnalizaRespuesta;
    case "analiza_respuesta_de_entidad_externa":
      return AnalizaRespuestaDeEntidadExterna;
    case "visa_y/o_registra_observaciones_a_la_resolucion":
      return Visa_Registra_Observacion;
    case "despacha_documentacion_electronica_al_reclamante":
      return DespachaDocumentacionElectronica;
    case "despacha_documentacion_electronica_a_entidad_externa":
      return DespachaDocumentacionElectronicaEntidadExterna;
    case "elabora_resolucion":
      return ElaboraResolucion;
    case "firma_resolucion":
      return FirmaResolucion;
    case "control_notificacion_al_reclamante":
      // Renata
      return ControlarNotificacionReclamante;
    case "control_notificacion_a_entidad_externa":
      return ControlarNotificacionEntidadExterna;
    case "analiza_posible_recurso":
      return AnalizaPosibleRecurso
    case "finalizada":
      return Finalizada
    default:
      return Default;
  }
};
