import React, { useState, useEffect } from 'react';
import { getAccessToken } from 'api/auth';
import { getAllTipoReclamoSearch } from 'api/Mantenedores/TipoReclamo/tipoReclamo'
import ContainerHeader from 'components/ContainerHeader';
import AgregarTipoReclamo from './components/AgregarTipoReclamo';
import TablaTipoReclamo from './components/TablaTipoReclamo';
import Pagination from '@material-ui/lab/Pagination';
import CardBox from "components/CardBox";


const TipoReclamo = React.memo(({ match }) => {

  const token = getAccessToken();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [tipoReclamo, setTipoReclamo] = useState([])
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [sizeTipoReclamo, setSizeTipoReclamo] = useState(1);


  const calculatePages = (count) => {
    const numeroPaginas = Math.ceil(count / 20);
    return numeroPaginas
  }

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const searchTipoReclamo = async (page) => {
    setLoading(true);
    const data = await getAllTipoReclamoSearch(token, searchInput, page)
    if (data.error) {
      setError(true);
    }
    else {
      setTipoReclamo(data.data.results);
      setSizeTipoReclamo(calculatePages(data.data.count));
      setLoading(false);
      
    }
  }

  useEffect(() => {
    searchTipoReclamo(page);
  }, [searchInput, refresh, page]); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    return (
      < div className="app-wrapper" >
        <div className="row">
          <CardBox styleName="col-lg-12">
            <h3 className="text-center">Error al cargar Dato</h3>
          </CardBox>
        </div>
      </div >
    )
  }

  return (
    <div className="app-wrapper">

      <ContainerHeader match={match} title="Tipo Reclamo" />
      <AgregarTipoReclamo
        token={token}
        loading={loading}
        setLoading={setLoading}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setRefresh={setRefresh}
      />
      <div className="row mb-md-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <TablaTipoReclamo
            tipoReclamo={tipoReclamo}
            token={token}
            loading={loading}
            setLoading={setLoading}
            setSearchInput={setSearchInput}
            sizeTipoReclamo={sizeTipoReclamo}
            page={page}
            setPage={setPage}
          />
        </div>
      </div>
      <div>
        <Pagination defaultPage={1} page={page} count={sizeTipoReclamo} onChange={handleChangePage} />
      </div>
    </div>
  );
})

export default TipoReclamo;