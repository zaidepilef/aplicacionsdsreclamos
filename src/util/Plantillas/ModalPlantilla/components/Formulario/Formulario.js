import React, { useState, useEffect } from "react";
import { RenderFormulario } from "./RenderFormulario";
import { firmante } from "../../firmante";
import { filterRegionProvincia } from "api/Mantenedores/Regiones/regiones";
import { filterProvinciaComuna } from "api/Mantenedores/Provincias/provincias";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      width: "100%",
      marginTop: 10
    }
  },
  margen: {
    marginTop: "2%",
    marginBottom: "2%"
  }
}));

const Formulario = props => {
  const { formPdf, setFormPdf, plantillaSeleccionada, setBody, bodyState } = props;

  const [region, setRegion] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [provincia, setProvincia] = useState([]);
  const classes = useStyles();
  const handleAdd = () => {
    const data = "";

    setBody(prevState => [...prevState, data]);
    console.log('bodyState',bodyState)
    setFormPdf(preState => {
      return {
        ...preState, 
        bodyState:[
          ...bodyState,
          data
        ]
      }
    })
  };

  const handleRemove = indexRemove => {
    setBody(prevState =>
      prevState.filter((input, index) => index !== indexRemove)
    );
    setFormPdf(prevState => {
      const filtro =  bodyState.filter((input, index) => index !== indexRemove)
      console.log(filtro); 
      return {...prevState, bodyState:filtro};
    });
  };

  useEffect(() => {
    const getRegionesProvincias = async () => {
      const regionProvincia = await filterRegionProvincia();
      setRegion(regionProvincia.data.results);

      const provinciaApi = regionProvincia.data.results.filter(
        provi => provi.id === formPdf.region.id
      );
      setProvincia(provinciaApi[0].provincias_region);
    };
    if (region.length === 0 && provincia.length === 0) getRegionesProvincias();

    const getProvinciasComunas = async () => {
      const ProvinciaComuna = await filterProvinciaComuna(formPdf.provincia.id);
      setComunas(ProvinciaComuna.data.comunas_provincia);
    };
    if (comunas.length === 0) getProvinciasComunas();
  }, []);

  const TemplateForm = RenderFormulario(plantillaSeleccionada.name);
  console.log(TemplateForm);
  const handleChange = (e, index) => {
    const caso = e.target.id ? e.target.id.split("_")[0] : e.target.name;
    console.log("caso: " + caso);
    switch (caso) {
      case "cotizante":
        setFormPdf({
          ...formPdf,
          cotizante: {
            ...formPdf.cotizante,
            [e.target.name]: e.target.value
          }
        });
        break;

      case "region":
        const filtro = region.filter(r => r.id === e.target.value);
        setProvincia(filtro[0].provincias_region);
        setComunas([]);
        setFormPdf({
          ...formPdf,
          region: {
            id: filtro[0].id,
            nombre: filtro[0].nombre
          }
        });
        break;

      case "provincia":
        const updateComunas = async provincia => {
          const provinciaComuna = await filterProvinciaComuna(provincia);
          console.log(provinciaComuna);
          setComunas(provinciaComuna.data.comunas_provincia);
          setFormPdf({
            ...formPdf,
            provincia: {
              id: provinciaComuna.data.id,
              nombre: provinciaComuna.data.nombre
            }
          });
        };
        updateComunas(e.target.value);
        break;

      case "comuna":
        const comunaUpdate = comunas.filter(c => c.id === e.target.value);
        setFormPdf({
          ...formPdf,
          comuna: {
            id: comunaUpdate[0].id,
            nombre: comunaUpdate[0].nombre
          }
        });
        break;

      case "reclamante":
        setFormPdf({
          ...formPdf,
          reclamante: {
            ...formPdf.reclamante,
            [e.target.name]: e.target.value
          }
        });
        break;

      //TODO: Se queda asi el Reducer hasta que esten los datos de los prestadores.
      case "prestador":
        setFormPdf({
          ...formPdf,
          prestador: {
            ...formPdf.prestador,
            [e.target.name]: e.target.value
          }
        });
        break;

      case "paciente":
        setFormPdf({
          ...formPdf,
          paciente: {
            ...formPdf.paciente,
            [e.target.name]: e.target.value
          }
        });
        break;

      case "firmante":
        const firmanteSelected = firmante.filter(f => f.id === e.target.value);
        setFormPdf({
          ...formPdf,
          firmante: firmanteSelected[0]
        });
        break;

      case "documentos":
        // TODO: ver Delay del checkBox
        // setDocumentos(prevState => {
        //   return { ...prevState, [e.target.name]: e.target.checked };
        // });
        setFormPdf(prevState => {
          return { ...prevState, documentos:{
            ...prevState.documentos,
            [e.target.name]: e.target.checked
          } };
        });
        break;

      case "textfield":

        const newValues = formPdf.bodyState;
        newValues[index] = e.target.value;
        setBody(() => newValues);
        setFormPdf((prevState) => {
          return {...prevState, newValues}
        })
        break;

        case "mediacion":
        setFormPdf((prevState) => {
          return {...prevState, mediacion: !prevState.mediacion}
        })
        break;

      case "aseguradora":
        setFormPdf({
          ...formPdf,
          aseguradora: {
            ...formPdf.aseguradora,
            [e.target.name]: e.target.value
          }
        });
      break;

      default:
        setFormPdf({
          ...formPdf,
          [e.target.name]: e.target.value
        });
        break;
    }
  };

  return (
    <div className="row">
      <TemplateForm
        firmante={firmante}
        formPdf={formPdf}
        setFormPdf={setFormPdf}
        handleChange={handleChange}
        region={region}
        comunas={comunas}
        provincia={provincia}
        bodyState={bodyState}
        handleAdd={handleAdd}
        setBody={setBody}
        handleRemove={handleRemove}
        classes={classes}
      />
    </div>
  );
};

export default Formulario;
