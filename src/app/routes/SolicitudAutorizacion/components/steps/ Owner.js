import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const  Owner = () => {
  return (
    <div className="app-wrapper">
      <div className="row">
        <div className="col-md-5 col-lg-5 col-12">
          <TextField
            id="owner_rut"
            label="Rut Propietario"
            name="owner_rut"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>
        <div className="col-md-12 col-lg-12 col-12">
          <TextField
            id="owner_full_name"
            label="Nombre / Razón Social"
            name="owner_full_name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>
        <div className="col-md-8 col-lg-8 col-12">
          <TextField
            id="constitutive_act"
            label="Acto Constitivo"
            name="full_name"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />
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
      
      </div>
    </div>
  );
};

export default  Owner;
