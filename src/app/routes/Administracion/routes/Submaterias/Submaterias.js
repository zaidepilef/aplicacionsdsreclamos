import PropTypes from 'prop-types'
import React, { useState, useEffect, memo } from 'react'
import ContainerHeader from 'components/ContainerHeader'
import {
  updateSubmateria,
  deleteSubmateria,
  addSubmateria,
  getAllSubmateriasSearch,
} from 'api/Mantenedores/Submaterias/submaterias'
import { getAccessToken } from 'api/auth'
import { notificationsApi } from 'util/Notifications'
import { getAllMateriass } from 'api/Mantenedores/Materias/materias'
import Pagination from '@material-ui/lab/Pagination'
import Swal from 'sweetalert2'
import AgregarSubmateria from './components/AgregarSubmateria'
import TablaSubmateria from './components/TablaSubmateria'
import CardBox from 'components/CardBox'

const Submaterias = memo(({ match }) => {
  const [refresh, setRefresh] = useState(true)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const token = getAccessToken()
  const [materias, setMaterias] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [submaterias, setSubmaterias] = useState([])
  const [sizeSubmateria, setSizeSubmateria] = useState(1)
  const [page, setPage] = useState(1)

  const calculatePages = (count) => {
    const numeroPaginas = Math.ceil(count/20);
    return numeroPaginas
  }

  const MateriasApi = async () => {
    const response = await getAllMateriass(token)
    if (response.error) {
      setLoading(false)
      return
    }
    setMaterias(response.data)
    setLoading(false)
  }

  const agregarSubmateria = async (data) => {
    setLoading(true)
    const response = await addSubmateria(token, data)
    if (response.error) {
      return
    }
    setSubmaterias([...submaterias], response.data)
    setLoading(!loading)
    setRefresh(!refresh)
  }

  const editarSubmateria = (data, id) => {
    updateSubmateria(token, data, id)
      .then((response) => {
        notificationsApi('success', 'Editado Correctamente')
        setRefresh(!refresh)
      })
      .catch((err) => {
        notificationsApi('error', err)
      })
  }

  const eliminarSubmateria = (id) => {
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
        deleteSubmateria(token, id)
          .then((response) => {
            Swal.fire(
              'Eliminado!',
              'La Submateria ha sido eliminada.',
              'success'
            )
            setLoading(!loading)
            setRefresh(!refresh)
          })
          .catch((err) => {
            notificationsApi('error', err)
          })
      }
    })
  }

  const searchSubmateria = async (page) => {
    setLoading(true)
    const data = await getAllSubmateriasSearch(token, searchInput, page)
    if (data.error) {
      setError(true)
    }
    else {
      setSubmaterias(data.results)
      setSizeSubmateria(calculatePages(data.count));
      setLoading(false);
    }
  }

  useEffect(() => {
    MateriasApi()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    searchSubmateria(page)
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
      <ContainerHeader match={match} title="Submaterias" />
      <AgregarSubmateria
        agregarSubmateria={agregarSubmateria}
        materias={materias}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="row mb-md-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <TablaSubmateria
            submaterias={submaterias}
            materias={materias}
            setSearchInput={setSearchInput}
            editarSubmateria={editarSubmateria}
            eliminarSubmateria={eliminarSubmateria}
            loading={loading}
          />
        </div>
      </div>
      <div>
        <Pagination
          defaultPage={1}
          page={page}
          count={sizeSubmateria}
          onChange={handleChangePage}
        />
      </div>
    </div>
  )
})

Submaterias.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Submaterias
