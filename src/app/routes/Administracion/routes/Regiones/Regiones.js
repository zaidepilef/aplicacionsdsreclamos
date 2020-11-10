import React, { useState, useEffect } from 'react';
import ContainerHeader from 'components/ContainerHeader';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { getAllRegionesSearch } from 'api/Mantenedores/Regiones/regiones';
import { getAccessToken } from 'api/auth';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ListaRegiones from './components/ListaRegiones';
import Pagination from '@material-ui/lab/Pagination';
import AgregarRegion from './components/AgregarRegion';

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

const Regiones = ({ match }) => {

  const [regiones, setRegiones] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const token = getAccessToken();
  const [searchInput, setSearchInput] = useState('');
  const [sizeRegion, setSizeRegion] = useState(1);
  const [page, setPage] = React.useState(1);


  // const getRegionesApi = async () => {
  //     const response = await getAllRegionesSearch(token)
  //     if (response.error){
  //         notificationsApi("error", "Error al cargar las Regiones")
  //     }
  //     else{
  //         setRegiones(response.results)

  //     }

  // }

  const calculatePages = (count) => {
    const numeroPaginas = Math.ceil(count / 20);
    return numeroPaginas
  }


  const searchRegion = async (page) => {
    const data = await getAllRegionesSearch(token, searchInput, page)
    setRegiones(data.results);
    setLoading(false);
    const numberPages = calculatePages(data.count)
    setSizeRegion(numberPages)
  }


  useEffect(() => {
    searchRegion(page)
  }, [searchInput, page]) // eslint-disable-line react-hooks/exhaustive-deps



  const handleChangePage = (event, value) => {
    setPage(value);
  };


  return (
    <div className="app-wrapper">
      <ContainerHeader match={match} title="Regiones" />
      <AgregarRegion
        token={token}
        loading={loading}
        setLoading={setLoading}
        setRegiones={setRegiones}
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
                  <StyledTableCell align="center">Región ordinal</StyledTableCell>
                  <StyledTableCell align="center">Nombre</StyledTableCell>
                  <StyledTableCell align="center">Acciones</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {regiones.map((region, index) => (
                  <ListaRegiones
                    key={region.codigo_region}
                    region={region}
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
        <Pagination defaultPage={1} page={page} count={sizeRegion} onChange={handleChangePage} />
      </div>
    </div>
  );
}

export default Regiones;