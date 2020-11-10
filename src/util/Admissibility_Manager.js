import { RenderIP } from "util/Formularios/IP/RenderIP";
import { RenderIF } from "util/Formularios/IF/RenderIF";

export const Admissibility_Manager = navbar_selected => {
  switch (navbar_selected) {
    case "ip":
      return RenderIP;
    case "if":
      return RenderIF;
    default:
      break;
  }
};
