import React, { useState, useEffect } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import { getAccessToken } from 'api/auth';
import AgregarViaTramitacion from './components/AgregarViaTramitacion'
import TablaViaTramitacion from './components/TablaViaTramitacion';
import Pagination from '@material-ui/lab/Pagination';
import { getAllViaTramitacionSearch } from 'api/Mantenedores/ViaTramitacion/viaTramitacion';
import { getAllTareas } from 'api/Tareas/tareas';
import CardBox from "components/CardBox";

const ViaTramitacion = React.memo(({ match }) => {

  const token = getAccessToken();
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [viasTramitacion, setViasTramitacion] = useState([])
  const [searchInput, setSearchInput] = useState('');
  const [page, setPage] = useState(1);
  const [sizeViaTramitacion, setSizeViaTramitacion] = useState(1);


  const calculatePages = (count) => {
    const numeroPaginas = Math.ceil(count / 20);
    return numeroPaginas
  }

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const searchViaTramitacion = async (page) => {
    setLoading(true);
    const data = await getAllViaTramitacionSearch(token, searchInput, page)
    if(data.error){
      setError(true);
    }
    else{
      setViasTramitacion(data.data.results);
      setSizeViaTramitacion(calculatePages(data.data.count));
      setLoading(false);
    }
  }

  const traerTareas = async () => {
    const tareasBD = await getAllTareas(token);
    setTareas(tareasBD.data.results);
  }

  useEffect(() => {
    traerTareas();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //traer todos las vias de tramitacion
  useEffect(() => {
    searchViaTramitacion(page);
  }, [searchInput, page, refresh]); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    return (
      <div className="app-wrapper" >
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
      <ContainerHeader match={match} title="Vía Tramitación" />
      <AgregarViaTramitacion
        token={token}
        loading={loading}
        setLoading={setLoading}
        viasTramitacion={viasTramitacion}
        setViasTramitacion={setViasTramitacion}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        tareas={tareas}
        setRefresh={setRefresh}
      />
      <div className="row mb-md-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <TablaViaTramitacion
            tareas={tareas}
            viasTramitacion={viasTramitacion}
            token={token}
            loading={loading}
            setLoading={setLoading}
            setSearchInput={setSearchInput}
            sizeViaTramitacion={sizeViaTramitacion}
            page={page}
            setPage={setPage}
            setRefresh={setRefresh}
          />
        </div>
      </div>
      <div>
        <Pagination defaultPage={1} page={page} count={sizeViaTramitacion} onChange={handleChangePage} />
      </div>
    </div>
  );
})

export default ViaTramitacion;