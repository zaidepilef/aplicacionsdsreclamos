import OfRespuestadirectaMediacionParalela from "../../../OfRespuestadirectaMediacionParalela/PDF";
import ofRespuestaDirectaCPO from "../../../ofRespuestaDirectaCPO/PDF";
import ofRespuestaDirectaADR from "../../../ofRespuestaDirectaADR/PDF";
import TestPDF from "../../../TestPDF/TestPDF";
import OfRespuestaDirectaManejoClinicoConOrientacionMediacion from "../../../OfRespuestaDirectaManejoClinicoConOrientacionMediacion/PDF";
import OfRespuestadirectaValoresexcesivos from "../../../OfRespuestadirectaValoresexcesivos/PDF";
import OfApercibimientoCAS from "../../../ofApercibimientoCAS/PDF";
import OfApercibimientoDyD from "../../../ofApercibimientoDyD/PDF";
import OfDerivacionAlPrestador from "../../../OfDerivacionAlPrestador/PDF";
import ReExentaAplicaApercibimientoCAS from "../../../re_Exenta_Aplica_Apercibimiento_CAS/PDF";
import Re_Exenta_desistimiento_voluntario_de_reclamante_CAS from "../../../Re_Exenta_desistimiento_voluntario_de_reclamante_CAS/PDF";
import Re_Exenta_aplica_apercibimiento_DyD from "../../../Re_Exenta_aplica_apercibimiento_DyD/PDF";
import ReExentaDesistimientoVoluntarioDeReclamanteDyD from "../../../Re_Exenta_desistimiento_voluntario_de_reclamante_DyD/PDF";
import ReExentaReclamoExtemporaneo from "../../../Re_Exenta_reclamo_extemporaneo/PDF";
import DerivacionOtraEntidad from "../../../DerivacionOtraEntidad/PDF";
import OfTrasladoCAS from "../../../OfTrasladoCAS/PDF";
import OfTrasladoDYD from "../../../ofTrasladoDYD/PDF";
import DerivacionAseguradora from "../../../DerivacionAseguradora/PDF";
import ofValorPrestaciones from "../../../OfValorPrestaciones/PDF";
import ReExentaReclamoExtemporaneoDyD from "../../../ReExcentaReclamoExtemporaneoDyD/PDF";
import ResolucionGeneral from "../../../ResolucionGeneral/PDF";

export const RenderPdf = templateSelected => {
  switch (templateSelected) {
    case "OfRespuestadirectaMediacionParalela":
      return OfRespuestadirectaMediacionParalela;
    case "ofRespuestaDirectaCPO":
      return ofRespuestaDirectaCPO;
    case "ofRespuestaDirectaADR":
      return ofRespuestaDirectaADR;
    case "OfRespuestaDirectaManejoClinicoConOrientacionMediacion":
      return OfRespuestaDirectaManejoClinicoConOrientacionMediacion;
    case "OfRespuestadirectaValoresexcesivos":
      return OfRespuestadirectaValoresexcesivos;
    case "ofApercibimientoCAS":
      return OfApercibimientoCAS;
    case "ofApercibimientoDyD":
      return OfApercibimientoDyD;
    case "OfDerivacionAlPrestador":
      return OfDerivacionAlPrestador;
    case "ReExentaAplicaApercibimientoCAS":
      return ReExentaAplicaApercibimientoCAS;
    case "Re_Exenta_desistimiento_voluntario_de_reclamante_CAS":
      return Re_Exenta_desistimiento_voluntario_de_reclamante_CAS;
    case "Re_Exenta_aplica_apercibimiento_DyD":
      return Re_Exenta_aplica_apercibimiento_DyD;
    case "ReExentaDesistimientoVoluntarioDeReclamanteDyD":
      return ReExentaDesistimientoVoluntarioDeReclamanteDyD;
    case "Re_Extenta_reclamo_extemporaneo":
      return ReExentaReclamoExtemporaneo;
    case "DerivacionOtraEntidad":
      return DerivacionOtraEntidad;
    case "OfTrasladoCAS":
      return OfTrasladoCAS;
    case "OfTrasladoDYD":
      return OfTrasladoDYD;
    case "DerivacionAseguradora":
      return DerivacionAseguradora;
    case "ofValorPrestaciones":
      return ofValorPrestaciones;
    case "ReExentaReclamoExtemporaneoDyD":
      return ReExentaReclamoExtemporaneoDyD;
    case "ResolucionGeneral":
      return ResolucionGeneral;
    default:
      return TestPDF;
  }
};
