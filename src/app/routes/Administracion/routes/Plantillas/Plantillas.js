import React, { useState, useEffect } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import AgregarPlantilla from './components/AgregarPlantilla';
import TablaPlantillas from './components/TablaPlantillas';
import { getAccessToken } from 'api/auth';
import { getAllPlantillasSearch, getAllPlantillasPage } from 'api/Mantenedores/Plantillas/plantillas';
import Pagination from '@material-ui/lab/Pagination';
import { getAllEstadoPlantilla } from 'api/Mantenedores/EstadoPlantilla/estadoplantilla';
import CardBox from "components/CardBox";

const Plantillas = React.memo(({ match }) => {

  const token = getAccessToken();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [plantillas, setPlantillas] = useState([])
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [sizePlantilla, setSizePlantilla] = useState(1);
  const [estados, setEstados] = useState([]);


  const calculatePages = (count) => {
    const numeroPaginas = Math.ceil(count / 20);
    return numeroPaginas
  }


  useEffect(() => {
    const EstadosApi = async () => {
      const response = await getAllEstadoPlantilla(token)
      if (response.error) {
        setLoading(false)
        return
      }
      setEstados(
        response.data
      )
      setLoading(false)
    }
    EstadosApi()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const searchPlantilla = async () => {
      setLoading(true);
      const data = await getAllPlantillasSearch(token, searchInput)
      if (data.results) {
        setPlantillas(data.results);
        setLoading(false);
        setSizePlantilla(calculatePages(data.count));
      }
      else {
        setError(true);
      }

    }
    searchPlantilla()
  }, [searchInput]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const pagePlantilla = async () => {
      setLoading(true);
      const data = await getAllPlantillasPage(token, page)
      if (data.results) {
        setPlantillas(data.results);
        setLoading(false);
        setSizePlantilla(calculatePages(data.count));
      }
      else {
        setError(true);
      }
    }
    pagePlantilla()
  }, [page]) // eslint-disable-line react-hooks/exhaustive-deps


  const handleChangePage = (event, value) => {
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
      <ContainerHeader match={match} title="Plantillas" />
      <AgregarPlantilla
        estados={estados}
        token={token}
        setLoading={setLoading}
        setPlantillas={setPlantillas}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="row mb-md-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <TablaPlantillas
            estados={estados}
            plantillas={plantillas}
            token={token}
            loading={loading}
            setLoading={setLoading}
            setSearchInput={setSearchInput}
            sizePlantilla={sizePlantilla}
            page={page}
            setPage={setPage}
            setPlantillas={setPlantillas}
          />
        </div>
      </div>
      <div>
        <Pagination defaultPage={1} page={page} count={sizePlantilla} onChange={handleChangePage} />
      </div>
    </div>
  );
})

export default Plantillas;