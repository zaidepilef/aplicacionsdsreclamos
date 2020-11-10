import React, { useState, useEffect } from "react";
import TablaCarpetaDigital from "./components/TablaCarpetaDigital";
import CardBox from "components/CardBox";
import AdjuntarDocumento from "./components/AdjuntarDocumento";

import { getAccessToken } from "api/auth";
import { getDigitalFoldier } from "api/Tareas/tareas";
import DropZone from "util/DropZone";

import { notificationsApi } from "util/Notifications";

const Expedient = ({ instancia, itemid_dspace }) => {
  const [dataFolders, setDataFolder] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reset, setReset] = useState(false);

  const token = getAccessToken();

  // Mientras
  const dataBody = {
    repositorio: "dspace",
    itemid_dspace
  };

  useEffect(() => {
    const getDigitalFolderApi = async () => {
      const response = await getDigitalFoldier(dataBody);

      if (response.error) {
        setError(true);
        setLoading(false);
        return notificationsApi("error", "Error al cargar el expediente");
      }
      setDataFolder(response.data);
      setError(false);
      setLoading(false);
      setReset(false)
    };
    getDigitalFolderApi();
  }, [instancia, reset]);

  return (
    <div className="row">
      <CardBox styleName="col-lg-12">
        <TablaCarpetaDigital
          dataFolders={dataFolders}
          loading={loading}
          error={error}
          token={token}
          setReset={setReset}
        />
      </CardBox>
      <CardBox styleName="col-lg-12">
        <DropZone instancia={instancia} />
      </CardBox>
    </div>
  );
};

export default Expedient;
