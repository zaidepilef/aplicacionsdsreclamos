import Default from "./Default";

import RevisionReclasificacionMateriaSubmateria from "./RevisionReclasificacion/";
import AnalizarAdmisibilidad from "./AnalizarAdmisibilidad/AnalizarAdmisibilidad";
import ElaboraDocumentacionDerivacion from "./ElaboraDocumentacionDerivacion/ElaboraDocumentacionDerivacion";
import ElaboraSolicitudMayoresAntecedentes from "./ElaboraSolicitudMayoresAntecedentes";
// Global
import EsperaRespuestaArchivoTransitorio from "./EsperaRespuestaArchivoTransitorio";
// SubProceso => Notificacion a otra Entidad
import DespachaDocumentacionFisicaOtraEntidad from "./SubProcesos/NotificacionOtraEntidad/DespachaDocumentacionFisicaOtraEntidad/DespachaDocumentacionFisicaOtraEntidad";
import DespachaDocumentacionElectronicaAOtraEntidad from "./SubProcesos/NotificacionOtraEntidad/DespachaDocumentacionElectronicaAOtraEntidad";
import ControlNotificacionOtraEntidad from "./SubProcesos/NotificacionOtraEntidad/ControlNotificacionOtraEntidad";
// SubProceso => Notificacion
import DespachaDocumentacionFisicaReclamante from "./SubProcesos/Notificacion/DespachaDocumentacionFisicaReclamante/DespachaDocumentacionFisicaReclamante";
import DespachaDocumentacionElectronicaReclamante from "./SubProcesos/Notificacion/DespachaDocumentacionElectronicaReclamante";
import AnalizaRespuestaReclamante from "./SubProcesos/Notificacion/AnalizaRespuestaReclamante";
import ControlarNotificacionReclamante from "./SubProcesos/Notificacion/ControlarNotificacionReclamante";
// SubProceso => Notificacion a Aseguradora
import DespachaDocumentacionFisicaAseguradora from "./SubProcesos/NotificacionAseguradora/DespachaDocumentacionFisicaAseguradora/DespachaDocumentacionFisicaAseguradora";
import DespachaDocumentacionElectronicaExtranet from "./SubProcesos/NotificacionAseguradora/DespachaDocumentacionElectronicaExtranet/DespachaDocumentacionElectronicaExtranet";
import NotificacionElectronicaReclamante from "./SubProcesos/NotificacionAseguradora/NotificacionElectronicaReclamante";
import NotificacionReclamanteRespectoDerivacionAseguradora from "./SubProcesos/NotificacionAseguradora/NotificacionReclamanteRespectoDerivacionAseguradora/NotificacionReclamanteRespectoDerivacionAseguradora";
import SubeRespuestaSistemaDeAdmisibilidad from "./SubProcesos/NotificacionAseguradora/SubeRespuestaSistemaDeAdmisibilidad";
import ControlNotificacionAseguradora from "./SubProcesos/NotificacionAseguradora/ControlNotificacionAseguradora";
//
import Finalizada from './Finalizada/Finalizada'

//TODO: falta vista para camunda_task: genera_reclamo_en_sistema_de_reclamos


export const RenderIF = task_camunda => {
  switch (task_camunda) {
    case "revision_y/o_reclasificacion_de_materia_y/o_submateria":
      return RevisionReclasificacionMateriaSubmateria;
    case "analizar_admisibilidad":
      return AnalizarAdmisibilidad;
    case "elabora_documentacion_de_derivacion":
      return ElaboraDocumentacionDerivacion;
    // TIMER
    case "espera_respuesta_-_archivo_transitorio":
      return EsperaRespuestaArchivoTransitorio;
    case "despacha_documentacion_fisica_a_otra_entidad":
      return DespachaDocumentacionFisicaOtraEntidad;
    case "despacha_documentacion_fisica_al_reclamante":
      return DespachaDocumentacionFisicaReclamante;
    case "despacha_documentacion_fisica_a_aseguradora":
      return DespachaDocumentacionFisicaAseguradora;
    case "despacha_documentacion_electronica_a_otra_entidad":
      return DespachaDocumentacionElectronicaAOtraEntidad;
    case "despacha_documentacion_electronica_al_reclamante":
      return DespachaDocumentacionElectronicaReclamante;
    case "despacha_documentacion_electronica_a_portal_extranet":
      return DespachaDocumentacionElectronicaExtranet;
    case "genera_reclamo_en_sistema_de_reclamos":
      return Default; // no esta
    case "notificacion_electronica_reclamante":
      return NotificacionElectronicaReclamante;
    case "notificacion_al_reclamente_respecto_de_la_derivacion_a_la_aseguradora":
      return NotificacionReclamanteRespectoDerivacionAseguradora;
    case "sube_respuesta_a_sistema_de_admisibilidad":
      return SubeRespuestaSistemaDeAdmisibilidad;
    case "elabora_solicitud_de_mayores_antecedentes":
      return ElaboraSolicitudMayoresAntecedentes;
    case "analiza_respuesta_del_reclamante":
      return AnalizaRespuestaReclamante;
    case "control_notificacion_al_reclamante":
      return ControlarNotificacionReclamante;
    case "controlar_notificacion_a_otra_entidad":
      return ControlNotificacionOtraEntidad;
    case "controlar_notificacion_a_aseguradora":
      return ControlNotificacionAseguradora;
    case "finalizada":
        return Finalizada
    default:
      return Default;
  }
};
