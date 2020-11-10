import React, { useEffect } from "react";
import CardBox from "components/CardBox";
import { home_redirect } from "constants/constants";

const Default = ({history}) => {
  useEffect(() => {
    history.push(`${home_redirect}`);
  }, [history]);


  // POR AHORA REDIRECCIONA, HAY QUE DARLE PERMISOS MÁS ADELANTE

  return (
    <CardBox styleName="col-lg-12">
      <h1 className="text-center">No hay plantilla disponible</h1>
    </CardBox>
  );
};

export default Default;
