import React from "react";
import Button from "@material-ui/core/Button";
import { Badge } from "reactstrap";
import { mdiDraw } from "@mdi/js";
import Icon from "@mdi/react";

const HeaderTable = ({ totalTask, submitClaim }) => {
  return (
    <div className="jr-btn-group d-flex flex-row-reverse align-items-center justify-content-between">
      <Button
        variant="contained"
        className="jr-btn jr-btn-lg bg-gray lighten-1 text-white"
        onClick={submitClaim}
        disabled
      >
        <Icon path={mdiDraw} size={0.8} color="#505050"/>
        <span>Reclamar</span>
      </Button>
      <h2 className="ml-2">
      <Badge color="primary">Total de Reclamos: <strong>{totalTask}</strong></Badge>
      </h2>
    </div>
  );
};

export default HeaderTable;
