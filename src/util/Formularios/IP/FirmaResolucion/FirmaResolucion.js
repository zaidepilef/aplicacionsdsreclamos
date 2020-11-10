import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import CardBox from "components/CardBox";
import BotonAcciones from "../components/BotonAcciones";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { instancePlantillasAPI } from "api/Instancias/instancia";
//
import NewCustomDialog from "util/NewCustomDialog";
import TablaDocsPendientes from "./components/TablaDocsPendientes";
import BotonFirma from "./components/BotonFirma";
import Form from "./components/Form";
import ModalFirma from "./modal/ModalFirma";
import {useSelector} from 'react-redux';


const useStyles = makeStyles(() => ({
  divider: {
    padding: "20px",
    backgroundColor: "#fff"
  }
}));

const FirmaResolucion = ({ instanciaForm, handleSubmitForm, token }) => {
  const [plantillas, setPlantillas] = useState({
    count: 0,
    results: []
  });
  const [documentSelected, setDocumentSelected] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const classes = useStyles();

  //propiedades del modal
  const [isOpen, setIsOpen] = useState(false);

  const handeDialogClose = () => {
    setIsOpen(false)
  };
  const handleDialogOpen = () => {
    setIsOpen(true)
  };

  const {perfil_usuario} = useSelector(state => state.auth.user);

  const { handleSubmit, register, control, errors, setValue } = useForm({
    defaultValues: {
      intendenteFirma:false,
      is_atendida:true,
      otp:'',
      run:perfil_usuario.rut
    },
    mode: "onBlur"
  });

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

  return (
    <>
      <CardBox styleName="col-lg-12">
        <>
          <TablaDocsPendientes
            documentSelected={documentSelected}
            setDocumentSelected={setDocumentSelected}
            loading={loading}
            plantillas={plantillas}
            error={error}
            setValue={setValue}
          />
          <div className={classes.divider}>
            <BotonFirma control={control} register={register} errors={errors} handleDialogOpen={handleDialogOpen}/>
          </div>

          <Form styleName="col-lg-12" />
        </>
      </CardBox>

      <CardBox styleName="col-lg-12">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <BotonAcciones styleName="col-12 mt-4" />
        </form>
      </CardBox>
      <NewCustomDialog
        size="xl"
        title="Firmar Documentos"
        isOpen={isOpen}
        handleClose={handeDialogClose}
      >
        <ModalFirma register={register} handleSubmit={handleSubmit} documentSelected={documentSelected}/>
      </NewCustomDialog>
    </>
  );
};

FirmaResolucion.propTypes = {
  instanciaForm: PropTypes.object.isRequired,
  handleSubmitForm: PropTypes.func.isRequired
};

export default FirmaResolucion;
