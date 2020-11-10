import React, { useState, useEffect } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { getAllSexos, getAllSexosSearch } from 'api/Mantenedores/Sexos/sexos';
import { getAccessToken } from 'api/auth';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { notificationsApi } from 'util/Notifications';
import ListaSexos from './components/ListaSexos';
import Pagination from '@material-ui/lab/Pagination';
import AgregarSexo from './components/AgregarSexo'


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

const Sexos = ({match}) => {

    const [loading, setLoading] = useState(false)
    const classes = useStyles();
    const token = getAccessToken();
    const [searchInput, setSearchInput] = useState('');
    const [sexos, setSexos] = useState([])
    const [sizeSexo, setSizeSexo] = useState(1)
    const [page, setPage] = useState(1);


    const getSexosApi = async () => {
        const response = await getAllSexos(token, page)
        if (response.error){
            notificationsApi("error", "Error al cargar los Sexos")
        }
        else{
            setSexos(response.results)
            const numberPages = calculatePages(response.count)
            setSizeSexo(numberPages)
        }

    }

    const calculatePages = (count) => {
        const numeroPaginas = Math.ceil(count/20);
        return numeroPaginas
    }
   
    

    const searchSexo = async ()=>{
        const data = await getAllSexosSearch(token, searchInput)
        setSexos(data.results);
        setLoading(false);
    }

    
    useEffect(() => {
        searchSexo()
    }, [searchInput, loading]) // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => {
        getSexosApi()
    }, [page])// eslint-disable-line react-hooks/exhaustive-deps


    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return ( 
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Sexos" />
            <AgregarSexo 
                token={token}
                loading={loading}
                setLoading={setLoading}
                setSexos={setSexos}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            
            <div className="row mb-md-3">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow> 
                                    <StyledTableCell align="center">Sexo</StyledTableCell>
                                    <StyledTableCell align="center">Acciones</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sexos.map((sexo, index) => (
                                    <ListaSexos
                                        key={sexo.desc_sexo}
                                        sexo={sexo} 
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
                <Pagination defaultPage={1} page={page} count={sizeSexo} onChange={handleChangePage} />
            </div> 
            
        </div>
        
          
    );
}
 
export default Sexos;