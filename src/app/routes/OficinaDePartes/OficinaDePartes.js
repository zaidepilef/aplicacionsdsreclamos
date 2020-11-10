import React from "react";
import ContainerHeader from "components/ContainerHeader";
import CardBox from "components/CardBox";

const OficinaDePartes = ({ match }) => {
  return (
    <div className="app-wrapper">
      <div>
        <ContainerHeader match={match} title="Oficina de Partes" />
        <div className="row">
          <CardBox styleName="col-lg-12">
            <h1>Oficina de Partes</h1>
          </CardBox>
        </div>
      </div>
    </div>
  );
};

export default OficinaDePartes;
