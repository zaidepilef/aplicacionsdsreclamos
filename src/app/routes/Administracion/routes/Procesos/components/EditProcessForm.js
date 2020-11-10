import React from 'react'
import Button from '@material-ui/core/Button';
import { TextFieldHook } from 'util/ReactHookForm'
import DialogContent from '@material-ui/core/DialogContent';

import { notificationsApi } from 'util/Notifications';
import { getAccessToken } from 'api/auth';
import { updateProcess } from 'api/Proceso/proceso';

import { useForm } from 'react-hook-form';

const EditProcessForm = ({ processes, process, setData, handleClose }) => {

    const token = getAccessToken();
    const { handleSubmit, control, errors } = useForm()

    const handleUpdate = async (data) => {

        const { id } = process

        const res = await updateProcess(token, id, data)

        if (res.error) {
            return notificationsApi('error', res.error)
        } else {
            setData({
                ...processes,
                results: processes.results.map(
                    result => result.id === id ? (result = res.data.response) : result
                )
            })
            handleClose()
            notificationsApi('success', res.data.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(handleUpdate)}>
            <DialogContent>
                <TextFieldHook
                    name="nombre"
                    label="Nombre"
                    control={control}
                    value={process.nombre}
                    errors={errors}
                    textHelp="Ingrese un Nombre"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                <TextFieldHook
                    name="descripcion"
                    label="Descripcion"
                    control={control}
                    value={process.descripcion}
                    errors={errors}
                    textHelp="Ingrese una Descripción"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
            </DialogContent>
            <Button type="submit" color="primary">
                Confirmar
            </Button>
        </form>
    )
}

export default EditProcessForm
