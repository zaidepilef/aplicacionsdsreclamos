import React, { useState, useEffect } from "react";

import CardBox from "components/CardBox";
import { CustomDialog } from "util/CustomDialog";
import FormSelect from "./components/FormSelect";
import SelectTemplate from "util/SelectTemplate";
import TablaDocumentos from "./components/TablaDocumentos";
import BotonAcciones from "util/BotonAcciones";
// SELECT AND TABLE
import {
  getPlantillasInstancia,
  instancePlantillasAPI
} from "api/Instancias/instancia";

import { uploadPDF } from "api/Tareas/tareas";
import { notificationsApi } from "util/Notifications";
// import { visaRegistraSchema } from "../taskValidations";
import ModalPlantilla from "util/Plantillas/ModalPlantilla";
import { useForm } from "react-hook-form";

const ElaboraDocumentacionDerivacion = ({
  instanciaForm,
  match,
  token,
  handleSubmitForm
}) => {
  const [plantillasOriginales, setPlantillasOriginales] = useState({
    count: 0,
    results: []
  });
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

  const { handleSubmit, register, control, watch, errors } = useForm({
    defaultValues: { derivacionAseguradora: false }
  });

  const watchDerivacion = watch("derivacionAseguradora");

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
        setPlantillasOriginales(res.data);
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


  useEffect(() => {
    if (watchDerivacion) {
      setPlantillasDisponibles({
        ...plantillasOriginales,
        results: plantillasOriginales.results.filter(
          plantilla => plantilla.nombre_plantilla !== "DerivacionOtraEntidad"
        )
      });
    } else {
      setPlantillasDisponibles({
        ...plantillasOriginales,
        results: plantillasOriginales.results.filter(
          plantilla => plantilla.nombre_plantilla !== "DerivacionAseguradora"
        )
      });
    }
    setPlantillaSeleccionada("");
  }, [watchDerivacion, plantillasOriginales]);

  return (
    <>
      <CardBox styleName="col-lg-12">
        <h3 className="font-weight-light">
          <strong>Elaborar Oficio Derivacion a otra entidad </strong>
        </h3>
      </CardBox>

      <CardBox styleName="col-lg-12">
        <div className="row d-flex ">
          <div className="col-12">
            <FormSelect
              control={control}
              register={register}
              watch={watch}
              errors={errors}
            />
          </div>
          <div className="col-12">
            <SelectTemplate
              handleDialogOpen={handleDialogOpen}
              plantillasDisponibles={plantillasDisponibles}
              setPlantillaSeleccionada={setPlantillaSeleccionada}
            />
          </div>
        </div>
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
      >
        <ModalPlantilla
          instanciaForm={instanciaForm}
          plantillas={plantillas}
          setPlantillas={setPlantillas}
          handeDialogClose={handeDialogClose}
          match={match}
          loadingUpload={loadingUpload}
          handleUploadPdf={handleUploadPdf}
          //
          plantillaSeleccionada={plantillaSeleccionada}
        />
      </CustomDialog>
    </>
  );
};

export default ElaboraDocumentacionDerivacion;
