export const TareasMenu = {
  name: "Tareas",
  icon: "view-dashboard",
  type: "collapse",
  children: [
    {
      name: "Reclamos en Proceso",
      type: "item",
      link: "/app/tareas/en-proceso"
    },
    {
      name: "Oficina de Partes",
      type: "item",
      link: "/app/tareas/oficina-partes"
    },
    {
      name: "Reclamos Finalizados",
      type: "item",
      link: "/app/tareas/finalizadas"
    }
  ]
};
export const CamundaMenu = {
  name: "Camunda",
  icon: "view-dashboard",
  type: "collapse",
  children: [
    {
      name: "Re Asignar",
      type: "item",
      link: "/app/camunda/re-asignar"
    },
    {
      name: "Duplicar",
      type: "item",
      link: "/app/camunda/duplicar"
    },
    {
      name: "Transferir",
      type: "item",
      link: "/app/camunda/transferir"
    }
  ]
};
// ADMINISTRACION
export const ProcesoMenu = {
  name: "Procesos",
  type: "item",
  link: "/app/administracion/procesos"
};
export const RegionMenu = {
  name: "Mantenedor Regiones",
  type: "item",
  link: "/app/administracion/regiones"
};
export const ProvinciaMenu = {
  name: "Mantenedor Provincias",
  type: "item",
  link: "/app/administracion/provincias"
};
export const ComunaMenu = {
  name: "Mantenedor Comunas",
  type: "item",
  link: "/app/administracion/comunas"
};
export const PrestadorMenu = {
  name: "Mantenedor Prestadores",
  type: "item",
  link: "/app/administracion/prestadores"
};
export const MateriaMenu = {
  name: "Mantenedor Materias",
  type: "item",
  link: "/app/administracion/materias"
};
export const SubMateriaMenu = {
  name: "Mantenedor Sub Materias",
  type: "item",
  link: "/app/administracion/submaterias"
};
export const SexoMenu = {
  name: "Mantenedor Sexo",
  type: "item",
  link: "/app/administracion/sexos"
};
export const Nacionalidad = {
  name: "Mantenedor Nacionalidad",
  type: "item",
  link: "/app/administracion/nacionalidades"
};
export const TipoCalleMenu = {
  name: "Mantenedor Tipo Calle",
  type: "item",
  link: "/app/administracion/tipo-calle"
};
export const GeneroMenu = {
  name: "Mantenedor Género",
  type: "item",
  link: "/app/administracion/genero"
};
export const ViaTramitacionMenu = {
  name: "Mantenedor Vía de Tramitación",
  type: "item",
  link: "/app/administracion/via_tramitacion"
};
export const TipoReclamoMenu = {
  name: "Mantenedor Tipo Reclamo",
  type: "item",
  link: "/app/administracion/tipo_reclamo"
};
export const TareaMenu = {
  name: "Mantenedor Tareas",
  type: "item",
  link: "/app/administracion/tareas"
};
export const PlantillaMenu = {
  name: "Mantenedor Plantillas",
  type: "item",
  link: "/app/administracion/plantillas"
};
export const PlantillaTareasMenu = {
  name: "Mantenedor Plantillas Tareas",
  type: "item",
  link: "/app/administracion/plantillatareas"
};
export const EstadoPlantillaMenu = {
  name: "Mantenedor Estado Plantilla",
  type: "item",
  link: "/app/administracion/estadoplantilla"
};
// ------ADMINISTRACION--------
export const ConsultaGeneralMenu = {
  name: "Consulta General",
  type: "item",
  icon: "view-dashboard",
  link: "/app/consulta-general"
}
export const FirmaMasivaMenu = {
  name: "Firma Masiva",
  type: "item",
  icon: "view-dashboard",
  link: "/app/firma-masiva"
}