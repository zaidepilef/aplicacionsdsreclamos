import React from "react";
import { TextField, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%"
    }
  }
}));

const Form = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <TextField
          label="Argumento de rechazo"
          name="argumentoRechazo"
          multiline
          rows="4"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default Form;
