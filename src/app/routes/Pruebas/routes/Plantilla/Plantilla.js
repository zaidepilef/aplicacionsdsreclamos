import React from "react";
import ContainerHeader from "components/ContainerHeader";
import CardBox from "components/CardBox";

const Plantilla = ({ match }) => {
  return (
    <div>
      <ContainerHeader match={match} title="Plantilla" />
      <div className="row">
        <CardBox styleName="col-lg-12">
          <h1>Plantilla</h1>
        </CardBox>
      </div>
    </div>
  );
};

export default Plantilla;
