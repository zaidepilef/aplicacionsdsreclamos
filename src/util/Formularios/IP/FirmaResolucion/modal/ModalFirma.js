import React from "react";
import { TextField, Button } from "@material-ui/core";
import { uploadFile } from 'api/Firma/firma';
import { notificationsApi } from "util/Notifications";

const ModalFirma = ({ register, handleSubmit, documentSelected }) => {

  const firmarDocumentos = async (data) => { 
    const datosForm = {...data, files:documentSelected, is_atendida: true};
    const firmar = await uploadFile(datosForm);
    if(firmar.data !== null){
      notificationsApi('success','Documento Firmado Exitosamente');
    }
    else {
      notificationsApi('error', 'Falla al firmar documento');
    }
  };


  
  return (
    <div className="row">
      <div className="col-md-12 col-12">
        <TextField
          id="otp"
          name="otp"
          label="OTP"
          variant="outlined"
          margin="normal"
          fullWidth
          inputRef={register}
        />
      </div>
      <div className="col-md-12 col-12">
        <TextField
          id="run"
          name="run"
          label="Rut Firmante"
          variant="outlined"
          margin="normal"
          fullWidth
          inputRef={register}
        />
      </div>
      <div className="col-md-12 col-12 mt-2 d-flex justify-content-center">
        <Button
          variant="contained"
          type="submit"
          size="small"
          className="btn bg-indigo jr-btn jr-btn-lg text-white"
          onClick={handleSubmit(firmarDocumentos)}
        >
          Firmar
        </Button>
      </div>
    </div>
  );
};

export default ModalFirma;
