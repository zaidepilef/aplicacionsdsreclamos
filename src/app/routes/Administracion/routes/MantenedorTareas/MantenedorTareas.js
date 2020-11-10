import React, { useState, useEffect } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import AgregarTarea from './components/AgregarTarea';
import TablaTarea from './components/TablaTarea';
import { getAccessToken } from 'api/auth';
import { getAllTareaSearch, getAllTareaPage } from 'api/Mantenedores/Tarea/tarea';
import Pagination from '@material-ui/lab/Pagination';
import { getAllProcesos } from 'api/Proceso/proceso';


const Tareas = ({ match }) => {

    const token = getAccessToken();
    const [loading, setLoading] = useState(false)
    const [tareas, setTareas] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [page, setPage] = useState(1);
    const [sizeTarea, setSizeTarea] = useState(1);
    const [procesos, setProcesos] = useState([]);


    const calculatePages = (count) => {
        const numeroPaginas = Math.ceil(count/20);
        return numeroPaginas
    }

    const searchTarea = async () => {
        const data = await getAllTareaSearch(token, searchInput)
        setTareas(data.results);
        setLoading(false);
        setSizeTarea(calculatePages(data.count));
    }

    const pageTarea = async () => {
        const data = await getAllTareaPage(token, page)
        setTareas(data.results);
        setLoading(false);
        setSizeTarea(calculatePages(data.count));
    }

    const ProcesosApi = async () => {
        const response = await getAllProcesos(token)
        if (response.error) {
            setLoading(false)
            return
        }
        setProcesos(
            response.data
        ) 
        setLoading(false)
    }

    useEffect(() => {
        ProcesosApi()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        searchTarea()
    }, [searchInput, loading]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        pageTarea()
    }, [page]) // eslint-disable-line react-hooks/exhaustive-deps


    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Tareas" />
            <AgregarTarea
                procesos={procesos} 
                token={token}
                loading={loading}
                setLoading={setLoading}
                setTareas={setTareas}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <TablaTarea
                        procesos={procesos}
                        tareas={tareas}
                        token={token}
                        loading={loading}
                        setLoading={setLoading} 
                        setSearchInput={setSearchInput}
                        sizeTarea={sizeTarea}
                        page={page}
                        setPage={setPage}
                    />
                </div>
            </div>
            <div>
                <Pagination defaultPage={1} page={page} count={sizeTarea} onChange={handleChangePage} />
            </div>
        </div>
    );
}

export default Tareas;