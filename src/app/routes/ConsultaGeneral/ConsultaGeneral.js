import React, { useState, useEffect } from "react";
import ContainerHeader from "components/ContainerHeader";
import DataFilter from "./components/DataFilter";
import CardBox from "components/CardBox";
import ConsultaGeneralTable from "./components/ConsultaGeneralTable";
import { getInstanciasFilterApi } from "api/Instancias/instancia";
import { getAllProcesos } from "api/Proceso/proceso";
import { getAllUsers } from "api/Users/user";
import Pagination from "@material-ui/lab/Pagination";
import createParams from "util/createParams";
import { getAllRegiones } from "api/Mantenedores/Regiones/regiones";
import { getAllTipoIngreso } from "api/TipoIngreso/tipoIngreso";


const ConsultaGeneral = ({ match }) => {
  const [dataTable, setDataTable] = useState([]);

  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState({
    busqueda: "action=general",
    page: 1
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [procesos, setProcesos] = useState([]);
  const token = localStorage.getItem("access");
  const [page, setPage] = useState(1);
  const [sizeTablePage, setSizeTablePage] = useState(1);
  const [region, setRegion] = useState([]);
  const [tipoIngreso, setTipoIngreso] = useState([]);

  const calculatePages = count => {
    const numeroPaginas = Math.ceil(count / 20);
    return numeroPaginas;
  };

  const handleChangePage = (event, page) => {
    setPage(page);
    setQuery({
      ...query,
      page
    });
  };

  //Trae los datos de la tabla de la bd
  useEffect(() => {
    const searchApi = async query => {
      setLoading(true);
      const data = await getInstanciasFilterApi(
        query.busqueda,
        query.page
      );
      if (data.hasOwnProperty("results")) {
        setDataTable(data.results);
        setSizeTablePage(calculatePages(data.count));
        setPage(query.page);
      } else {
        setError(true);
      }
      setLoading(false);
    };
    searchApi(query);
  }, [query]);

  //Trae los procesos de la bd
  useEffect(() => {
    const getProcesos = async () => {
      const data = await getAllProcesos(token);

      if (!data.error) {
        setProcesos(data.data);
      } else {
        setError(true);
      }
    };
    getProcesos();
  }, [token]);

  //Traer todos los usuarios de la bd
  useEffect(() => {
    const getUsers = async () => {
      const data = await getAllUsers(token);

      if (!data.error) {
        setUsers(data.data);
      } else {
        setError(true);
      }
    };
    getUsers();
  }, [token]);

  //traer todas las regiones de la bd
  useEffect(() => {
    const getRegion = async () => {
      const data = await getAllRegiones(token);
      if (!data.error) {
        setRegion(data.data);
      } else {
        setError(true);
      }
    };
    getRegion();
  }, [token]);

  // traer todos los tipos de ingreso de la bd
  useEffect(() => {
    const getTipoIngreso = async () => {
      const data = await getAllTipoIngreso();
      if (!data.error) {
        setTipoIngreso(data.data.results);
      } else {
        setError(true);
      }
    };
    getTipoIngreso();
  }, [token]);

  if (error) {
    return (
      <div className="app-wrapper">
        <div className="row">
          <CardBox styleName="col-lg-12">
            <h3 className="text-center">Error al cargar Datos! </h3>
          </CardBox>
        </div>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <ContainerHeader match={match} title="Consulta General" />
      <DataFilter
        region={region}
        createParams={createParams}
        query={query}
        setQuery={setQuery}
        procesos={procesos}
        token={token}
        tipoIngreso={tipoIngreso}
      />

      <div className="row">
        <div className="col-lg-12">
          <ConsultaGeneralTable
            users={users}
            dataTable={dataTable}
            setDataTable={setDataTable}
            loading={loading}
          />
        </div>
      </div>
      <>
        <Pagination
          color="primary"
          page={page}
          count={sizeTablePage}
          onChange={handleChangePage}
          className="mt-1"
        />
      </>
    </div>
  );
};

export default ConsultaGeneral;
