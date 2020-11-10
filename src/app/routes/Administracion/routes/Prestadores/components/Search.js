import PropTypes from "prop-types";
import React from "react";
import TextField from "@material-ui/core/TextField";

const Search = props => {
  const { query, setQuery } = props;

  const generarBusqueda = e => {
    setQuery({ page: 1, search: e.target.value });
  };

  return (
    <TextField
      label="Buscar"
      variant="outlined"
      margin="dense"
      onChange={generarBusqueda}
      value={query.search}
    />
  );
};

Search.propTypes = {
  query: PropTypes.object.isRequired,
  setQuery: PropTypes.func.isRequired
};

export default Search;
