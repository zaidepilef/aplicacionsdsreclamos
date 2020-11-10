import OfApercibimientoDyD from "util/Plantillas/PlantillaDemo/ofApercibimientoDyD/PDF";
import OfApercibimientoCAS from "util/Plantillas/PlantillaDemo/ofApercibimientoCAS/PDF";
import OfRespuestaDirectaADR from "util/Plantillas/PlantillaDemo/ofRespuestaDirectaADR/PDF";
import OfRespuestaDirectaCPO from "util/Plantillas/PlantillaDemo/ofRespuestaDirectaCPO/PDF";
import OfRespuestadirectaMediacionParalela from "util/Plantillas/PlantillaDemo/OfRespuestadirectaMediacionParalela/PDF";
import OfRespuestadirectaValoresexcesivos from "util/Plantillas/PlantillaDemo/OfRespuestadirectaValoresexcesivos/PDF";
import OfTrasladoCAS from "util/Plantillas/PlantillaDemo/OfTrasladoCAS/PDF";
import Re_Exenta_aplica_apercibimiento_DyD from "util/Plantillas/PlantillaDemo/Re_Exenta_aplica_apercibimiento_DyD/PDF";
import Re_Exenta_desistimiento_voluntario_de_reclamante_CAS from "util/Plantillas/PlantillaDemo/Re_Exenta_desistimiento_voluntario_de_reclamante_CAS/PDF";
import ReExentaDesistimientoVoluntarioDeReclamanteDyD from "util/Plantillas/PlantillaDemo/Re_Exenta_desistimiento_voluntario_de_reclamante_DyD/PDF";
import ReExentaReclamoExtemporaneo from "util/Plantillas/PlantillaDemo/Re_Exenta_reclamo_extemporaneo/PDF";
import DerivacionOtraEntidad from 'util/Plantillas/PlantillaDemo/DerivacionOtraEntidad/PDF';
import DerivacionAseguradora from 'util/Plantillas/PlantillaDemo/DerivacionAseguradora/PDF';
import TestPDF from "util/Plantillas/PlantillaDemo/TestPDF/PDF";

export const RenderPdf = templateSelected => {
  switch (templateSelected) {
    case "ofApercibimientoCAS":
      return OfApercibimientoCAS;
    case "ofApercibimientoDyD":
      return OfApercibimientoDyD;
    case "ofRespuestaDirectaADR":
      return OfRespuestaDirectaADR;
    case "ofRespuestaDirectaCPO":
      return OfRespuestaDirectaCPO;
    case "OfRespuestadirectaMediacionParalela":
      return OfRespuestadirectaMediacionParalela;
    case "OfRespuestadirectaValoresexcesivos":
      return OfRespuestadirectaValoresexcesivos;
    case "OfTrasladoCAS":
      return OfTrasladoCAS;
    case "Re_Exenta_aplica_apercibimiento_DyD":
      return Re_Exenta_aplica_apercibimiento_DyD;
    case "Re_Exenta_desistimiento_voluntario_de_reclamante_CAS":
      return Re_Exenta_desistimiento_voluntario_de_reclamante_CAS;
    case "ReExentaDesistimientoVoluntarioDeReclamanteDyD":
      return ReExentaDesistimientoVoluntarioDeReclamanteDyD;
    case "Re_Extenta_reclamo_extemporaneo":
      return ReExentaReclamoExtemporaneo;
    case "DerivacionOtraEntidad":
      return DerivacionOtraEntidad
    case "DerivacionAseguradora":
      return DerivacionAseguradora
    default:
      return TestPDF;
  }
};
