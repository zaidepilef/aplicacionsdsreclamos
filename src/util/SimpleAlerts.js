import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function SimpleAlerts({ title = "Un titulo", subtitle = "" }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="info">
        Este reclamo no fue visado y se registró la siguiente observacion: {title}
      </Alert>
    </div>
  );
}
