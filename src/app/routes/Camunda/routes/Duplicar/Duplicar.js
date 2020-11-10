import React, { useState, useEffect } from "react";
import ContainerHeader from "components/ContainerHeader";
import DataFilter from "./components/DataFilter";
import CardBox from "components/CardBox";
import ConsultaGeneralTable from "./components/ConsultaGeneralTable";
import { getInstanciasFilterApi } from "api/Instancias/instancia";
import { getAllProcesos } from "api/Proceso/proceso";
import { getAllUsers } from "api/Users/user";
import Pagination from "@material-ui/lab/Pagination";
import createParams from "util/createParams";
import Button from "@material-ui/core/Button";
import NewCustomDialog from "util/NewCustomDialog";
import DuplicarInstancia from "./components/Modals/DuplicarInstancia";
import { mdiContentCopy } from "@mdi/js";
import Icon from "@mdi/react";
import { useSelector } from "react-redux";

const Duplicar = ({ match }) => {
  const navbar_selected = useSelector(state => state.settings.navbar_selected);

  const [dataTable, setDataTable] = useState([]);

  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState({
    busqueda: "",
    page: 1
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [procesos, setProcesos] = useState([]);
  const token = localStorage.getItem("access");
  const [page, setPage] = useState(1);
  const [sizeTablePage, setSizeTablePage] = useState(1);
  const [selected, setSelected] = useState([]);

  const calculatePages = count => {
    const numeroPaginas = Math.ceil(count / 20);
    return numeroPaginas;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    setQuery({
      ...query,
      busqueda: `?finalizada=0&tipo_admisibilidad=${navbar_selected}&first_task=${true}`
    });
  }, [navbar_selected]);

  const handleDuplicateView = () => {
    setModalTitle("Duplicar Instancia");
    setModalContent(
      <DuplicarInstancia
        selected={selected}
        handeDialogClose={handeDialogClose}
      />
    );
    setIsOpen(true);
  };

  const handeDialogClose = () => {
    setIsOpen(false);
    setModalTitle("");
    setModalContent(null);
  };

  const handleChangePage = (event, page) => {
    setPage(page);
    setQuery({
      ...query,
      page
    });
  };

  //Trae los datos de la tabla de la bd
  useEffect(() => {
    if (query.busqueda) {
      const searchApi = async query => {
        setLoading(true);
        const data = await getInstanciasFilterApi(
          query.busqueda,
          query.page
        );
        if (data.hasOwnProperty("results")) {
          setDataTable(data.results);
          setSizeTablePage(calculatePages(data.count));
          setPage(query.page);
        } else {
          setError(true);
        }
        setLoading(false);
      };
      searchApi(query);
    }
  }, [query]);

  //Trae los procesos de la bd
  useEffect(() => {
    const getProcesos = async () => {
      const data = await getAllProcesos(token);

      if (!data.error) {
        setProcesos(data.data);
      } else {
        setError(true);
      }
    };
    getProcesos();
  }, [token]);

  //Traer todos los usuarios de la bd
  useEffect(() => {
    const getUsers = async () => {
      const data = await getAllUsers(token);

      if (!data.error) {
        setUsers(data.data);
      } else {
        setError(true);
      }
    };
    getUsers();
  }, [token]);

  if (error) {
    return (
      <div className="app-wrapper">
        <div className="row">
          <CardBox styleName="col-lg-12">
            <h3 className="text-center">Error al cargar Datos! </h3>
          </CardBox>
        </div>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <ContainerHeader match={match} title="Duplicar" />
      <DataFilter
        createParams={createParams}
        navbar_selected={navbar_selected}
        query={query}
        setQuery={setQuery}
        procesos={procesos}
        token={token}
      />
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12 mb-4 d-flex justify-content-end">
          <Button
            variant="contained"
            size="medium"
            color="primary"
            className="jr-btn jr-btn-lg text-white"
            onClick={handleDuplicateView}
            disabled={selected.length === 0}
          >
            <Icon path={mdiContentCopy} size={0.8} color="white" />
            <span>Duplicar</span>
          </Button>
          <NewCustomDialog
            size="xl"
            title={modalTitle}
            isOpen={isOpen}
            handleClose={handeDialogClose}
          >
            {modalContent}
          </NewCustomDialog>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ConsultaGeneralTable
            users={users}
            dataTable={dataTable}
            setDataTable={setDataTable}
            loading={loading}
            selected={selected}
            setSelected={setSelected}
          />
        </div>
      </div>
      <>
        <Pagination
          color="primary"
          page={page}
          count={sizeTablePage}
          onChange={handleChangePage}
          className="mt-1"
        />
      </>
    </div>
  );
};

export default Duplicar;
