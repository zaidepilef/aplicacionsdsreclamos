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
import MenuItem from '@material-ui/core/MenuItem'
import { useForm, Controller } from 'react-hook-form'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import { FormHelperText } from '@material-ui/core'
import { validationMateriaSchema } from './validacionMateria'

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

const ListaMaterias = (props) => {
  const { handleSubmit, control, errors } = useForm({
    mode: 'onBlur',
    validationSchema: validationMateriaSchema,
  })
  const { procesos, materia, eliminarMateria, editarMateria } = props
  const [isOpen, setIsOpen] = useState(false)
  const handleDialogOpen = () => setIsOpen(true)
  const handeDialogClose = () => setIsOpen(false)

  const editarSubmit = (data) => {
    editarMateria(data, materia.id)
    handeDialogClose()
  }

  const eliminarSubmit = () => {
    eliminarMateria(materia.id)
    handeDialogClose()
  }

  return (
    <>
      <StyledTableRow style={{ textDecoration: 'none' }}>
        <StyledTableCell align="center">{materia.id}</StyledTableCell>
        <StyledTableCell align="center">{materia.descripcion}</StyledTableCell>
        <StyledTableCell align="center">
          {materia.nombre_proceso}
        </StyledTableCell>
        <StyledTableCell align="center" key={materia.id}>
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
          title="Editar Materia"
          submitForm={handleSubmit(editarSubmit)}
        >
          <>
            <Controller
              as={TextField}
              name="descripcion"
              label="Descripción"
              control={control}
              error={errors.descripcion && true}
              variant="outlined"
              margin="normal"
              fullWidth
              defaultValue={materia.descripcion}
            />
            <FormHelperText error>
              {errors?.descripcion?.message}
            </FormHelperText>
            <FormControl variant="outlined" margin="normal" fullWidth value="">
              <InputLabel>Proceso</InputLabel>
              <Controller
                error={errors.proceso && true}
                name="proceso"
                control={control}
                defaultValue={materia.proceso}
                as={
                  <Select label="Proceso" name="proceso">
                    {procesos.map((proceso, index) => (
                      <MenuItem key={proceso.id} value={proceso.id}>
                        {proceso.nombre}
                      </MenuItem>
                    ))}
                  </Select>
                }
              />
            </FormControl>
            <FormHelperText error>{errors?.proceso?.message}</FormHelperText>
          </>
        </CustomDialog>
      </StyledTableRow>
    </>
  )
}

ListaMaterias.propTypes = {
  editarMateria: PropTypes.func,
  eliminarMateria: PropTypes.func,
  materia: PropTypes.shape({
    descripcion: PropTypes.string,
    id: PropTypes.number,
    nombre_proceso: PropTypes.string,
    proceso: PropTypes.number,
  }),
  procesos: PropTypes.array,
}

export default ListaMaterias
