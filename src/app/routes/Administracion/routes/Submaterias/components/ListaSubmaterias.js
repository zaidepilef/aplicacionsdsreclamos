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
import { validationSubmateriaSchema } from './validacionSubmateria'

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

const ListaSubmaterias = (props) => {
  const { materias, submateria, eliminarSubmateria, editarSubmateria } = props
  const { handleSubmit, control, errors } = useForm({
    mode: 'onBlur',
    validationSchema: validationSubmateriaSchema,
  })
  const [isOpen, setIsOpen] = useState(false)
  const handleDialogOpen = () => setIsOpen(true)
  const handeDialogClose = () => setIsOpen(false)

  const editarSubmit = (data) => {
    editarSubmateria(data, submateria.id)
    handeDialogClose()
  }

  const eliminarSubmit = () => {
    eliminarSubmateria(submateria.id)
    handeDialogClose()
  }

  return (
    <>
      <StyledTableRow style={{ textDecoration: 'none' }}>
        <StyledTableCell align="center">{submateria.id}</StyledTableCell>
        <StyledTableCell align="center">
          {submateria.descripcion}
        </StyledTableCell>
        <StyledTableCell align="center">
          {submateria.nombre_materia}
        </StyledTableCell>
        <StyledTableCell align="center" key={submateria.id}>
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
          title="Editar Submateria"
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
              defaultValue={submateria.descripcion}
            />
            <FormHelperText error>
              {errors?.descripcion?.message}
            </FormHelperText>
            <FormControl variant="outlined" margin="normal" fullWidth value="">
              <InputLabel>Materia</InputLabel>
              <Controller
                error={errors.materia && true}
                name="materia"
                control={control}
                defaultValue={submateria.materia}
                as={
                  <Select label="Materia" name="materia">
                    {materias.map((materia, index) => (
                      <MenuItem key={materia.id} value={materia.id}>
                        {materia.descripcion}
                      </MenuItem>
                    ))}
                  </Select>
                }
              />
            </FormControl>
            <FormHelperText error>{errors?.materia?.message}</FormHelperText>
          </>
        </CustomDialog>
      </StyledTableRow>
    </>
  )
}

ListaSubmaterias.propTypes = {
  editarSubmateria: PropTypes.func,
  eliminarSubmateria: PropTypes.func,
  materias: PropTypes.array,
  submateria: PropTypes.shape({
    descripcion: PropTypes.string,
    id: PropTypes.number,
    materia: PropTypes.number,
    nombre_materia: PropTypes.string,
  }),
}

export default ListaSubmaterias
