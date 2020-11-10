import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardBox from "components/CardBox";
import DatosControl from "./components/DatosControl";
import AntecendetesDelReclamanteORepresentante from "./components/AntecendetesDelReclamanteORepresentante";
import AntecedentesPaciente from "./components/AntecedentesPaciente";
import AntecendetesPrestador from "./components/AntecendetesPrestador";
import AntecendetesReclamo from "./components/AntecendetesReclamo";
import AntecendetesAseguradora from "./components/AntecedentesAseguradora";

const useStyles = makeStyles(theme => ({
  divider: {
    padding: "6px ",
    backgroundColor: "#fff"
  },
  dividerBody: {
    paddingTop: "20px",
    backgroundColor: "#fff"
  }
}));

const Mask = ({ instanciaData }) => {
  const classes = useStyles();

  return (
    <div className="row">
      <CardBox styleName="col-lg-12">
        <Fragment>
          <DatosControl instanciaData={instanciaData} classes={classes} />
          <AntecendetesDelReclamanteORepresentante
            instanciaData={instanciaData}
            classes={classes}
          />
          <AntecedentesPaciente
            instanciaData={instanciaData}
            classes={classes}
          />
          <AntecendetesAseguradora
            instanciaData={instanciaData}
            classes={classes}
          />
          <AntecendetesPrestador
            instanciaData={instanciaData}
            classes={classes}
          />
          <AntecendetesReclamo
            instanciaData={instanciaData}
            classes={classes}
          />
        </Fragment>
      </CardBox>
    </div>
  );
};

export default Mask;
