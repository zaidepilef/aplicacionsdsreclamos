import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";

import ObservacionesForm from "./containers/ObservacionesForm";
import TablaObservaciones from "./containers/TablaObservaciones";
// API
import { getObservations, newObservation } from "api/Tareas/observaciones";
// UTIL
import { notificationsApi } from "util/Notifications";

const Observations = ({ id, nombre_task_camunda, tipo_admisibilidad }) => {
  const [dataObservation, setDataObservation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [observacionForm, setObservacion] = useState({
    tarea: nombre_task_camunda,
    tipo_admisibilidad,
    descripcion: ""
  });

  useEffect(() => {
    const fetchObservations = async () => {
      const res = await getObservations(id);
      if (res.error) {
        notificationsApi("error", res.error.message);
        setError(true);
        return;
      }
      setDataObservation(res.data);
      setLoading(false);
    };

    fetchObservations();
  }, [id]);

  const newObservationSubmit = async e => {
    e.preventDefault();

    if (observacionForm.descripcion === "") {
      return notificationsApi("error", "La observación no puede estar vacía");
    }
    const res = await newObservation(id, observacionForm);

    if (res.error) {
      return notificationsApi("error", "Error al añadir observación!");
    }

    setDataObservation([ res.data, ...dataObservation,]);
    notificationsApi("success", "Observación añadida!");
    setObservacion({
      ...observacionForm,
      descripcion: ""
    });
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <div className="jr-card">
            <ObservacionesForm
              newObservationSubmit={newObservationSubmit}
              observacionForm={observacionForm}
              setObservacion={setObservacion}
            />
          </div>
        </div>
        <div className="col-12">
          <div className="jr-card">
            <TablaObservaciones
              dataObservation={dataObservation}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ObservacionesForm.propTypes = {
  observacionForm: PropTypes.object.isRequired,
  setObservacion: PropTypes.func.isRequired
};

export default Observations;
