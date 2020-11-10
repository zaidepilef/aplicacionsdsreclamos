import React, { useState, useEffect } from 'react'
import ContainerHeader from 'components/ContainerHeader';
import TablaProcesos from './components/TablaProcesos';
import SectionHeaders from '../components/SectionHeader/SectionHeaders'
import Pagination from '@material-ui/lab/Pagination';
import { getAccessToken } from 'api/auth';
import { getProcess } from 'api/Proceso/proceso';

const Procesos = ({ match }) => {

    const token = getAccessToken();
    const [data, setData] = useState({
        count: 0,
        results: []
    })
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [sizeProceso, setSizeProcess] = useState(1)

    useEffect(() => {
        const handleProcess = async () => {
            setLoading(true)
            const response = await getProcess(token, query, page)

            if (response.error) {
                setError(true)
                setLoading(false)
            } else {
                setData(response.data)
                setLoading(false)
                const numberPages = calculatePages(response.data.count)
                setSizeProcess(numberPages)
            }
        }
        handleProcess()
    }, [token, query, page])

    const calculatePages = (count) => {
        const numeroPaginas = Math.ceil(count/20);
        return numeroPaginas
    }


    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Procesos" />
            <div className="row mb-md-3">
                <SectionHeaders
                    setQueryInput={setQuery}
                />
            </div>
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <TablaProcesos
                        loading={loading}
                        error={error}
                        processes={data}
                        setData={setData}
                    />
                </div>
            </div>
            <div>
                <Pagination
                    defaultPage={1}
                    page={page}
                    count={sizeProceso}
                    onChange={(e, value) => setPage(value)}
                />
            </div>
        </div>
    )
}

export default Procesos