import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'            
import MenuItem from '@material-ui/core/MenuItem';


const Formulario = (props) => {

    const { instanciaForm, region,setFormPdf, comunas, setTab, provincia, firmante, formPdf } = props
    const [open, setOpen] = useState(false);
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
        const filtro = provincia.filter(p => p.region === e.target.value);
        setProvinciaFilter(filtro);

        setFormPdf({
            ...formPdf,
            cotizante:{
                ...formPdf.cotizante,
                [e.target.name]: [e.target.value]
            }
    })
    }
    const filtroComuna = (e) => {
        const filtro = comunas.filter(c => c.provincia === e.target.value);
        setComunasFilter(filtro);

        setFormPdf({
            ...formPdf,
            cotizante:{
                ...formPdf.cotizante,
                [e.target.name]: [e.target.value]
            }
        })
    }
    useEffect(()=>{
        const filtro = provincia.filter(p => p.region === instanciaForm.region.id );
        setProvinciaFilter(filtro);

        const filtroc = comunas.filter(c => c.provincia === instanciaForm.provincia.id );
        setComunasFilter(filtroc);

    },[]) // eslint-disable-line react-hooks/exhaustive-deps

    const [comunasFilter, setComunasFilter] = useState([]);
    const [provinciaFilter, setProvinciaFilter] = useState([]);

    const handleChange = (e) => {
        setFormPdf({
                ...formPdf,
                cotizante:{
                    ...formPdf.cotizante,
                    [e.target.name]: [e.target.value]
                }
        })
    }
    return (
        <div className="row">
            <div className="col-md-6 col-12">
                <TextField
                onChange={handleChange}
                id="reclamo"
                name="reclamo"
                label="Reclamo N°"
                variant="outlined"
                margin="normal"
                fullWidth
                defaultValue={instanciaForm.cotizante.n_reclamo || ''}
                />
            </div>
            <div className="col-md-6 col-12">
                <TextField
                onChange={handleChange}
                id="ord_ip"
                name="ord_ip"
                label="ORD.IP/N°"
                variant="outlined"
                margin="normal"
                fullWidth
                defaultValue={instanciaForm.ord_ip || ''}
                />
            </div>
            <div className="col-md-6 col-12">
                <TextField
                onChange={handleChange}
                id="fecha"
                name="fecha"
                label="Reclamo de Fecha"
                variant="outlined"
                margin="normal"
                fullWidth
                defaultValue={instanciaForm.fecha_inicio_reclamo || ''}
                />
            </div>
            <div className="col-md-6 col-12">
                <TextField
                onChange={handleChange}
                id="nombre_reclamo_de_fecha"
                name="nombre_reclamo_de_fecha"
                label="Nombre"
                variant="outlined"
                margin="normal"
                fullWidth
                defaultValue={instanciaForm.cotizante.nombre_reclamo_de_fecha || ''}
                />
            </div>
            <div className="col-md-6 col-12">
                <TextField
                onChange={handleChange}
                id="apellido_reclamo_de_fecha"
                name="apellido_reclamo_de_fecha"
                label="Apellido"
                variant="outlined"
                margin="normal"
                fullWidth
                defaultValue={instanciaForm.cotizante.apellido_reclamo_de_fecha || ''}
                />
            </div>
            <div className="col-md-6 col-12">
                <TextField
                onChange={handleChange}
                id="prestador"
                name="prestador"
                label="Prestador"
                variant="outlined"
                margin="normal"
                fullWidth
                defaultValue={instanciaForm.cotizante.prestador || ''}
                />
            </div>
            <div className="col-md-6 col-12">
                <TextField
                    onChange={handleChange}
                    id="direccion_nombre_calle"
                    name="direccion_nombre_calle"
                    label="Dirección"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    defaultValue={instanciaForm.cotizante.direccion_nombre_calle || ''}
                />
            </div>
            <div className="col-md-6 col-12">
                <TextField
                onChange={handleChange}
                id="direccion_numero_calle"
                name="direccion_numero_calle"
                label="Número"
                variant="outlined"
                margin="normal"
                fullWidth
                defaultValue={instanciaForm.cotizante.direccion_numero_calle || ''}
                />
            </div>
            <div className="col-md-6 col-12">
                <FormControl variant="outlined" margin="normal" fullWidth value="">
                    <InputLabel>Región</InputLabel>
                    <Select 
                            onChange={filtroProvincia}
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            defaultValue={instanciaForm.region.id || ''}
                            name="region"
                            id="region"
                            label="Región"
                            variant="outlined"  
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
                        onChange={filtroComuna}
                        open={openP}
                        onClose={handleCloseP}
                        onOpen={handleOpenP}
                        label="Provincias"
                        variant="outlined"
                        defaultValue={instanciaForm.provincia.id || ''}
                        name="provincia"
                    >
                        {provinciaFilter.map((provincias, i) => (
                            <MenuItem value={provincias.id} key={i}> {provincias.nombre}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>

            <div className="col-md-6 col-12">
                <FormControl variant="outlined" margin="normal" fullWidth value="">
                    <InputLabel>Comunas</InputLabel>
                    <Select 
                        onChange={handleChange}
                        open={openC}
                        onClose={handleCloseC}
                        onOpen={handleOpenC}
                        label="Comunas"
                        variant="outlined"
                        defaultValue={instanciaForm.comuna.id || ''}
                        name="comuna"
                    >
                        {comunasFilter.map((comuna, i) => (
                            <MenuItem value={comuna.id} key={i}>{comuna.nombre}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            
    </div>
    )
}
export default Formulario