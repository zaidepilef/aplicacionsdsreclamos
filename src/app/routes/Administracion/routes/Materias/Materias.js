import PropTypes from 'prop-types'
import React, { useState, useEffect, memo } from 'react'
import ContainerHeader from 'components/ContainerHeader'
import {
  updateMateria,
  deleteMateria,
  addMateria,
  getAllMateriasSearch,
} from 'api/Mantenedores/Materias/materias'
import { getAccessToken } from 'api/auth'
import { notificationsApi } from 'util/Notifications'
import { getAllProcesos } from 'api/Mantenedores/Procesos/procesos'
import Pagination from '@material-ui/lab/Pagination'
import Swal from 'sweetalert2'
import AgregarMateria from './components/AgregarMateria'
import TablaMateria from './components/TablaMateria'
import CardBox from 'components/CardBox'

const Materias = memo(({ match }) => {
  const [refresh, setRefresh] = useState(true)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const token = getAccessToken()
  const [procesos, setProcesos] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [materias, setMaterias] = useState([])
  const [sizeMateria, setSizeMateria] = useState(1)
  const [page, setPage] = useState(1)

  const calculatePages = (count) => {
    const numeroPaginas = Math.ceil(count/20);
    return numeroPaginas
  }

  const ProcesosApi = async () => {
    const response = await getAllProcesos(token)
    if (response.error) {
      setLoading(false)
      return
    }
    setProcesos(response.results)
    setLoading(false)
  }

  const agregarMateria = async (data) => {
    setLoading(true)
    const response = await addMateria(token, data)
    if (response.error) {
      return
    }
    setMaterias([...materias], response.data)
    setLoading(!loading)
    setRefresh(!refresh)
  }

  const editarMateria = (data, id) => {
    updateMateria(token, data, id)
      .then((response) => {
        notificationsApi('success', 'Editado Correctamente')
        setRefresh(!refresh)
      })
      .catch((err) => {
        notificationsApi('error', err)
      })
  }

  const eliminarMateria = (id) => {
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Esta accion no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, Eliminar',
    }).then((result) => {
      if (result.value) {
        deleteMateria(token, id)
          .then((response) => {
            Swal.fire('Eliminado!', 'La Materia ha sido eliminada.', 'success')
            setLoading(!loading)
            setRefresh(!refresh)
          })
          .catch((err) => {
            notificationsApi('error', err)
          })
      }
    })
  }

  const searchMateria = async (page) => {
    setLoading(true)
    const data = await getAllMateriasSearch(token, searchInput, page)
    if (data.error) {
      setError(true)
    }
    else {
      setMaterias(data.results)
      setSizeMateria(calculatePages(data.count));
      setLoading(false);
    }
  }

  useEffect(() => {
    ProcesosApi()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    searchMateria(page)
  }, [searchInput, refresh, page]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  if (error) {
    return (
      < div className="app-wrapper" >
        <div className="row">
          <CardBox styleName="col-lg-12">
            <h3 className="text-center">Error al cargar Datos :( ! </h3>
          </CardBox>
        </div>
      </div >
    )
  }

  return (
    <div className="app-wrapper">
      <ContainerHeader match={match} title="Materias" />
      <AgregarMateria
        agregarMateria={agregarMateria}
        procesos={procesos}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="row mb-md-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <TablaMateria
            materias={materias}
            procesos={procesos}
            setSearchInput={setSearchInput}
            editarMateria={editarMateria}
            eliminarMateria={eliminarMateria}
            loading={loading}
          />
        </div>
      </div>
      <div>
        <Pagination
          defaultPage={1}
          page={page}
          count={sizeMateria}
          onChange={handleChangePage}
        />
      </div>
    </div>
  )
})

Materias.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Materias
