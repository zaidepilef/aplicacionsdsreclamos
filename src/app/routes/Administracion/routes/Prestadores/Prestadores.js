import PropTypes from "prop-types";
import React, { useState, useEffect, memo } from "react";
import ContainerHeader from "components/ContainerHeader";
import { PrestadoresAPI } from "api/Mantenedores/Prestadores/prestadores";
import Pagination from "@material-ui/lab/Pagination";
import MenuTop from "./components/MenuTop";
import TablaPrestador from "./components/TablaPrestador";
import CardBox from "components/CardBox";

const Prestadores = memo(({ match }) => {
  const [prestadores, setPrestadores] = useState([]);
  const [query, setQuery] = useState({
    search: "",
    page: 1
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [sizeTablePage, setSizeTablePage] = useState(1);

  const calculatePages = count => {
    const numPages = Math.ceil(count / 20);
    return numPages;
  };

  useEffect(() => {
    const searchApi = async query => {
      setLoading(true);
      const data = await PrestadoresAPI(query.page, query.search);
      if (data.hasOwnProperty("results")) {
        setPrestadores(data.results);
        setSizeTablePage(calculatePages(data.count));
        setPage(query.page);
      } else {
        setError(true);
      }
      setLoading(false);
    };
    searchApi(query);
  }, [query]);

  const handleChangePage = (event, page) => {
    setPage(page);
    setQuery({
      ...query,
      page
    });
  };

    if (error) {
    return (
      <div className="app-wrapper">
        <div className="row">
          <CardBox styleName="col-lg-12">
            <h3 className="text-center">Error al cargar Datos</h3>
          </CardBox>
        </div>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <ContainerHeader match={match} title="Prestadores" />
      <MenuTop query={query} setQuery={setQuery} />
      <div className="row mb-md-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <TablaPrestador prestadores={prestadores} loading={loading} />
        </div>
      </div>
      <div>
        <Pagination
          color="primary"
          page={page}
          count={sizeTablePage}
          onChange={handleChangePage}
          className="mt-1"
        />
      </div>
    </div>
  );
});

Prestadores.propTypes = {
  match: PropTypes.object.isRequired
};

export default Prestadores;
