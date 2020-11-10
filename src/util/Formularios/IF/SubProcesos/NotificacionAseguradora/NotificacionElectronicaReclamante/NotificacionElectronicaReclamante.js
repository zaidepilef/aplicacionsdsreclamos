import React, { useState, useEffect } from "react";
import CardBox from "components/CardBox";
import BotonAcciones from "util/BotonAcciones";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { getAccessToken } from "api/auth";
import { getDigitalFoldier } from "api/Tareas/tareas";
// upload
import { DespachaDocumentacionElectronicaAPI } from "api/Instancias/instancia";
import { notificationsApi } from "util/Notifications";

import TablaDocumentacion from "./components/TablaDocumentacion";
import ChipForm from "util/ChipForm";
import CKEditorForm from "util/CKEditorForm"

const NotificacionElectronicaReclamante = ({
  instanciaForm,
  handleSubmitForm
}) => {
  const [dataFolders, setDataFolder] = useState([]);
  const [documentSelected, setDocSelected] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingSend, setLoadingSend] = useState(false);

  //
  const [arrayEmail, setArrayEmail] = useState([]);
  const [body, setBody] = useState(
    "<h2>Titulo</h2>\n" +
      "<p>Subtitulo</p>\n" +
      "\n" +
      "<ul>\n" +
      "        <li>Cuerpo</li>\n" +
      "        <li>...</li>\n" +
      "</ul>\n" +
      "\n" +
      "<p><em>Pie de página</em></p>\n"
  );

  const { handleSubmit } = useForm();
  const token = getAccessToken();

  // ? El repositorio debería cambiar en un futuro

  useEffect(() => {
    const getDigitalFolderApi = async () => {
      const dataBody = {
        repositorio: "dspace",
        itemid_dspace: instanciaForm.itemid_dspace
      };
      const res = await getDigitalFoldier(dataBody);

      if (res.error) {
        setError(true);
        setLoading(false);
        return notificationsApi("error", "Error al cargar el expediente");
      }
      setDataFolder(res.data);
      setError(false);
      setLoading(false);
    };
    getDigitalFolderApi();
  }, [token, instanciaForm]);

  const appendDocument = (e, uuid) => {
    const { checked } = e.target;

    if (checked) {
      setDocSelected(prevState => [...prevState, uuid]);
    } else {
      setDocSelected(prevState =>
        prevState.filter(document => document !== uuid)
      );
    }
  };

  const sendPDF = async e => {
    e.preventDefault();

    let errors = {};

    if (!documentSelected.length || !arrayEmail.length || !body) {
      if (!documentSelected.length) errors.documentSelected = true;
      if (!arrayEmail.length) errors.arrayEmail = true;
      if (!body) errors.body = true;
    }

    const data = {
      url_pdf: documentSelected,
      destinatario: arrayEmail,
      body
    };

    if (Object.entries(errors).length) {
      return notificationsApi(
        "error",
        "Faltan datos para despachar los documentos"
      );
    }

    setLoadingSend(true);
    const res = await DespachaDocumentacionElectronicaAPI(data);

    if (res.error) {
      notificationsApi("error", res.error.message);
    } else {
      notificationsApi("success", res.data.message);
    }
    setLoadingSend(false);
  };

  return (
    <>
      <CardBox styleName="col-lg-12">
        <TablaDocumentacion
          dataFolders={dataFolders}
          appendDocument={appendDocument}
          error={error}
          loading={loading}
          token={token}
        />
      </CardBox>
      <CardBox styleName="col-lg-12">
        <>
          <div className="row">
            <ChipForm arrayEmail={arrayEmail} setArrayEmail={setArrayEmail} />
          </div>
          <CKEditorForm
            body={body}
            setBody={setBody}
            sendPDF={sendPDF}
            loadingSend={loadingSend}
          />
        </>
      </CardBox>

      <CardBox styleName="col-lg-12">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <BotonAcciones styleName="col-12 mt-4" disabled={loadingSend} />
        </form>
      </CardBox>
    </>
  );
};

NotificacionElectronicaReclamante.propTypes = {
  instanciaForm: PropTypes.object.isRequired,
  handleSubmitForm: PropTypes.func.isRequired
};

export default NotificacionElectronicaReclamante;
