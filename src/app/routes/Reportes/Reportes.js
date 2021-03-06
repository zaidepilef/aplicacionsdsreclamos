import React from "react";
import ContainerHeader from "components/ContainerHeader";
import CardBox from "components/CardBox";

const Reportes = ({ match }) => {
  return (
    <div className="app-wrapper">
      <div>
        <ContainerHeader match={match} title="Reportes" />
        <div className="row">
          <CardBox styleName="col-lg-12">
            <h1>Reportes</h1>
          </CardBox>
        </div>
      </div>
    </div>
  );
};

export default Reportes;
