import React from "react";
import { Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { Controller } from "react-hook-form";

const SelectRHF = ({
  name,
  label,
  options,
  valueMenu,
  error,
  control,
  selectOption,
  handleChange,
  children
}) => {
  return (
    <FormControl variant="outlined" margin="normal" fullWidth error={error}>
      <InputLabel>{label}</InputLabel>
      <Controller
        as={
          <Select value={selectOption} onChange={handleChange} label={label}>
            <MenuItem value=""></MenuItem>
            {options.map(data => (
              <MenuItem value={data.id} key={data.id}>
                {data[valueMenu]}
              </MenuItem>
            ))}
          </Select>
        }
        name={name}
        control={control}
      />
      {children}
    </FormControl>
  );
};

export default SelectRHF;
