import React from "react";
import {
  TextField,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DateFnsUtils from "@date-io/date-fns";
import { withStyles } from "@material-ui/core/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "date-fns";

import { useForm, Controller } from "react-hook-form";

const styles = theme => ({
  root: {
    width: "100%",
    padding: "0 0 30px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

const SearchForm = props => {
  const { classes, submitSearch, cleanQuery} = props;

  const methods = useForm();

  const { handleSubmit, control } = methods;

  // TODO: CREAR COMPONENTES PARA EL SELECT Y LOS TIME PICKERS

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Ver más</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form className="row" onSubmit={handleSubmit(submitSearch)}>
            <div className="col-md-3 col-12">
              <Controller
                as={TextField}
                name="n_reclamos"
                label="N° Reclamo"
                control={control}
                variant="outlined"
                margin="normal"
                fullWidth
                autoComplete="off"
              />
            </div>
            <div className="col-md-3 col-12">
              <Controller
                as={TextField}
                name="rut"
                label="Rut"
                control={control}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </div>
            <div className="col-md-3 col-12">
              <Controller
                as={TextField}
                name="reclamo_afectado"
                label="Reclamante o Afectado"
                control={control}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </div>
            <div className="col-md-3 col-12">
              <div className="row">
                <div className="p-3 col-md-12 col-12">
                  <FormControl variant="outlined" className="w-100 mb-2">
                    <InputLabel>Estado</InputLabel>
                    <Controller
                      as={
                        <Select label="Estado">
                          <MenuItem value="">None</MenuItem>
                          <MenuItem value="simple">Demo 1</MenuItem>
                          <MenuItem value="medium">Demo 2</MenuItem>
                          <MenuItem value="complex">Demo 3</MenuItem>
                          <MenuItem value="allwords">Demo 4</MenuItem>
                        </Select>
                      }
                      name="wordlevel"
                      control={control}
                    />
                  </FormControl>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-12">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  as={
                    <KeyboardDatePicker
                      clearable
                      format="dd/MM/yyyy"
                      inputVariant="outlined"
                      label="Fecha Problema"
                      margin="normal"
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                      fullWidth
                    />
                  }
                  name="fecha_problema"
                  control={control}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="col-md-3 col-12">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  as={
                    <KeyboardDatePicker
                      clearable
                      format="dd/MM/yyyy"
                      inputVariant="outlined"
                      label="Fecha Reclamo"
                      margin="normal"
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                      fullWidth
                    />
                  }
                  name="fecha_reclamo"
                  control={control}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="col-md-3 col-12">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller
                  as={
                    <KeyboardDatePicker
                      clearable
                      format="dd/MM/yyyy"
                      inputVariant="outlined"
                      label="Fecha Limite"
                      margin="normal"
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                      fullWidth
                    />
                  }
                  name="fecha_limite"
                  control={control}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="col align-self-center">
            <Button
                onClick={cleanQuery}
                variant="contained"
                color="primary"
                className="jr-btn jr-btn-lg"
              >
                Limpiar
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="jr-btn jr-btn-lg"
              >
                Buscar
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default withStyles(styles)(SearchForm);
