import PropTypes from 'prop-types'
import React, { useState } from 'react'
import CardBox from 'components/CardBox'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { CustomDialog } from 'util/CustomDialog'
import Icon from '@mdi/react'
import { mdiPlus } from '@mdi/js'
import { useForm, Controller } from 'react-hook-form'
import { FormHelperText } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import { validationMateriaSchema } from './validacionMateria'
import Buscador from '../../components/Buscador'

const AgregarMateria = (props) => {
  const { handleSubmit, control, errors } = useForm({
    mode: 'onBlur',
    validationSchema: validationMateriaSchema,
  })
  const [isOpen, setIsOpen] = useState(false)
  const handleDialogOpen = () => setIsOpen(true)
  const handleDialogClose = () => setIsOpen(false)
  const { agregarMateria, procesos, setSearchInput, searchInput } = props

  const onSubmit = (data) => {
    agregarMateria(data)
    handleDialogClose()
  }

  if (!procesos) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>Error al cargar los procesos</h3>
      </div>
    )
  }

  return (
    <div className="row">
      <CardBox styleName="col-lg-12">
        <form className="row">
          <div className="col align-self-center">
            <Button
              variant="contained"
              color="primary"
              className="jr-btn jr-btn-lg"
              onClick={handleDialogOpen}
            >
              <Icon path={mdiPlus} title="Agregar" size={1} /> Agregar
            </Button>
          </div>
          <Buscador searchInput={searchInput} setSearchInput={setSearchInput} />
        </form>
      </CardBox>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        title="Agregar Nueva Materia"
        submitForm={handleSubmit(onSubmit)}
      >
        <>
          <Controller
            as={TextField}
            name="descripcion"
            label="Descripción"
            control={control}
            defaultValue=""
            error={errors.descripcion && true}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <FormHelperText error>{errors?.descripcion?.message}</FormHelperText>
          <FormControl variant="outlined" margin="normal" fullWidth value="">
            <InputLabel>Proceso</InputLabel>
            <Controller
              error={errors.proceso && true}
              name="proceso"
              control={control}
              defaultValue=""
              as={
                <Select label="Proceso" name="proceso" defaultValue="">
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
    </div>
  )
}

AgregarMateria.propTypes = {
  agregarMateria: PropTypes.func,
  procesos: PropTypes.array,
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.func,
}

export default AgregarMateria
