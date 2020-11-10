import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { FormControl } from "@material-ui/core";
import { Controller } from "react-hook-form";

export const ControlledAutocomplete = ({
  options = [],
  renderInput,
  getOptionLabel,
  onChange: ignored,
  control,
  defaultValue,
  name,
  renderOption,
  children
}) => {
  return (
    <FormControl fullWidth>
      <Controller
        render={({ onChange, ...props }) => (
          <Autocomplete
            options={options}
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            renderInput={renderInput}
            onChange={(e, data) => onChange(data)}
            {...props}
          />
        )}
        onChange={([, data]) => data}
        defaultValue={defaultValue}
        name={name}
        control={control}
      />
      {children}
    </FormControl>
  );
};
