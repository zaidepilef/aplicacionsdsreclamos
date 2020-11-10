import React, { useState, useEffect } from "react";
import ContainerHeader from "components/ContainerHeader";
import DataFilter from "./components/DataFilter";
import CardBox from "components/CardBox";
import TableCamunda from "./components/TableCamunda";
import AsignarUsuario from "./components/Modals/AsignarUsuario";
import { getInstanciasFilterApi } from "api/Instancias/instancia";
import { getAllProcesos } from "api/Proceso/proceso";
import { getAllUsers } from "api/Users/user";
import { reasignarInstanciaCamunda } from "api/Instancias/instancia";
import Pagination from "@material-ui/lab/Pagination";
import createParams from "util/createParams";
import { notificationsApi } from "util/Notifications";

import NewCustomDialog from "util/NewCustomDialog";
import LinearProgress from "@material-ui/core/LinearProgress";

import Button from "@material-ui/core/Button";
import { mdiAccountConvert } from "@mdi/js";
import Icon from "@mdi/react";

const ReAsignar = ({ match }) => {
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

  const [reset, setReset] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);
  const [checkedAll, setCheckedAll] = useState(false);
  const [assign, setAssign] = useState(true);

  const calculatePages = count => {
    const numeroPaginas = Math.ceil(count / 20);
    return numeroPaginas;
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
    setReset(false);
    const searchApi = async query => {
      setLoading(true);
      const data = await getInstanciasFilterApi(
        query.busqueda,
        query.page
      );
      if (data.hasOwnProperty("results")) {
        const newData = data.results.map(d => {
          return {
            ...d,
            select: false
          };
        });
        setDataTable(newData);
        setSizeTablePage(calculatePages(data.count));
        setPage(query.page);
      } else {
        setError(true);
      }
      setLoading(false);
    };
    searchApi(query);
  }, [query, reset]);

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

  useEffect(() => {
    const data = dataTable.filter(data => data.select === true);
    if (data.length) {
      setAssign(false);
    } else {
      setAssign(true);
      setCheckedAll(false);
    }
  }, [dataTable]);

  const handleSubmitForm = async data => {
    setModalContent(
      <div>
        <h3 className="d-flex justify-content-center ">
          Espere mientras se asignan los reclamos...
        </h3>
        <LinearProgress />
      </div>
    );

    const { username } = data;
    let id_instancias = [];

    dataTable.filter(data =>
      data.select === true ? id_instancias.push(data.id) : null
    );

    const dataBody = {
      username,
      id_instancias
    };

    const res = await reasignarInstanciaCamunda(dataBody);

    if (res.error) {
      notificationsApi("error", res.error.message);
    } else {
      notificationsApi("success", res.data.message);
    }
    setReset(true);
    handeDialogClose(false);
  };

  const handleViewAsign = () => {
    setModalTitle("Re Asignar Instancia");
    setModalContent(
      <AsignarUsuario handleSubmitForm={handleSubmitForm} users={users} />
    );
    setIsOpen(true);
  };

  const handeDialogClose = () => {
    setIsOpen(false);
    setModalTitle("");
    setModalContent(null);
  };

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
      <ContainerHeader match={match} title="Re Asignar" />
      <DataFilter
        createParams={createParams}
        query={query}
        setQuery={setQuery}
        procesos={procesos}
        token={token}
      />
      <div className="jr-btn-group d-flex flex-row-reverse ">
        <Button
          variant="contained"
          disabled={assign}
          onClick={handleViewAsign}
          color="primary"
          className="jr-btn jr-btn-lg"
        >
          <Icon path={mdiAccountConvert} size={0.8} color="	#505050" />
          <span>Re Asignar</span>
        </Button>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <TableCamunda
            users={users}
            dataTable={dataTable}
            setDataTable={setDataTable}
            checkedAll={checkedAll}
            setCheckedAll={setCheckedAll}
            loading={loading}
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
      <NewCustomDialog
        size="xl"
        title={modalTitle}
        isOpen={isOpen}
        handleClose={handeDialogClose}
      >
        {modalContent}
      </NewCustomDialog>
    </div>
  );
};

export default ReAsignar;
