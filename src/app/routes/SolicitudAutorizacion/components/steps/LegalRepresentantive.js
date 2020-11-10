import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const LegalRepresentantive = () => {
  const [addRepresentative, setAddRepresentative] = useState(false);

  return (
    <div className="app-wrapper">
      <div className="row">
        <div className="col-md-12 col-lg-12 col-12">
          <p className="subtitle h4"><b>NOTA:</b> La referencia a "Representante Legal Titular" tiene
          relación al rol que tendrá como Responsable de la solicitud de acreditación ante la 
          Superintendencia de Salud.</p>
        </div>
        <div className="col-md-5 col-lg-5 col-12">
          <TextField
            id="legal_representantive_rut"
            label="Rut Representante Legal"
            name="legal_representantive_rut"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>
        <div className="col-md-12 col-lg-12 col-12">
          <TextField
            id="legal_representantive_fullname"
            label="Nombre Completo"
            name="legal_representantive_fullname"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>
        <div className="col-12 col-md-8 ">
          <FormControl variant="outlined" fullWidth margin="normal" required>
            <InputLabel id="profession">Profesión</InputLabel>
            <Select
              labelId="profession"
              id="profession"
              // value={age}
              // onChange={handleChange}
              label="profession"
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
        <div class="w-100"></div>
        <div className="col-12 col-md-2 ">
          <FormControl variant="outlined" fullWidth margin="normal" required>
            <InputLabel id="demo-simple-select-outlined-label">Vía</InputLabel>
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
            <InputLabel id="demo-simple-select-outlined-label">
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
        <div className="col-md-6 col-12">
          <TextField
            id="phone"
            name="phone"
            label="Teléfono Fijo"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>
        <div className="col-md-6 col-12">
          <TextField
            name="cellphone"
            id="cellphone"
            label="Teléfono Celular"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>
        <div class="col-md-12 col-12 border-bottom mt-3 mb-3"></div>

        {/* Represenatnte adicional */}
        <div class="col-md-12 col-12">
          <FormControlLabel
            control={
              <Switch
                checked={addRepresentative}
                onChange={() => {
                  setAddRepresentative(!addRepresentative);
                }}
                name="add_representative"
                color="primary"
              />
            }
            label="Agregar otro Representante Legal"
          />
        </div>
        <div className="col-md-5 col-lg-5 col-12">
          <TextField
            id="legal_representantive_rut"
            label="Rut Representante Legal"
            name="legal_representantive_rut"
            variant="outlined"
            fullWidth
            margin="normal"
            disabled={!addRepresentative}
          />
        </div>
        <div className="col-md-12 col-lg-12 col-12">
          <TextField
            id="legal_representantive_fullname"
            label="Nombre Completo"
            name="legal_representantive_fullname"
            variant="outlined"
            fullWidth
            margin="normal"
            disabled={!addRepresentative}
          />
        </div>
        <div className="col-12 col-md-8 ">
          <FormControl
            variant="outlined"
            fullWidth
            margin="normal"
            disabled={!addRepresentative}
          >
            <InputLabel id="profession">Profesión</InputLabel>
            <Select
              labelId="profession"
              id="profession"
              // value={age}
              // onChange={handleChange}
              label="profession"
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
        <div class="w-100"></div>
        <div className="col-12 col-md-2 ">
          <FormControl
            variant="outlined"
            fullWidth
            margin="normal"
            disabled={!addRepresentative}
          >
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
            disabled={!addRepresentative}
          />
        </div>
        <div className="col-12 col-md-2">
          <TextField
            id="number_address"
            label="Número"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled={!addRepresentative}
          />
        </div>
        <div className="col-md-4 col-12">
          <FormControl
            variant="outlined"
            fullWidth
            margin="normal"
            disabled={!addRepresentative}
          >
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
          <FormControl
            variant="outlined"
            fullWidth
            margin="normal"
            disabled={!addRepresentative}
          >
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
          <FormControl
            variant="outlined"
            fullWidth
            margin="normal"
            disabled={!addRepresentative}
          >
            <InputLabel id="commune">Comuna</InputLabel>
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
        <div className="col-md-6 col-12">
          <TextField
            id="phone"
            name="phone"
            label="Teléfono Fijo"
            variant="outlined"
            fullWidth
            margin="normal"
            disabled={!addRepresentative}
          />
        </div>
        <div className="col-md-6 col-12">
          <TextField
            name="cellphone"
            id="cellphone"
            label="Teléfono Celular"
            variant="outlined"
            fullWidth
            margin="normal"
            disabled={!addRepresentative}
          />
        </div>
      </div>
    </div>
  );
};

export default LegalRepresentantive;
