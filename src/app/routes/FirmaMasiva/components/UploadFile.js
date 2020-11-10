import React, { useState, useCallback } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



import { useDropzone } from 'react-dropzone';

import { getAccessToken } from 'api/auth';
import { uploadFile } from 'api/Firma/firma';

const ListaFirmaMasiva = () => {

    const token = getAccessToken()

    const [formFirma, setFormFirma] = useState({
        otp: '',
        rut: '',
        purpose: '',
        pdf: null
    })

    const [image, setImage] = useState(null)



    const onDrop = useCallback(
        acceptedFiles => {
            const file = acceptedFiles[0]
            setImage({ file, preview: URL.createObjectURL(file) })
        }, [setImage]
    )




    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        acceptedFiles: ".pdf",
        noKeyboard: true,
        onDrop
    });


    const handleChange = e => {
        setFormFirma({
            ...formFirma,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault()

        uploadFile(token, formFirma, image.file, 1).then(response => {
            console.log(response)
        })
    }

    return (

        <div className="col-lg-12 col-sm-6 col-12 order-lg-6">
            <div className="jr-card">
                <form className="row" noValidate autoComplete="off" onSubmit={submitForm}>
                    <div className="col-md-3 col-12">
                        <TextField
                            id="outlined-error-helper-text"
                            name="otp"
                            label="OTP"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={formFirma.otp}
                            onChange={handleChange}

                        />
                    </div>

                    <div className="col-md-3 col-12">
                        <TextField
                            id="outlined-error-helper-text"
                            name="rut"
                            label="Rut"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={formFirma.rut}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="col-md-3 col-12">
                        <TextField
                            id="outlined-error-helper-text"
                            name="purpose"
                            label="Proposito"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            value={formFirma.purpose}
                            onChange={handleChange}

                        />
                    </div>
                    
                    <div className="col-md-3 col-12">
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <em>Arrastra el archivo pdf acá</em>
                        </div>
                    </div>
                    <div className="col align-self-center">
                        <Button
                            type="submit" variant="contained" color="primary"
                            className="jr-btn jr-btn-lg" >
                            Firmar
                    </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ListaFirmaMasiva
