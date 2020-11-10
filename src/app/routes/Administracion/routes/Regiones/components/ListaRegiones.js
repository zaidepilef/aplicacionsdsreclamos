import React, {useState, Fragment} from 'react';
import { updateRegion, deleteRegion } from 'api/Mantenedores/Regiones/regiones';
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


const ListaRegiones = (props) => {
    const { region, setLoading, loading } = props;
    const [isOpen, setIsOpen] = useState(false);
    const handleDialogOpen = () => setIsOpen(true);
    const handeDialogClose = () => setIsOpen(false);
    const token = getAccessToken();
     
    const { control, handleSubmit, errors } = useForm({
      mode:'onBlur',
      validationSchema:validationSchema
    });
 

    
    const editarRegion = (data) => {
        updateRegion(token, data, region.codigo_region).then(response => {
            notificationsApi('success', 'Editado Correctamente')
            setLoading(!loading)
        })
            .catch(err => {
                notificationsApi('error', err)
            })
        handeDialogClose();
    }

    const elimiarRegion = () => {
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
                deleteRegion(token, region.codigo_region).then(response =>{
                    Swal.fire(
                            'Eliminado!',
                            'La Región ha sido eliminada.',
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

    return ( 
        <Fragment>
            <StyledTableRow style={{ textDecoration: 'none' }}>
                <StyledTableCell align="center" >{region.codigo_region}</StyledTableCell>
                <StyledTableCell align="center">{region.region_ordinal}</StyledTableCell>
                <StyledTableCell align="center">{region.nombre}</StyledTableCell>
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
                        onClick={elimiarRegion}
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
                        title='Editar Región'
                        submitForm={handleSubmit(editarRegion)}
                    >
                    <>
                        <Controller
                            as={TextField} 
                            control={control}
                            error={errors.codigo_region && true}
                            autoFocus
                            name="codigo_region"
                            label="Código"
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            defaultValue={region.codigo_region}
                        /> 
                        <FormHelperText error>{errors.codigo_region && errors.codigo_region.message}</FormHelperText>     
                        
                        <Controller
                            as={TextField} 
                            control={control}
                            error={errors.nombre && true}
                            name="nombre"
                            label="Nombre"
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            defaultValue={region.nombre}
                        /> 
                        <FormHelperText error>{errors.nombre && errors.nombre.message}</FormHelperText>     
                                            
                        <Controller
                            as={TextField} 
                            control={control}
                            error={errors.region_ordinal && true}
                            name="region_ordinal"
                            label="Región ordinal"
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            defaultValue={region.region_ordinal}
                        /> 
                        <FormHelperText error>{errors.region_ordinal && errors.region_ordinal.message}</FormHelperText>     
                    </>
                </CustomDialog>
            </StyledTableRow>
        </Fragment>
    );
}

export default ListaRegiones;