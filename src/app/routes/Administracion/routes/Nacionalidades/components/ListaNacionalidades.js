import PropTypes from 'prop-types'
import React, { useState } from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { CustomDialog } from 'util/CustomDialog'
import Icon from '@mdi/react'
import { mdiFileEdit, mdiDelete } from '@mdi/js'
import { useForm, Controller } from 'react-hook-form'
import { FormHelperText } from '@material-ui/core'
import { validationNacionalidadSchema } from './validacionNacionalidad'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'rgb(33, 144, 171  )',
    color: 'rgb(39, 70, 77)',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    '&:hover': {
      backgroundColor: '#EDEDF3',
    },
  },
}))(TableRow)

const ListaNacionalidades = (props) => {
  const { handleSubmit, control, errors } = useForm({
    mode: 'onBlur',
    validationSchema: validationNacionalidadSchema,
  })
  const { nacionalidad, editarNacionalidad, eliminarNacionalidad } = props
  const [isOpen, setIsOpen] = useState(false)
  const handleDialogOpen = () => setIsOpen(true)
  const handeDialogClose = () => setIsOpen(false)

  const editarSubmit = (data) => {
    editarNacionalidad(data, nacionalidad.id)
    handeDialogClose()
  }

  const eliminarSubmit = () => {
    eliminarNacionalidad(nacionalidad.id)
    handeDialogClose()
  }

  return (
    <>
      <StyledTableRow style={{ textDecoration: 'none' }}>
        <StyledTableCell key={nacionalidad.id} align="center">
          {nacionalidad.codigo}
        </StyledTableCell>
        <StyledTableCell align="center">{nacionalidad.nombre}</StyledTableCell>
        <StyledTableCell align="center">
          {nacionalidad.gentilicio}
        </StyledTableCell>
        <StyledTableCell align="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="jr-btn jr-btn-lg"
            onClick={handleDialogOpen}
          >
            <Icon path={mdiFileEdit} title="Editar" size={1} />
          </Button>
          <Button
            type="submit"
            onClick={eliminarSubmit}
            variant="contained"
            color="primary"
            className="jr-btn jr-btn-lg"
          >
            <Icon path={mdiDelete} title="Eliminar" size={1} />
          </Button>
        </StyledTableCell>
        <CustomDialog
          isOpen={isOpen}
          handleClose={handeDialogClose}
          title="Editar Nacionalidad"
          submitForm={handleSubmit(editarSubmit)}
        >
          <>
            <Controller
              as={TextField}
              type="number"
              name="codigo"
              label="Código"
              control={control}
              defaultValue={nacionalidad.codigo}
              error={errors.codigo && true}
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <FormHelperText error>{errors?.codigo?.message}</FormHelperText>
            <Controller
              as={TextField}
              name="nombre"
              label="Nombre"
              control={control}
              defaultValue={nacionalidad.nombre}
              error={errors.nombre && true}
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <FormHelperText error>{errors?.nombre?.message}</FormHelperText>
            <Controller
              as={TextField}
              name="gentilicio"
              label="Gentilicio"
              control={control}
              defaultValue={nacionalidad.gentilicio}
              error={errors.gentilicio && true}
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <FormHelperText error>{errors?.gentilicio?.message}</FormHelperText>
          </>
        </CustomDialog>
      </StyledTableRow>
    </>
  )
}

ListaNacionalidades.propTypes = {
  editarNacionalidad: PropTypes.func,
  eliminarNacionalidad: PropTypes.func,
  nacionalidad: PropTypes.shape({
    codigo: PropTypes.number,
    gentilicio: PropTypes.string,
    id: PropTypes.number,
    nombre: PropTypes.string,
  }),
}

export default ListaNacionalidades
