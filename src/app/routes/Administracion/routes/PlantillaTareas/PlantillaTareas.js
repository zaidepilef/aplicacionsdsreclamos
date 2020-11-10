import React, { useState, useEffect } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import AgregarPlantillaTareas from './components/AgregarPlantillaTareas';
import TablaPlantillaTareas from './components/TablaPlantillaTareas';
import { getAccessToken } from 'api/auth';
import { getAllPlantillaTareasSearch, getAllPlantillaTareasPage } from 'api/Mantenedores/PlantillaTareas/plantillatareas';
import Pagination from '@material-ui/lab/Pagination';
import { getAllPlantillas } from 'api/Mantenedores/Plantillas/plantillas';
import { getAllTareas } from 'api/Mantenedores/Tarea/tarea';


const PlantillaTareas = ({ match }) => {

    const token = getAccessToken();
    const [loading, setLoading] = useState(false)
    const [plantillatareas, setPlantillatareas] = useState([])
    const [searchInput, setSearchInput] = useState('');
    const [page, setPage] = useState(1);
    const [sizePlantillaTarea, setSizePlantillaTarea] = useState(1);
    const [plantillas, setPlantillas] = useState([]);
    const [tareas, setTareas] = useState([]);

 

    const calculatePages = (count) => {
        const numeroPaginas = Math.ceil(count/20);
        return numeroPaginas
    }

    const searchPlantillaTarea = async () => {
        const data = await getAllPlantillaTareasSearch(token, searchInput)
        setPlantillatareas(data.results);
        setLoading(false);
        setSizePlantillaTarea(calculatePages(data.count));
    }

    const pagePlantillaTareas = async () => {
        const data = await getAllPlantillaTareasPage(token, page)
        setPlantillatareas(data.results);
        setLoading(false);
        setSizePlantillaTarea(calculatePages(data.count));
    }

    const PlantillasApi = async () => {
        const response = await getAllPlantillas(token)
        if (response.error) {
            setLoading(false)
            return
        }
        setPlantillas(
            response.data
        ) 
        setLoading(false)
    }

    const TareasApi = async () => {
        const response = await getAllTareas(token)
        if (response.error) {
            setLoading(false)
            return
        }
        setTareas(
            response.data
        ) 
        setLoading(false)
    }

    useEffect(() => {
        PlantillasApi()
        TareasApi()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        searchPlantillaTarea()
    }, [searchInput, loading]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        pagePlantillaTareas()
    }, [page]) // eslint-disable-line react-hooks/exhaustive-deps


    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Plantilla Tareas" />
            <AgregarPlantillaTareas
                plantillas={plantillas}
                tareas={tareas}
                token={token}
                loading={loading}
                setLoading={setLoading}
                setPlantillatareas={setPlantillatareas}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            /> 
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <TablaPlantillaTareas
                        plantillas={plantillas}
                        tareas={tareas}
                        plantillatareas={plantillatareas}
                        token={token}
                        loading={loading}
                        setLoading={setLoading}
                        setSearchInput={setSearchInput}
                        sizePlantillaTarea={sizePlantillaTarea}
                        page={page}
                        setPage={setPage}
                    />
                </div>
            </div>
            <div>
                <Pagination defaultPage={1} page={page} count={sizePlantillaTarea} onChange={handleChangePage} />
            </div>
        </div>
    );
}

export default PlantillaTareas;