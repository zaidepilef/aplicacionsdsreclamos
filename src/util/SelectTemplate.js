import React from "react";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button
} from "@material-ui/core";
import Icon from "@mdi/react";
import { mdiDraw } from "@mdi/js";

const SeleccionarPlantilla = ({
  plantillasDisponibles,
  handleDialogOpen,
  setPlantillaSeleccionada,
  plantillaSeleccionada
}) => {
  const handleChange = e => {
    console.log(e.target.value);
    const plant = plantillasDisponibles.results.filter(
      p => p.nombre_plantilla === e.target.value
    )[0];

    console.log("plantilla", plant);

    if (plant !== undefined) {
      setPlantillaSeleccionada(prevState => ({
        ...prevState,
        name: plant.nombre_plantilla,
        id: plant.plantilla
      }));
    }
  };

  return (
    <div className="row">
      <div className="col-md-10 col-12">
        <FormControl variant="outlined" className="w-100 mb-2">
          <InputLabel>Seleccione documento a Crear</InputLabel>
          <Select
            name="via_tramitacion"
            onClick={e => handleChange(e)}
            label="Seleccione documento a Crear"
          >
            <MenuItem value=""></MenuItem>
            {plantillasDisponibles.results.map(plantilla => (
              <MenuItem
                value={plantilla.nombre_plantilla}
                key={plantilla.id}
                id={plantilla.plantilla}
              >
                {plantilla.descripcion}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="col-md-2 col-2">
        <Button
          variant="contained"
          onClick={handleDialogOpen}
          className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white"
        >
          <Icon path={mdiDraw} size={0.8} color="white" />
          <span>Generar Plantilla</span>
        </Button>
      </div>
    </div>
  );
};

export default SeleccionarPlantilla;
