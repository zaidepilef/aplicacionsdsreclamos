import React, { useState, useEffect } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import AgregarEstadoPlantilla from './components/AgregarEstadoPlantilla';
import TablaEstadoPlantilla from './components/TablaEstadoPlantilla';
import { getAccessToken } from 'api/auth';
import { getAllEstadoPlantillaSearch, getAllEstadoPlantillaPage } from 'api/Mantenedores/EstadoPlantilla/estadoplantilla'
import Pagination from '@material-ui/lab/Pagination';


const EstadoPlantilla = ({ match }) => {

    const token = getAccessToken();
    const [loading, setLoading] = useState(false)
    const [estadoplantilla, setEstadoplantilla] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [page, setPage] = useState(1);
    const [sizeEstadoPlantilla, setSizeEstadoPlantilla] = useState(1);

 
    const calculatePages = (count) => {
        const numeroPaginas = Math.ceil(count/20);
        return numeroPaginas
    }

    const searchEstadoPlantilla = async () => {
        const data = await getAllEstadoPlantillaSearch(token, searchInput)
        setEstadoplantilla(data.results);
        setLoading(false);
        setSizeEstadoPlantilla(calculatePages(data.count));
    }

    const pageEstadoPlantilla = async () => {
        const data = await getAllEstadoPlantillaPage(token, page)
        setEstadoplantilla(data.results);
        setLoading(false);
        setSizeEstadoPlantilla(calculatePages(data.count));
    }

    useEffect(() => {
        searchEstadoPlantilla()
    }, [searchInput, loading]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        pageEstadoPlantilla()
    }, [page]) // eslint-disable-line react-hooks/exhaustive-deps


    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Estados Plantilla" />
            <AgregarEstadoPlantilla 
                token={token}
                loading={loading}
                setLoading={setLoading}
                setEstadoplantilla={setEstadoplantilla}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <TablaEstadoPlantilla 
                        estadoplantilla={estadoplantilla}
                        token={token}
                        loading={loading}
                        setLoading={setLoading}
                        setSearchInput={setSearchInput}
                        sizeEstadoPlantilla={sizeEstadoPlantilla}
                        page={page}
                        setPage={setPage}
                    />
                </div>
            </div>
            <div>
                <Pagination defaultPage={1} page={page} count={sizeEstadoPlantilla} onChange={handleChangePage} />
            </div>
        </div>
    );
}

export default EstadoPlantilla;