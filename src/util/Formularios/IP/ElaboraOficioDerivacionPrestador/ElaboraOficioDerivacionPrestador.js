import React, { useState, useEffect } from "react";

import CardBox from "components/CardBox";
import { CustomDialog } from "util/CustomDialog";

import SelectTemplate from "util/SelectTemplate";
import TablaDocumentos from "./components/TablaDocumentos";
import BotonAcciones from "../components/BotonAcciones";
import { RenderPlantilla } from "../../../Plantillas/RenderPlantilla";
// SELECT AND TABLE
import {
  getPlantillasInstancia,
  instancePlantillasAPI
} from "api/Instancias/instancia";

import { uploadPDF } from "api/Tareas/tareas";
import { notificationsApi } from "util/Notifications";

import { useForm } from "react-hook-form";

// ! REALIZAR COMPONENTES REUTILIZABLES PARA LAS PLANTILLAS

const tabOptions = ["Fomulario", "Vista Previa"];

const ElaboraOficioDerivacionPrestador = ({
  instanciaForm,
  match,
  token,
  handleSubmitForm
}) => {
  const [plantillasDisponibles, setPlantillasDisponibles] = useState({
    count: 0,
    results: []
  });
  const [plantillaSeleccionada, setPlantillaSeleccionada] = useState({
    id: null,
    name: ""
  });
  const [plantillas, setPlantillas] = useState({
    count: 0,
    results: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Estado al subir pdf
  const [loadingUpload, setLoadingUpload] = useState(false);

  const { handleSubmit } = useForm();

  const handleDialogOpen = () => {
    // !Realizar una función que valide si el nombre de la plantilla
    // !seleccionada hace match con una existente
    if (!plantillaSeleccionada.id) {
      return alert("Debes seleccionar una plantilla a modificar");
    } else {
      setIsOpen(true);
    }
  };
  const handeDialogClose = () => setIsOpen(false);

  useEffect(() => {
    const fetchPlantillaSelect = async () => {
      const res = await getPlantillasInstancia(token, instanciaForm.id);

      if (res.error) {
        setError(true);
      } else {
        setPlantillasDisponibles(res.data);
      }
    };
    fetchPlantillaSelect();
  }, [token, instanciaForm.id]);

  useEffect(() => {
    const fetchPlantilla = async () => {
      setLoading(true);
      const res = await instancePlantillasAPI(token, instanciaForm.id);

      if (res.error) {
        setError(true);
        setLoading(false);
      } else {
        setPlantillas(res.data);
        setLoading(false);
      }
    };
    fetchPlantilla();
  }, [token, instanciaForm.id]);

  const handleUploadPdf = async (e, blob) => {
    e.preventDefault();
    setLoadingUpload(true);

    const res = await uploadPDF(
      token,
      blob,
      instanciaForm.id,
      plantillaSeleccionada.id
    );

    if (res.error) {
      notificationsApi("error", "Error al subir el pdf");
    } else {
      setPlantillas({
        ...plantillas,
        results: [...plantillas.results, res.data]
      });
      notificationsApi("success", "PDF creado exitosamente");
      handeDialogClose();
    }
    setLoadingUpload(false);
  };

  const CurrentTemplate = RenderPlantilla(plantillaSeleccionada.name);

  return (
    <>
      <CardBox styleName="col-lg-12">
        <h3 className="font-weight-light">
          <strong>Elaborar Oficio Derivación a Prestador</strong>
        </h3>
      </CardBox>
      <CardBox styleName="col-lg-12">
        <SelectTemplate
          handleDialogOpen={handleDialogOpen}
          plantillasDisponibles={plantillasDisponibles}
          setPlantillaSeleccionada={setPlantillaSeleccionada}
        />
      </CardBox>
      <CardBox styleName="col-lg-12">
        <>
          <TablaDocumentos
            plantillas={plantillas}
            loading={loading}
            error={error}
          />
          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <BotonAcciones styleName="col-12 mt-4" />
          </form>
        </>
      </CardBox>
      {/* MODAL */}
      <CustomDialog
        isOpen={isOpen}
        handleClose={handeDialogClose}
        title="Generador de Plantillas"
        width="lg"
      >
        <CurrentTemplate
          instanciaForm={instanciaForm}
          plantillas={plantillas}
          setPlantillas={setPlantillas}
          handeDialogClose={handeDialogClose}
          match={match}
          loadingUpload={loadingUpload}
          handleUploadPdf={handleUploadPdf}
          //
          plantillaSeleccionada={plantillaSeleccionada}
          instanciaData={instanciaForm}
          tabOptions={tabOptions}
          width="md"
        />
      </CustomDialog>
    </>
  );
};

export default ElaboraOficioDerivacionPrestador;
