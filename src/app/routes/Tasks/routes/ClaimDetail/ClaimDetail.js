import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ContainerHeader from "components/ContainerHeader";
import ScrollableTabsButtonAuto from "./components/ScrollableTabsButtonAuto";
import Spinner from "constants/Spinner/Spinner";
import ClaimHeader from "./ClaimHeader";

// APIS
import { getInstanciaApi } from "api/Instancias/instancia";

// TABS
import Actions from "./tabs/Actions/Actions";
import Mask from "./tabs/Mask/Mask";
import Expedient from "./tabs/Expedient/Expedient";
import Observations from "./tabs/Observations/Observations";
import History from "./tabs/History/History";

// UTILS
import { getAccessToken } from "api/auth";

const TabContainer = props => {
  return <div style={{ padding: 20 }}>{props.children}</div>;
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const ClaimDetail = props => {
  const { match, history } = props;

  const { id } = match.params;

  const token = getAccessToken();

  const [instanciaData, setInstanciaData] = useState({});

  const [loading, setLoading] = useState(true);

  const [tabSelect, setTab] = useState(0);

  useEffect(() => {
    setLoading(true);
    getInstanciaApi(token, id).then(response => {
      setInstanciaData(response);
      setLoading(false);
    });
  }, [token, id]);

  if (loading) {
    return (
      <div className="col d-flex justify-content-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <ContainerHeader match={match} title="Detalle Tareas" />
      <div className="row mb-md-3">
        <div className="col-12">
          <ClaimHeader
            instanciaData={instanciaData}
            setInstanciaData={setInstanciaData}
          />
        </div>
        <div className="col-12">
          <ScrollableTabsButtonAuto tabSelect={tabSelect} setTab={setTab} />
        </div>
        <div className="w-100">
          {tabSelect === 0 && (
            <TabContainer>
              <Actions
                match={match}
                instanciaData={instanciaData}
                token={token}
                history={history}
                // rodolfo
              />
            </TabContainer>
          )}
          {tabSelect === 1 && (
            <TabContainer>
              <Mask instanciaData={instanciaData} />
            </TabContainer>
          )}
          {tabSelect === 2 && (
            <TabContainer>
              <Expedient
                instancia={instanciaData.id}
                itemid_dspace={instanciaData.itemid_dspace}
              />
            </TabContainer>
          )}
          {tabSelect === 3 && (
            <TabContainer>
              <Observations
                id={id}
                nombre_task_camunda={instanciaData.nombre_task_camunda}
                tipo_admisibilidad={
                  instanciaData.process_definition.tipo_admisibilidad
                }
              />
            </TabContainer>
          )}
          {tabSelect === 4 && (
            <TabContainer>
              <History id_instancia={instanciaData.id} />
            </TabContainer>
          )}
        </div>
      </div>
    </>
  );
};

export default ClaimDetail;
