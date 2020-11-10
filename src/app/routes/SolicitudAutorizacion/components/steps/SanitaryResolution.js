import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import { es } from "date-fns/locale";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

const SanitaryResolution = () => {
  const [date, setDate] = useState("");
  return (
    <div className="app-wrapper">
      <div className="row">
        <div className="col-md-5 col-lg-5 col-12">
          <TextField
            id="resolution_number"
            label="Número Resolución/Certificado"
            name="resolution_number"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>
        <div className="col-md-5 col-lg-5 col-12">
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
            <KeyboardDatePicker
              clearable
              cancelLabel={"Cancelar"}
              clearLabel={"Limpiar"}
              invalidDateMessage={"Fecha Inválida"}
              format="dd/MM/yyyy"
              inputVariant="outlined"
              label="Fecha Desde"
              margin="normal"
              onChange={(e) => {
                setDate(e);
              }}
              KeyboardButtonProps={{
                "aria-label": "Seleccione Fecha",
              }}
              fullWidth
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className="col-12 col-md-10 ">
          <FormControl variant="outlined" fullWidth margin="normal" required>
            <InputLabel id="authority_name">
              Nombre Autoridad que dictó Resolución/Certificado
            </InputLabel>
            <Select
              labelId="authority_name"
              id="authority_name"
              // value={age}
              // onChange={handleChange}
              label="Nombre Autoridad"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-12 offset-md-1 col-md-10 mt-2">
          <FormControl component="ds_check">
            <RadioGroup aria-label="decree" name="decree">
              <FormControlLabel
                value="ds_141"
                control={<Radio color="primary"/>}
                label="Afecto al D.S. 141/2005 Minsal"
                margin="normal"
              />
              <FormControlLabel
              margin="normal" value="ds_151" control={<Radio color="primary"/>} label="Afecto al D.S. 152/2005 Minsal" />
              <FormControlLabel
                value="other"
                control={<Radio color="primary"/>}
                label={<TextField
                  id="other_text"
                  label="Otro"
                  name="other"
                  
                  fullWidth
                  margin="normal"
                  required
                />}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="col-12 col-md-12 mt-5">
        <p className="h3 font-weight-bold title">Persona Natural o Jurídica a quien
        se le entregó</p>         
        </div>
        <div className="col-md-5 col-lg-5 col-12">
          <TextField
            id="receiver_rut"
            label="Rut Persona Natural/Jurídica"
            name="receiver_rut"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>
        <div className="col-md-12 col-lg-12 col-12">
          <TextField
            id="receiver_fullname"
            label="Nombre Completo"
            name="receiver_fullname"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>
        <div class="w-100"></div>
        <div className="col-12 col-md-2 ">
          <FormControl variant="outlined" fullWidth margin="normal" required>
            <InputLabel id="via">Vía</InputLabel>
            <Select
              labelId="via"
              id="via"
              // value={age}
              // onChange={handleChange}
              label="Via"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-12 col-md-8">
          <TextField
            id="address"
            label="Direccion"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </div>
        <div className="col-12 col-md-2">
          <TextField
            id="number_address"
            label="Número"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </div>
        <div className="col-md-4 col-12">
          <FormControl variant="outlined" fullWidth margin="normal" required>
            <InputLabel id="region">Región</InputLabel>
            <Select
              labelId="region"
              id="region"
              // value={age}
              // onChange={handleChange}
              label="Region"
              name="region"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="col-md-4 col-12">
          <FormControl variant="outlined" fullWidth margin="normal" required>
            <InputLabel id="province">Provincia</InputLabel>
            <Select
              labelId="province"
              id="province"
              // value={age}
              // onChange={handleChange}
              label="province"
              name="province"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-md-4 col-12">
          <FormControl variant="outlined" fullWidth margin="normal" required>
            <InputLabel id="commune">
              Comuna
            </InputLabel>
            <Select
              labelId="commune"
              id="commune"
              // value={age}
              // onChange={handleChange}
              label="commune"
              name="commune"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default SanitaryResolution;
