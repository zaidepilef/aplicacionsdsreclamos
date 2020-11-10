import React, { useState, useEffect, Fragment } from "react";

import ContainerHeader from "components/ContainerHeader";
import CardBox from "components/CardBox";
import TextField from "@material-ui/core/TextField";

import TablaFirmaMasiva from "./components/TablaFirmaMasiva";

import { tablaPlantillasAPI, signatureApi } from "api/Tareas/tareas";

import { notificationsApi } from "util/Notifications";
import { CustomDialog } from "util/CustomDialog";
import { array } from "prop-types";

const FirmaMasiva = props => {
  const { match } = props;

  const [signatures, setSignature] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reloading, setReloading] = useState(false);

  // Array con los ID seleccionados e enviados al Back
  const [arrayId, setArray] = useState([]);

  const [formFirma, setFormFirma] = useState({
    otp: ""
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => setIsOpen(false);

  useEffect(() => {
    setLoading(true);
    tablaPlantillasAPI().then(response => {
      setSignature(response);
      setError(false);
      setLoading(false);
    });
    setReloading(false);
  }, [reloading]);

  const handleChange = e => {
    setFormFirma({
      ...formFirma,
      [e.target.name]: e.target.value
    });
  };

  const appendIdSignature = (e, id) => {
    const { checked } = e.target;

    if (checked) {
      setArray([...arrayId, id]);
    } else {
      setArray(arrayId.filter(signature => signature !== id));
    }
  };

  const submitForm = async e => {
    e.preventDefault();

    if (!arrayId.length >= 1) {
      return notificationsApi("error", "Debes seleccionar al menos una firma");
    }

    const res = await signatureApi(formFirma, arrayId);


    if (res.error) {
      return notificationsApi("error", res.error.data.message);
    }

    notificationsApi("success", res.data.data.estado_documentos);
    setReloading(true);
    handeDialogClose();
  };

  return (
    <div className="app-wrapper">
      <ContainerHeader match={match} title="Firma Masiva" />
      <div className="row">
        <CardBox styleName="col-lg-12">
          <Fragment>
            <TablaFirmaMasiva
              handleDialogOpen={handleDialogOpen}
              signatures={signatures}
              setSignature={setSignature}
              loading={loading}
              error={error}
              appendIdSignature={appendIdSignature}
            />
          </Fragment>
        </CardBox>
      </div>
      {/* MODAL */}
      <CustomDialog
        isOpen={isOpen}
        handleClose={handeDialogClose}
        title="Confirmar"
        submitForm={submitForm}
      >
        <TextField
          autoFocus
          name="otp"
          label="OTP"
          variant="outlined"
          margin="dense"
          fullWidth
          value={formFirma.otp}
          onChange={handleChange}
        />
      </CustomDialog>
    </div>
  );
};

export default FirmaMasiva;
