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
import Buscador from '../../components/Buscador'
import { validationNacionalidadSchema } from './validacionNacionalidad'

const AgregarNacionalidad = (props) => {
  const { handleSubmit, control, errors } = useForm({
    mode: 'onBlur',
    validationSchema: validationNacionalidadSchema,
  })
  const [isOpen, setIsOpen] = useState(false)
  const handleDialogOpen = () => setIsOpen(true)
  const handleDialogClose = () => setIsOpen(false)
  const { agregarNacionalidad, setSearchInput, searchInput } = props

  const onSubmit = (data) => {
    agregarNacionalidad(data)
    handleDialogClose()
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
        title="Agregar Nueva Nacionalidad"
        submitForm={handleSubmit(onSubmit)}
      >
        <>
          <Controller
            as={TextField}
            type="number"
            name="codigo"
            label="Código"
            control={control}
            defaultValue={undefined}
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
            defaultValue=""
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
            defaultValue=""
            error={errors.gentilicio && true}
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <FormHelperText error>{errors?.gentilicio?.message}</FormHelperText>
        </>
      </CustomDialog>
    </div>
  )
}

AgregarNacionalidad.propTypes = {
  agregarNacionalidad: PropTypes.func,
  searchInput: PropTypes.string,
  setSearchInput: PropTypes.func,
}

export default AgregarNacionalidad
