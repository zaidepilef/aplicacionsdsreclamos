import React, {useState, Fragment} from 'react';
import { updateProvincia, deleteProvincia } from 'api/Mantenedores/Provincias/provincias'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { notificationsApi } from 'util/Notifications';
import TextField from '@material-ui/core/TextField';
import { CustomDialog } from 'util/CustomDialog';
import { getAccessToken } from 'api/auth';
import Swal from 'sweetalert2';
import Icon from '@mdi/react';
import { mdiFileEdit ,mdiDelete } from '@mdi/js'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { validationSchema } from './validations';
import { FormHelperText } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form'; 

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: 'rgb(33, 144, 171  )',
        color: 'rgb(39, 70, 77)',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        '&:hover': {
            backgroundColor: '#EDEDF3'
        }
    },
}))(TableRow);


const ListaProvincias = (props) => {
    const { regiones, provincia, setLoading, loading } = props;
    const [isOpen, setIsOpen] = useState(false);
    const handleDialogOpen = () => setIsOpen(true);
    const handeDialogClose = () => setIsOpen(false);
    const token = getAccessToken();
     
    const { control, handleSubmit, errors } = useForm({
      mode:'onBlur',
      validationSchema:validationSchema
    });
 

    
    const editarProvincia = (data) => {
        updateProvincia(token, data, provincia.codigo_provincia).then(response => {
            notificationsApi('success', 'Editado Correctamente')
            setLoading(!loading)
        })
            .catch(err => {
                notificationsApi('error', err)
            })
        handeDialogClose();
    }

    const elimiarProvincia = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Esta accion no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, Eliminar'
        })
        .then((result)=>{
            if(result.value){
                deleteProvincia(token, provincia.codigo_provincia).then(response =>{
                    Swal.fire(
                            'Eliminado!',
                            'La Provincia ha sido eliminada.',
                            'success'
                        )
                    setLoading(!loading)
                })
                .catch(err =>{
                    notificationsApi('error',err)
                })
            }
        })       
        handeDialogClose();        
    }

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleOpen = () => {
        setOpen(true);
    };
    
    return ( 
        <Fragment>
            <StyledTableRow style={{ textDecoration: 'none' }}>
                <StyledTableCell align="center" >{provincia.codigo_provincia}</StyledTableCell>
                <StyledTableCell align="center">{provincia.nombre_region}</StyledTableCell>
                <StyledTableCell align="center">{provincia.nombre}</StyledTableCell>
                <StyledTableCell align="center">
                    <Button 
                        type="submit" variant="contained" color="primary"
                        className="jr-btn jr-btn-lg"
                        onClick={handleDialogOpen}
                        >
                         <Icon path={mdiFileEdit}
                            title="Editar"
                            size={1} 
                            />
                    </Button>
                    <Button
                        type="submit"
                        onClick={elimiarProvincia}
                        variant="contained"
                        color="primary"
                        className="jr-btn jr-btn-lg" >
                         <Icon path={mdiDelete}
                            title="Eliminar"
                            size={1} 
                            />
                    </Button>
                    </StyledTableCell>
                    <CustomDialog
                    isOpen={isOpen}
                    handleClose={handeDialogClose}
                    title='Editar Provincia'
                    submitForm={handleSubmit(editarProvincia)}
                >
                    <>
                        <Controller
                            as={TextField} 
                            control={control}
                            error={errors.codigo_provincia && true}
                            autoFocus
                            name="codigo_provincia"
                            label="Código"
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            defaultValue={provincia.codigo_provincia}
                        /> 
                        <FormHelperText error>{errors.codigo_provincia && errors.codigo_provincia.message}</FormHelperText>     
                        
                        <Controller
                            as={TextField} 
                            control={control}
                            error={errors.nombre && true}
                            name="nombre"
                            label="Nombre"
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            defaultValue={provincia.nombre}
                        /> 
                        <FormHelperText error>{errors.nombre && errors.nombre.message}</FormHelperText>     
                        
                        <FormControl variant="outlined" margin="normal" fullWidth value="">
                        <InputLabel >
                            Región
                        </InputLabel>
                        <Controller
                            as={ <Select 
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            name="region"
                            label="Región"
                            error={errors.region && true}
                        >
                            {regiones.map((region, index) => (
                                <MenuItem value={region.id} key={index}>{region.nombre}</MenuItem>
                            ))}
                        </Select>} 
                            name="region"
                            control={control}
                        > 
                        </Controller>                 
                        </FormControl>   
                        <FormHelperText error>{errors.region && errors.region.message}</FormHelperText>                 
                    </>
                </CustomDialog>
            </StyledTableRow>
        </Fragment>
    );
}

export default ListaProvincias;