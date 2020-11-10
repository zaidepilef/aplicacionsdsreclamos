import React, { useState, useEffect } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { getAllProvinciasPage, getAllProvinciasSearch } from 'api/Mantenedores/Provincias/provincias';
import { getAccessToken } from 'api/auth';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { notificationsApi } from 'util/Notifications';
import ListaProvincias from './components/ListaProvincias';
import { getAllRegiones } from 'api/Mantenedores/Regiones/regiones'; 
import Pagination from '@material-ui/lab/Pagination';
import AgregarProvincia from './components/AgregarProvincia';


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#CBCBD5',
        color: 'rgb(39, 70, 77)',
    },
    body: {
        fontSize: 14,
    }
}))(TableCell);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


const Provincias = ({ match }) => {

    const [loading, setLoading] = useState(false)
    const classes = useStyles();
    const token = getAccessToken();
    const [regiones, setRegiones] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const [provincias, setProvincias] = useState([])
    const [sizeProvincia, setSizeProvincia] = useState(1)
    const [page, setPage] = React.useState(1);


    const getProvinciasApi = async () => {
        const response = await getAllProvinciasPage(token, page)
        if (response.error) {
            notificationsApi("error", "Error al cargar las Comunas")
        }
        else {
            setProvincias(response.results)
            const numberPages = calculatePages(response.count)
            setSizeProvincia(numberPages)
        }
    }


    const calculatePages = (count) => {
        const numeroPaginas = Math.ceil(count/20);
        return numeroPaginas
    }


    const RegionesApi = async () => {
        const response = await getAllRegiones(token)
        if (response.error) {
            setLoading(false)
            return
        }
        setRegiones(
            response.data
                )
        setLoading(false)        
    }
  

    const searchProvincia = async () => {
        const data = await getAllProvinciasSearch(token, searchInput)
        setProvincias(data.results);
        setLoading(false);
    }

    useEffect(() => {
        RegionesApi()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        getProvinciasApi()
    }, [page, loading]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        searchProvincia()
    }, [searchInput]) // eslint-disable-line react-hooks/exhaustive-deps
    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Provincias" />
            <AgregarProvincia
                regiones={regiones} 
                token={token}
                loading={loading}
                setLoading={setLoading}
                setProvincias={setProvincias}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />  

            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Código</StyledTableCell>
                                    <StyledTableCell align="center">Región</StyledTableCell>
                                    <StyledTableCell align="center">Nombre</StyledTableCell>
                                    <StyledTableCell align="center">Acciones</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {provincias.map((provincia,index) => (
                                    <ListaProvincias
                                        key={index}
                                        provincia={provincia}
                                        regiones={regiones} 
                                        setLoading={setLoading}
                                        loading={loading}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
            <div>
                <Pagination defaultPage={1} page={page} count={sizeProvincia} onChange={handleChangePage} />
            </div>
             
        </div>


    );
}

export default Provincias;