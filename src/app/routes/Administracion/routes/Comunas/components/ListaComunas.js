import React, {useState, Fragment} from 'react';
import { updateComuna, deleteComuna} from 'api/Mantenedores/Comunas/comunas'
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


const ListaComunas = (props) => {
    const { key, provincias, comuna, setLoading, loading } = props;
    const [isOpen, setIsOpen] = useState(false);
    const handleDialogOpen = () => setIsOpen(true);
    const handeDialogClose = () => setIsOpen(false);
    const token = getAccessToken();
     
    const { control, handleSubmit, errors } = useForm({
      mode:'onBlur',
      validationSchema:validationSchema
    });
 

    
    const editarComuna = (data) => {
        updateComuna(token, data, comuna.codigo_comuna).then(response => {
            notificationsApi('success', 'Editado Correctamente')
            setLoading(!loading)
        })
            .catch(err => {
                notificationsApi('error', err)
            })
        handeDialogClose();
    }

    const elimiarComuna = () => {
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
                deleteComuna(token, comuna.codigo_comuna).then(response =>{
                    Swal.fire(
                            'Eliminado!',
                            'La Comuna ha sido eliminada.',
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
                <StyledTableCell align="center" >{comuna.codigo_comuna}</StyledTableCell>
                <StyledTableCell align="center">{comuna.nombre_provincia}</StyledTableCell>
                <StyledTableCell align="center">{comuna.nombre}</StyledTableCell>
                <StyledTableCell align="center" key={key}>
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
                        onClick={elimiarComuna}
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
                    title='Editar Comuna'
                    submitForm={handleSubmit(editarComuna)}
                >
                    <Controller
                        as={TextField} 
                        control={control}
                        error={errors.codigo_comuna && true}
                        autoFocus
                        name="codigo_comuna"
                        label="Código"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        defaultValue={comuna.codigo_comuna}
                    /> 
                    <FormHelperText error>{errors.codigo_comuna && errors.codigo_comuna.message}</FormHelperText>     
                    
                    <Controller
                        as={TextField} 
                        control={control}
                        error={errors.nombre && true}
                        name="nombre"
                        label="Nombre"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        defaultValue={comuna.nombre}
                    /> 
                    <FormHelperText error>{errors.nombre && errors.nombre.message}</FormHelperText>     
                    
                    <FormControl variant="outlined" margin="normal" fullWidth value="">
                     <InputLabel >
                    Provincia
                </InputLabel>
                <Controller
                    as={ <Select 
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    name="provincia"
                    label="Provincia"
                    error={errors.provincia && true}
                >
                    {provincias.map((provincia, index) => (
                        <MenuItem value={provincia.id}>{provincia.nombre}</MenuItem>
                    ))}
                </Select>} 
                    name="provincia"
                    control={control}
                > 
                </Controller>                 
                </FormControl>   
                <FormHelperText error>{errors.provincia && errors.provincia.message}</FormHelperText>                 
                                
                </CustomDialog>
            </StyledTableRow>
        </Fragment>
    );
}

export default ListaComunas;