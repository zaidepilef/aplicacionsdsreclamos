import OfRespuestadirectaMediacionParalela from "../../../OfRespuestadirectaMediacionParalela/Formulario";
import ofRespuestaDirectaCPO from "../../../ofRespuestaDirectaCPO/Formulario";
import ofRespuestaDirectaADR from "../../../ofRespuestaDirectaADR/Formulario";
import OfRespuestaDirectaManejoClinicoConOrientacionMediacion from "../../../OfRespuestaDirectaManejoClinicoConOrientacionMediacion/Formulario";
import OfRespuestadirectaValoresexcesivos from "../../../OfRespuestadirectaValoresexcesivos/Formulario";
import OfApercibimientoCAS from "../../../ofApercibimientoCAS/Formulario";
import OfApercibimientoDyD from "../../../ofApercibimientoDyD/Formulario";
import OfDerivacionAlPrestador from "../../../OfDerivacionAlPrestador/Formulario";
import ReExentaAplicaApercibimientoCAS from "../../../re_Exenta_Aplica_Apercibimiento_CAS/Formulario";
import Re_Exenta_desistimiento_voluntario_de_reclamante_CAS from "../../../Re_Exenta_desistimiento_voluntario_de_reclamante_CAS/Formulario";
import Re_Exenta_aplica_apercibimiento_DyD from "../../../Re_Exenta_aplica_apercibimiento_DyD/Formulario";
import ReExentaDesistimientoVoluntarioDeReclamanteDyD from "../../../Re_Exenta_desistimiento_voluntario_de_reclamante_DyD/Formulario";
import ReExentaReclamoExtemporaneo from "../../../Re_Exenta_reclamo_extemporaneo/Formulario";
import DerivacionOtraEntidad from "../../../DerivacionOtraEntidad/Formulario";
import OfTrasladoCAS from "../../../OfTrasladoCAS/Formulario";
import OfTrasladoDYD from "../../../ofTrasladoDYD/Formulario";
import DerivacionAseguradora from "../../../DerivacionAseguradora/Formulario";
import ofValorPrestaciones from "../../../OfValorPrestaciones/Formulario";
import ReExentaReclamoExtemporaneoDyD from "../../../ReExcentaReclamoExtemporaneoDyD/Formulario";
import ResolucionGeneral from "../../../ResolucionGeneral/Formulario";

export const RenderFormulario = templateSelected => {
 

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
    //parrafos editables rdy.
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
      return "TestPDF";
  }
};
