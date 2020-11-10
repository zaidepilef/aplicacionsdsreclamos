import React, { useState, useEffect } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { getAllComunasSearch } from 'api/Mantenedores/Comunas/comunas';
import { getAccessToken } from 'api/auth';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ListaComunas from './components/ListaComunas';
import { getAllProvincias } from 'api/Mantenedores/Provincias/provincias'; 
import Pagination from '@material-ui/lab/Pagination'; 
import AgregarComuna from './components/AgregarComuna'


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

const Comunas = ({ match }) => {

    const [loading, setLoading] = useState(false)
    const classes = useStyles();
    const token = getAccessToken(); 
    const [provincias, setProvincias] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const [comunas, setComunas] = useState([])
    const [sizeComuna, setSizeComuna] = useState(1)
    const [page, setPage] = useState(1); 

    const calculatePages = (count) => {
        const numeroPaginas = Math.ceil(count/20);
        return numeroPaginas
    }

    const ProvinciasApi = async () => {
        const response = await getAllProvincias(token)
        if (response.error) {
            setLoading(false)
            return
        }
        setProvincias(
            response.data
        )
        setLoading(false)
    }


    const searchComuna = async (page) => {
        const data = await getAllComunasSearch(token, searchInput,page)
        setComunas(data.results);
        const numberPages = calculatePages(data.count)
        setSizeComuna(numberPages)
        setLoading(false);
    }


    useEffect(() => {
        ProvinciasApi()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        searchComuna(page)
    }, [searchInput,page])// eslint-disable-line react-hooks/exhaustive-deps

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Comunas" />
            <AgregarComuna
                provincias={provincias} 
                token={token}
                loading={loading}
                setLoading={setLoading}
                setComunas={setComunas}
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
                                    <StyledTableCell align="center">Provincia</StyledTableCell>
                                    <StyledTableCell align="center">Nombre</StyledTableCell>
                                    <StyledTableCell align="center">Acciones</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {comunas.map((comuna, index) => (
                                    <ListaComunas
                                        key={comuna.codigo_comuna}
                                        comuna={comuna} 
                                        provincias={provincias}
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
                <Pagination defaultPage={1} page={page} count={sizeComuna} onChange={handleChangePage} />
            </div>
        </div>

    );
}

export default Comunas;