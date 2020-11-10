import React from "react";
import CustomScrollbars from "util/CustomScrollbars";
import Navigation from "../../components/Navigation";
import { useSelector } from "react-redux";
import { permissionObject } from "permission/permissionObject";
import usePermission from "permission/usePermission";
// MENU
import {
  // INSTANCIA
  TareasMenu,
  // CAMUNDA
  CamundaMenu,
  // ADMINISTRACION
  ProcesoMenu,
  RegionMenu,
  ProvinciaMenu,
  ComunaMenu,
  PrestadorMenu,
  MateriaMenu,
  SubMateriaMenu,
  SexoMenu,
  Nacionalidad,
  TipoCalleMenu,
  GeneroMenu,
  ViaTramitacionMenu,
  TipoReclamoMenu,
  TareaMenu,
  PlantillaMenu,
  PlantillaTareasMenu,
  EstadoPlantillaMenu,
  // CONSULTA GENERAL
  ConsultaGeneralMenu,
  // FIRMA MASIVA
  FirmaMasivaMenu
} from "./MenuOptions";

const SideBarContent = () => {
  const navbar_selected = useSelector(state => state.settings.navbar_selected);

  const navigationMenus = [
    {
      name: `Menu ${navbar_selected}`,
      type: "section",
      children: [
        {
          name: "Home",
          type: "item",
          icon: "home",
          link: "/app/index"
        },
        usePermission(permissionObject.instance.view) && TareasMenu,
        usePermission(permissionObject.camunda.view) && CamundaMenu,
        {
          name: "Administración",
          icon: "view-dashboard",
          type: usePermission(permissionObject.administracion.view) ? "collapse" : "empty",
          children: [
            usePermission(permissionObject.proceso.view) && ProcesoMenu,
            usePermission(permissionObject.region.view) && RegionMenu,
            usePermission(permissionObject.provincia.view) && ProvinciaMenu,
            usePermission(permissionObject.comuna.view) && ComunaMenu,
            usePermission(permissionObject.prestador.view) && PrestadorMenu,
            usePermission(permissionObject.materia.view) && MateriaMenu,
            usePermission(permissionObject.sub_materia.view) && SubMateriaMenu,
            usePermission(permissionObject.sexo.view) && SexoMenu,
            usePermission(permissionObject.nacionalidad.view) && Nacionalidad,
            usePermission(permissionObject.tipo_calle.view) && TipoCalleMenu,
            usePermission(permissionObject.genero.view) && GeneroMenu,
            usePermission(permissionObject.via_tramitacion.view) && ViaTramitacionMenu,
            usePermission(permissionObject.tipo_reclamo.view) && TipoReclamoMenu,
            usePermission(permissionObject.tarea.view) && TareaMenu,
            usePermission(permissionObject.plantilla.view) && PlantillaMenu,
            usePermission(permissionObject.plantilla_tareas.view) && PlantillaTareasMenu,
            usePermission(permissionObject.estado_plantilla.view) && EstadoPlantillaMenu
          ]
        }
      ]
    },
    {
      name: "General",
      type: "section",
      children: [
        usePermission(permissionObject.consulta_general.view) && ConsultaGeneralMenu,
        usePermission(permissionObject.firma_masiva.view) && FirmaMasivaMenu
      ]
    }
  ];

  return (
    <CustomScrollbars className=" scrollbar">
      <Navigation menuItems={navigationMenus} />
    </CustomScrollbars>
  );
};

export default SideBarContent;
