import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
// APIS
import { completeInstanceApi } from "api/Instancias/instancia";
import { saveInstanceApi } from "api/Instancias/instancia";
// UTILS
import { notificationsApi } from "util/Notifications";
import { task_redirect } from "constants/constants";
// Manager: Renderiza los formularios dependiendo del tipo de admisibilidad y luego la etapa en camunda
import { Admissibility_Manager } from "util/Admissibility_Manager";

export default function Actions(props) {
  const { match, instanciaData, token, history } = props;
  const navbar_selected = useSelector(state => state.settings.navbar_selected);

  const Admissibility_Type = Admissibility_Manager(navbar_selected);
  const Current_Task = Admissibility_Type(instanciaData.slug_task_camunda);

  const handleSubmitForm = (data, event) => {
    event.preventDefault();

    // console.log(data);

    const { id } = event.nativeEvent.submitter;

    if (!id) {
      return alert("El formulario no tiene id");
    }

    switch (id) {
      case "saveForm":
        saveTaskSubmit(data);
        break;
      case "completeTask":
        completeTaskSubmit(data);
        break;
      case "back":
        history.push(`${task_redirect}`);
        break;
      default:
        alert("El id ingresado es incorrecto");
        break;
    }
  };

  const saveTaskSubmit = async data => {
    const res = await saveInstanceApi(token, instanciaData.id, data);

    if (!res.data) {
      return notificationsApi("error", res.error.response.data.message);
    } else {
      return notificationsApi("success", "Datos actualizados correctamente");
    }
  };

  const completeTaskSubmit = async data => {
    // console.log(data);
    const res = await completeInstanceApi(token, instanciaData.id, data);
    if (!res.data) {
      notificationsApi("error", res.error);
    } else {
      notificationsApi("success", res.data.message);
      history.push(`${task_redirect}`);
    }
  };

  return (
    <div className="row">
      <Current_Task
        match={match}
        instanciaForm={instanciaData}
        instanciaData={instanciaData}
        handleSubmitForm={handleSubmitForm}
        // Mientras
        token={token}
        history={history}
      />
    </div>
  );
}

Actions.propTypes = {
  match: PropTypes.object.isRequired,
  instanciaData: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  Admissibility_Manager: PropTypes.func.isRequired
};
