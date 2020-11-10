import React, { useState, useEffect } from "react";
import ContainerHeader from "components/ContainerHeader";
import SearchForm from "./components/SearchForm";
import TablaTareas from "./components/TablaTareas";

import CardBox from "components/CardBox";
import Pagination from "@material-ui/lab/Pagination";

import { getInstanciasFilterApi } from "api/Instancias/instancia";
import { claimInstanceApi } from "api/Instancias/instancia";

import { parseDate } from "util/parseFunctions";
import { notificationsApi } from "util/Notifications";
import { useSelector } from "react-redux";

import createParams from "util/createParams";
import { calculatePages } from "util/Paginator";

const ClaimInProcess = ({ match }) => {
  const navbar_selected = useSelector(state => state.settings.navbar_selected);
  const defaultQuery = {
    search: `action=task&finalizada=0&tipo_admisibilidad=${navbar_selected}`,
    page: 1
  };

  const [tasks, setTask] = useState([]);
  const [totalTask, setTotalTask] = useState(0);
  const [query, setQuery] = useState(defaultQuery);
  const [sizeTablePage, setSizeTablePage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [claimId, setClaimId] = useState([]);

  useEffect(() => {
    const searchApi = async () => {
      const data = await getInstanciasFilterApi(query.search, query.page);
      if (data.results) {
        setTotalTask(data.count);
        setTask(data.results);
        setSizeTablePage(calculatePages(data.count, 20));
        setError(false);
        setLoading(false);
      }
    };
    searchApi();
  }, [query]);

  const cleanQuery = () => {
    if (query.search === defaultQuery.search) return;
    setQuery(defaultQuery);
  };

  const appendIdInstance = (e, id) => {
    const { checked } = e.target;

    if (checked) {
      setClaimId([...claimId, id]);
    } else {
      setClaimId(claimId.filter(taskclaim => taskclaim !== id));
    }
  };

  const submitSearch = data => {
    const { fecha_problema, fecha_reclamo, fecha_limite } = data;

    // TODO: Crear una funcion y refactorizar el parseo de las fechas
    let newFechaProblema,
      newFechaReclamo,
      newFechaRespuesta = "";

    fecha_problema
      ? (newFechaProblema = parseDate(fecha_problema))
      : (newFechaProblema = undefined);
    fecha_reclamo
      ? (newFechaReclamo = parseDate(fecha_reclamo))
      : (newFechaReclamo = undefined);
    fecha_limite
      ? (newFechaRespuesta = parseDate(fecha_limite))
      : (newFechaRespuesta = undefined);

    data.fecha_problema = newFechaProblema;
    data.fecha_reclamo = newFechaReclamo;
    data.fecha_limite = newFechaRespuesta;

    const cleanData = createParams(data);

    if (cleanData)
      setQuery({
        search: `${defaultQuery.search}&${cleanData}`,
        page: defaultQuery.page
      });
    else setQuery(defaultQuery);
  };

  const handleChangePage = (event, page) => {
    if (page === query.page) return;
    setQuery({
      ...query,
      page
    });
  };

  const submitClaim = async e => {
    e.preventDefault();

    if (!claimId.length) {
      return notificationsApi("error", "Selecciona una instancia");
    }

    const res = await claimInstanceApi(claimId);

    if (res.error) {
      notificationsApi("error", res.error);
    } else {
      notificationsApi("success", res.data.message);
    }
  };

  return (
    <div>
      <ContainerHeader match={match} title="Reclamos En Proceso" />
      <SearchForm submitSearch={submitSearch} cleanQuery={cleanQuery} />
      <div className="row">
        <CardBox styleName="col-lg-12">
          <TablaTareas
            tasks={tasks}
            totalTask={totalTask}
            loading={loading}
            error={error}
            submitClaim={submitClaim}
            appendIdInstance={appendIdInstance}
          />
        </CardBox>
        <div className="col-12">
          <Pagination
            color="primary"
            page={query.page}
            count={sizeTablePage}
            onChange={handleChangePage}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
};

export default ClaimInProcess;
