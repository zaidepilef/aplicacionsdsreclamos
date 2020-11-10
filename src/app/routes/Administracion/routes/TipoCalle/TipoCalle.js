import React, { useState, useEffect } from "react";
import ContainerHeader from "components/ContainerHeader";
import { getAllTipoCalleSearch} from "api/Mantenedores/TipoCalle/tipoCalle";
import { getAccessToken } from "api/auth";
import AgregarTipoCalle from "./components/AgregarTipoCalle";
import TablaTipoCalle from './components/TablaTipoCalle';
import CardBox from "components/CardBox";
import Pagination from '@material-ui/lab/Pagination';


const TipoCalle = React.memo(({ match }) => {
  const [refresh, setRefresh] = useState(true);
  const [tipoCalle, setTipoCalles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false)
  const [sizeTipoCalle, setSizeTipoCalle] = useState(1);
  const token = getAccessToken();

  //obtener todos los tipo-calle actuales.-
  const searchType = async (page) => {
    setLoading(true);
    const data = await getAllTipoCalleSearch(token,searchInput,page);
    if (data.error) {
      setError(true);
    }
    else {
      setTipoCalles(data.data.results);
      setSizeTipoCalle(calculatePages(data.data.count))
      setLoading(false);
    }

  }

  useEffect(() => {
    searchType(page)
  }, [searchInput, page, refresh])// eslint-disable-line react-hooks/exhaustive-deps


  const calculatePages = (count) => {
    const numeroPaginas = Math.ceil(count / 20);
    return numeroPaginas
  }

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  if (error) {
    return (
      <div className="app-wrapper">
        <div className="row">
          <CardBox styleName="col-lg-12">
            <h3 className="text-center">Error al cargar Datos :( ! </h3>
          </CardBox>
        </div>
      </div>
      );
  }

  return (
    <div className="app-wrapper">
      <ContainerHeader match={match} title="Tipo Calle" />
      <AgregarTipoCalle
        token={token}
        loading={loading}
        setLoading={setLoading}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setRefresh={setRefresh}
      />
      <div className="row mb-md-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <TablaTipoCalle
            tipoCalle={tipoCalle}
            token={token}
            loading={loading}
            setLoading={setLoading}
            sizeTipoCalle={sizeTipoCalle}
            page={page}
            setPage={setPage}
            setRefresh={setRefresh}
          />
        </div>
      </div>
      <div>
        <Pagination defaultPage={1} page={page} count={sizeTipoCalle} onChange={handleChangePage} />
      </div>
    </div>
  );
});

export default TipoCalle;
