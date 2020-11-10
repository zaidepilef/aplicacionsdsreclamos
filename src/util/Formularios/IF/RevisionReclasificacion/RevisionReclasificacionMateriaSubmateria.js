import React, { useState, useEffect } from "react";
import {
  FormControl,
  makeStyles,
  Checkbox,
  FormLabel
} from "@material-ui/core";
import CardBox from "components/CardBox";
import {
  fetchDataSelectAPI,
  fetchRegionesAPI,
  fetchPrestadoresAPI
} from "api/Instancias/instancia";
import { useForm, Controller } from "react-hook-form";
import { revisionReClasificacion } from "../taskValidations";
import BotonAcciones from "util/BotonAcciones";
import DatosControl from "./components/DatosControl";
import AntecedentesReclamanteRepresentante from "./components/AntecedentesReclamanteRepresentante";
import AntecedentesPrestador from "./components/AntecedentesPrestador";

import AntecedentesAseguradora from "./components/AntecedentesAseguradora";
import AntecedentesPaciente from "./components/AntecedentesPaciente";
import SkeletonForm from "util/SkeletonForm";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { set } from "nprogress";

const useStyles = makeStyles(() => ({
  divider: {
    padding: "6px ",
    backgroundColor: "#fff"
  },
  dividerBody: {
    marginTop: "10px",
    backgroundColor: "#fff"
  },
  errorMessage: {
    color: "red"
  }
}));

const RevisionReclasificacionMateriaSubmateria = props => {
  const classes = useStyles();

  const { instanciaData, handleSubmitForm } = props;
  const [selectInput, setSelectInputs] = useState({});
  const [regiones, setRegiones] = useState([]);
  const [comunasRepresentante, setComunasRepresentante] = useState([]);
  const [comunasPrestador, setComunasPrestador] = useState([]);
  const [prestadores, setPrestadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { register, control, handleSubmit, setValue, watch, errors } = useForm({
    defaultValues: instanciaData,
    mode: "onBlur",
    resolver: yupResolver(revisionReClasificacion)
  });

  useEffect(() => {
    const fetchDataSelect = async () => {
      const response = await fetchDataSelectAPI(instanciaData.id);

      if (response.error) {
        setError(true);
        setLoading(false);
        // return notificationsApi("error", "Error al cargar el expediente");
      } else {
        setSelectInputs(response.data);
        setError(false);
        setLoading(false);
      }
    };
    fetchDataSelect();
  }, [instanciaData]);

  useEffect(() => {
    const fetchRegiones = async () => {
      const response = await fetchRegionesAPI();
      if (response.error) {
        return setRegiones([]);
      } else {
        setRegiones(response.data.results);
      }
    };
    fetchRegiones();
  }, [instanciaData]);

  useEffect(() => {
    const fetchComunas = async () => {
      const watchRegion = watch("cotizante.region");

      if (watchRegion) {
        const response = await fetchRegionesAPI(watchRegion.id);
        if (response.error) {
          return setComunasRepresentante([]);
        } else {
          setComunasRepresentante(response.data);
        }
      } else {
        setValue("cotizante.comuna", "");
        setComunasRepresentante([]);
      }
    };
    fetchComunas();
  }, [watch("cotizante.region")]);

  useEffect(() => {
    const fetchComunas = async () => {
      const watchRegion = watch("prestador.comuna.provincia.region");

      if (watchRegion) {
        const response = await fetchRegionesAPI(watchRegion.id);
        if (response.error) {
          return setComunasPrestador([]);
        } else {
          setComunasPrestador(response.data);
        }
      } else {
        setValue("prestador.comuna", "");
        setComunasPrestador([]);
      }
    };
    fetchComunas();
  }, [watch("prestador.comuna.provincia.region")]);

  useEffect(() => {
    const fetchPrestadores = async () => {
      const watchComunaPrestador = watch("prestador.comuna");

      if (watchComunaPrestador) {
        const response = await fetchPrestadoresAPI(watchComunaPrestador.id);
        if (response.error) {
          return setPrestadores([]);
        } else {
          setValue("prestador", "");
          setPrestadores(response.data.prestadores);
        }
      } else {
        setValue("prestador", "");
        setPrestadores([]);
      }
    };
    fetchPrestadores();
  }, [watch("prestador.comuna")]);

  if (loading) {
    return (
      <CardBox styleName="col-lg-12">
        <SkeletonForm />
      </CardBox>
    );
  }

  return (
    <CardBox styleName="col-lg-12">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <DatosControl
          register={register}
          control={control}
          errors={errors}
          classes={classes}
          tipo_ingresos={selectInput.tipo_ingresos}
          prioridades={selectInput.prioridades}
          tipos_reclamo={selectInput.tipos_reclamo}
          materias={selectInput.materias}
          submaterias={selectInput.submaterias}
          unidades={selectInput.unidades}
        />
        <AntecedentesReclamanteRepresentante
          register={register}
          Controller={Controller}
          setValue={setValue}
          control={control}
          watch={watch}
          errors={errors}
          classes={classes}
          sexos={selectInput.sexos}
          generos={selectInput.generos}
          nacionalidades={selectInput.nacionalidades}
          regiones={regiones}
          comunasRepresentante={comunasRepresentante}
        />
        <AntecedentesPaciente
          register={register}
          Controller={Controller}
          setValue={setValue}
          control={control}
          watch={watch}
          errors={errors}
          classes={classes}
          nacionalidades={selectInput.nacionalidades}
          generos={selectInput.generos}
        />
        {instanciaData.aseguradora ? (
          <AntecedentesAseguradora
            classes={classes}
            register={register}
            errors={errors}
            setValue={setValue}
            control={control}
            watch={watch}
            aseguradoras={selectInput.aseguradoras}
          />
        ) : (
          <AntecedentesPrestador
            classes={classes}
            register={register}
            errors={errors}
            setValue={setValue}
            control={control}
            watch={watch}
            regiones={regiones}
            comunasPrestador={comunasPrestador}
            prestadores={prestadores}
          />
        )}

        <div className="row">
          <div className="col-md-4 col-12 mt-3 mb-3">
            <FormControl component="fieldset">
              <FormLabel component="legend">Notificacion Electronica</FormLabel>
              <Controller
                name="notificacion_electronica"
                control={control}
                render={props => (
                  <Checkbox
                    onChange={e => props.onChange(e.target.checked)}
                    checked={props.value}
                    color="primary"
                  />
                )}
              />
            </FormControl>
          </div>
        </div>
        <BotonAcciones styleName="col-12" />
      </form>
    </CardBox>
  );
};

export default RevisionReclasificacionMateriaSubmateria;
