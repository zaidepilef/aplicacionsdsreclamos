import React, { useState, useEffect } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import AgregarGenero from './components/AgregarGenero';
import TablaGenero from './components/TablaGenero';
import { getAccessToken } from 'api/auth';
import { getAllGeneroSearch } from 'api/Mantenedores/Genero/genero'
import Pagination from '@material-ui/lab/Pagination';
import CardBox from "components/CardBox";


const Genero = React.memo(({ match }) => {

  const token = getAccessToken();
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [generos, setGeneros] = useState([])
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [sizeGenero, setSizeGenero] = useState(1);

  const calculatePages = (count) => {
    const numeroPaginas = Math.ceil(count / 20);
    return numeroPaginas
  }

  const searchGenero = async (page) => {
    setLoading(true)
    const data = await getAllGeneroSearch(token, searchInput, page)
    if (data.error) {
      setError(true)
    }
    else {
      setGeneros(data.data.results);
      setSizeGenero(calculatePages(data.data.count));
      setLoading(false);
    }

  }

  //traer todos los generos
  useEffect(() => {
    searchGenero(page)
  }, [searchInput, page, refresh]) // eslint-disable-line react-hooks/exhaustive-deps


  const handleChangePage = (value) => {
    setPage(value);
  };

  if (error) {
    return (
      < div className="app-wrapper" >
        <div className="row">
          <CardBox styleName="col-lg-12">
            <h3 className="text-center">Error al cargar Datos :( ! </h3>
          </CardBox>
        </div>
      </div >
    )
  }

  return (
    <div className="app-wrapper">
      <ContainerHeader match={match} title="Género" />
      <AgregarGenero
        token={token}
        loading={loading}
        setLoading={setLoading}
        setGeneros={setGeneros}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setRefresh={setRefresh}
      />
      <div className="row mb-md-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <TablaGenero
            generos={generos}
            token={token}
            loading={loading}
            setLoading={setLoading}
            setSearchInput={setSearchInput}
            sizeGenero={sizeGenero}
            setRefresh={setRefresh}
          />
        </div>
      </div>
      <div>
        <Pagination defaultPage={1} page={page} count={sizeGenero} onChange={handleChangePage} />
      </div>
    </div>
  );
})

export default Genero;