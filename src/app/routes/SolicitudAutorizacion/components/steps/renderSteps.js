import InstitutionalProvider from "./InstitutionalProvider";
import  Owner from "./ Owner";
import Director from "./Director";
import LegalRepresentantive from "./LegalRepresentantive";
import SanitaryResolution from "./SanitaryResolution";
import QualityManager from "./QualityManager";
import ResponsibleForRequest from "./ResponsibleForRequest/ResponsibleForRequest";
import DownloadDetail from "./DownloadDetail/DownloadDetail";

const renderSteps = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return InstitutionalProvider;
    case 1:
      return  Owner;
    case 2:
      return Director;
    case 3:
      return LegalRepresentantive;
    case 4:
      return SanitaryResolution;
    case 5:
      return QualityManager;
    case 6:
      return ResponsibleForRequest;
    case 7:
      return DownloadDetail;
    default:
      return "Uknown stepIndex";
  }
};

export default renderSteps;
