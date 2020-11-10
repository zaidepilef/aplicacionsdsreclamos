import ModalPlantilla from './ModalPlantilla/ModalPlantilla';
import TestPDF from "./TestPDF";

export const RenderPlantilla = templateSelected => {

  switch (templateSelected) {
    
    case "ofApercibimientoCAS":
      return ModalPlantilla;
    case "ofApercibimientoDyD":
      return ModalPlantilla;
    case "ofRespuestaDirectaADR":
      return ModalPlantilla;
    case "ofRespuestaDirectaCPO":
      return ModalPlantilla;
    case "OfRespuestadirectaMediacionParalela":
      return ModalPlantilla;
    case "OfRespuestadirectaValoresexcesivos":
      return ModalPlantilla;
    case "OfTrasladoCAS":
      return ModalPlantilla;
    case "OfTrasladoDYD":
      return ModalPlantilla;
    case "ReExentaAplicaApercibimientoCAS":
      return ModalPlantilla;
    case "OfRespuestaDirectaManejoClinicoConOrientacionMediacion":
      return ModalPlantilla;
    case "Re_Exenta_aplica_apercibimiento_DyD":
      return ModalPlantilla;
    case "Re_Exenta_desistimiento_voluntario_de_reclamante_CAS":
      return ModalPlantilla;
    case "ReExentaDesistimientoVoluntarioDeReclamanteDyD":
      return ModalPlantilla;
    case "Re_Extenta_reclamo_extemporaneo":
      return ModalPlantilla;
    case "DerivacionOtraEntidad":
      return ModalPlantilla;
    case "DerivacionAseguradora":
      return ModalPlantilla;
    case "OfDerivacionAlPrestador":
      return ModalPlantilla;
    default:
      return TestPDF;
  }
};
