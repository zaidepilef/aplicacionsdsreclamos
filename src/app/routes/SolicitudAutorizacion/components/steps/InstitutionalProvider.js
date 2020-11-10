import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#CBCBD5',
    color: 'rgb(39, 70, 77)',
  },
  body: {
    fontSize: 14,
  }
}))(TableCell);


const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    '&:hover': {
      backgroundColor: '#EDEDF3'
    }
  },
}))(TableRow);


const InstitutionalProvider = () => {
  const classes = useStyles();

  return (
    <div className="app-wrapper">
      <div className="row">
        <div className="col-md-4 col-lg-4 col-12">
          <TextField
            id="provider_rut"
            name="provider_rut"
            label="Rut Prestador"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>
        <div class="w-100"></div>
        <div className="col-md-12 col-lg-12 col-12">
          <TextField
            id="establishment_name"
            name="establishment name"
            label="Nombre Establecimiento"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>
        <div className="col-md-6 col-lg-6 col-12">
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="establishment_type">
              Tipo Establecimiento
            </InputLabel>
            <Select
              labelId="establishment_type"
              id="establishment_type"
              // value={age}
              // onChange={handleChange}
              label="Tipo Establecimiento"
              name="establishment_type"
              required
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
        <div className="col-md-6 col-lg-6 col-12">
          <FormControl variant="outlined" fullWidth margin="normal" required>
            <InputLabel id="dependency">Dependencia</InputLabel>
            <Select
              labelId="dependency"
              id="dependency"
              // value={age}
              // onChange={handleChange}
              label="Dependencia"
              name="dependency"
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

        <div className="col-md-8 col-12">
          <TextField
            id="website"
            label="Sitio Web"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </div>

        <div className="col-md-8 col-12">
          <TextField
            id="email"
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>

        <div className="col-md-6 col-12">
          <TextField
            id="phone"
            label="Teléfono"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
        </div>
        <div class="w-100"></div>
        <div className="col-md-6 col-lg-6 col-12">
          <FormControl variant="outlined" fullWidth margin="normal" required>
            <InputLabel id="accreditation_standard">
              Estándar de Acreditación
            </InputLabel>
            <Select
              labelId="accreditation_standard"
              id="accreditation_standard"
              // value={age}
              // onChange={handleChange}
              label="Estándar de Acreditación"
              name="accreditation_standard"
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
        <div className="col-md-6 col-lg-6 col-12">
          <FormControl variant="outlined" fullWidth margin="normal" required>
            <InputLabel id="complexity">Complejidad</InputLabel>
            <Select
              labelId="complexity"
              id="complexity"
              // value={age}
              // onChange={handleChange}
              label="Complejidad"
              name="complexity"
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
        <div className="col-md-12 col-lg-12 col-12 mt-3">
          <p className="h3 font-weight-bold title">Arancel</p>
          <p className="subtitle">Dadas las características, su arancel de acreditación corresponde a:</p>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Concepto</StyledTableCell>
                  <StyledTableCell align="center">Monto (UTM)</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow style={{ textDecoration: "none" }}>
                  <StyledTableCell align="center">Arancel</StyledTableCell>
                  <StyledTableCell align="center">
                    1.500
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default InstitutionalProvider;
