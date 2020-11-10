import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem';
import { filterRegionProvincia } from 'api/Mantenedores/Regiones/regiones';
import { filterProvinciaComuna } from 'api/Mantenedores/Provincias/provincias';

const Formulario = (props) => {

  const { instanciaForm, firmante, formPdf, setFormPdf } = props

  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState([])
  const [comunas, setComunas] = useState([])
  const [provincia, setProvincia] = useState([])


  useEffect(() => {
    const getRegionesProvincias = async () => {
      const regionProvincia = await filterRegionProvincia();
      setRegion(regionProvincia.data.results);

      const provinciaApi = regionProvincia.data.results.filter(provi => provi.id === instanciaForm.cotizante.region)
      setProvincia(provinciaApi[0].provincias_region);
    }
    getRegionesProvincias();

    const getProvinciasComunas = async () => {
      const ProvinciaComuna = await filterProvinciaComuna(instanciaForm.cotizante.provincia);
      setComunas(ProvinciaComuna.data.comunas_provincia);
    }
    getProvinciasComunas();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [openC, setOpenC] = useState(false);

  const handleCloseC = () => {
    setOpenC(false);
  };

  const handleOpenC = () => {
    setOpenC(true);
  };

  const [openP, setOpenP] = useState(false);

  const handleCloseP = () => {
    setOpenP(false);
  };

  const handleOpenP = () => {
    setOpenP(true);
  };

  const [openF, setOpenF] = useState(false);
  const handleCloseF = () => {
    setOpenF(false);
  };

  const handleOpenF = () => {
    setOpenF(true);
  };

  const filtroProvincia = (e) => {
    const filtro = region.filter(r => r.id === e.target.value);
    setProvincia(filtro[0].provincias_region)
    setComunas([])
    setFormPdf({
      ...formPdf,
      cotizante: {
        ...formPdf.cotizante,
        [e.target.name]: [e.target.value]
      }
    })
  };

  const filtroComuna = async (e) => {

    const ProvinciaComuna = await filterProvinciaComuna(e.target.value);
    setComunas(ProvinciaComuna.data.comunas_provincia);
    setFormPdf({
      ...formPdf,
      cotizante: {
        ...formPdf.cotizante,
        [e.target.name]: [e.target.value]
      }
    })
  };

  const handleChange = (e) => {
    setFormPdf({
      ...formPdf,
      cotizante: {
        ...formPdf.cotizante,
        [e.target.name]: [e.target.value]
      }
    })
  }

  return (
    <div className="row">
      <div className="col-md-6 col-12">
        <TextField
          id="rut"
          name="rut"
          label="Rut"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={"19.456.784-k"}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="nombres"
          name="nombres"
          label="Nombres"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={instanciaForm.cotizante.nombres}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="apellido_paterno"
          name="apellido_paterno"
          label="Apellido Paterno"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={instanciaForm.cotizante.apellido_paterno}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="apellido_materno"
          name="apellido_materno"
          label="Apellido Materno"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={instanciaForm.cotizante.apellido_materno}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="n_reclamo"
          name="n_reclamo"
          label="N° Reclamo"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={instanciaForm.n_reclamo}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="ord_ip"
          name="ord_ip"
          label="ORD. IP/N°"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={handleChange}
          defaultValue={"3231"}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="fecha_actual"
          name="fecha_actual"
          label="Fecha Reclamo Actual"
          variant="outlined"
          margin="normal"
          defaultValue={instanciaForm.fecha_desde}
          fullWidth
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="representante_legal"
          name="representante_legal"
          label="Representante Legal"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={handleChange}
          defaultValue={"DIRECTOR DEL SERVICIO COMPIN"}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="en_contra"
          name="en_contra"
          label="En contra"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={handleChange}
          defaultValue={"Complejo Hospitalario San José"}
        />
      </div>
      <div className="col-md-6 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Región</InputLabel>
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            id="region"
            label="Región"
            name="region"
            variant="outlined"
            onChange={filtroProvincia}
            defaultValue={instanciaForm.region.id}
          >
            {region.map((regiones, index) => (
              <MenuItem value={regiones.id} key={index} >{regiones.nombre}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="col-md-6 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Provincias</InputLabel>
          <Select
            open={openP}
            onClose={handleCloseP}
            onOpen={handleOpenP}
            label="Provincias"
            id="provincia"
            name="provincia"
            variant="outlined"
            onChange={filtroComuna}
            defaultValue={instanciaForm.provincia.id}

          >
            {provincia.map((provincias, index) => (
              <MenuItem value={provincias.id} key={index}>{provincias.nombre}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="col-md-6 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Comunas</InputLabel>
          <Select
            open={openC}
            onClose={handleCloseC}
            onOpen={handleOpenC}
            label="Comunas"
            variant="outlined"
            name="comuna"
            id="comuna"
            onChange={handleChange}
            defaultValue={instanciaForm.comuna.id}
            disabled={comunas.length > 0 ? false : true}
          >
            {comunas.map((comuna, i) => (
              <MenuItem value={comuna.id} key={i}>{comuna.nombre}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="col-md-6 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Firmante</InputLabel>
          <Select
            open={openF}
            onClose={handleCloseF}
            onOpen={handleOpenF}
            label="Firmante"
            variant="outlined"
            name="firmante"
            id="firmante"
            onChange={handleChange}
            defaultValue={1}
          >
            {firmante.map((firm, i) => (
              <MenuItem value={firm.id} key={i}>{firm.nombre}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

    </div>


  )
}

export default Formulario