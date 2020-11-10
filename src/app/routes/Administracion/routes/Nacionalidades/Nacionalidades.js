import PropTypes from 'prop-types'
import React, { useState, useEffect, memo } from 'react'
import ContainerHeader from 'components/ContainerHeader'
import {
  updateNacionalidad,
  deleteNacionalidad,
  addNacionalidad,
  getAllNacionalidadesSearch,
} from 'api/Mantenedores/Nacionalidades/nacionalidades'
import { getAccessToken } from 'api/auth'
import { notificationsApi } from 'util/Notifications'
import Pagination from '@material-ui/lab/Pagination'
import Swal from 'sweetalert2'
import AgregarNacionalidad from './components/AgregarNacionalidad'
import TablaNacionalidad from './components/TablaNacionalidad'
import CardBox from 'components/CardBox'

const Nacionalidades = memo(({ match }) => {
  const [refresh, setRefresh] = useState(true)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const token = getAccessToken()
  const [nacionalidades, setNacionalidades] = useState([])
  const [sizeNacionalidad, setSizeNacionalidad] = useState(1)
  const [page, setPage] = useState(1)
  const [searchInput, setSearchInput] = useState('')

  const calculatePages = (count) => {
    const numeroPaginas = Math.ceil(count/20);
    return numeroPaginas
  }

  const searchNacionalidad = async (page) => {
    setLoading(true)
    const data = await getAllNacionalidadesSearch(token, searchInput, page)
    if (data.error) {
      setError(true)
    }
    else {
      setNacionalidades(data.results)
      setSizeNacionalidad(calculatePages(data.count));
      setLoading(false);
    }
  }

  const agregarNacionalidad = async (data) => {
    setLoading(true)
    const response = await addNacionalidad(token, data)
    if (response.error) {
      return
    }
    setNacionalidades([...nacionalidades], response.data)
    setLoading(!loading)
    setRefresh(!refresh)
  }

  const editarNacionalidad = (data, id) => {
    updateNacionalidad(token, data, id)
      .then((response) => {
        notificationsApi('success', 'Editado Correctamente')
        setRefresh(!refresh)
      })
      .catch((err) => {
        notificationsApi('error', err)
      })
  }

  const eliminarNacionalidad = (id) => {
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
        deleteNacionalidad(token, id)
          .then((response) => {
            Swal.fire(
              'Eliminado!',
              'La Nacionalidad ha sido eliminada.',
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

  const handleChangePage = (event, value) => {
    setPage(value)
  }

  useEffect(() => {
    searchNacionalidad(page)
  }, [searchInput, refresh, page]) // eslint-disable-line react-hooks/exhaustive-deps

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
      <ContainerHeader match={match} title="Nacionalidades" />
      <AgregarNacionalidad
        agregarNacionalidad={agregarNacionalidad}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="row mb-md-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-12">
          <TablaNacionalidad
            nacionalidades={nacionalidades}
            setSearchInput={setSearchInput}
            editarNacionalidad={editarNacionalidad}
            eliminarNacionalidad={eliminarNacionalidad}
            loading={loading}
          />
        </div>
      </div>
      <div>
        <Pagination
          defaultPage={1}
          page={page}
          count={sizeNacionalidad}
          onChange={handleChangePage}
        />
      </div>
    </div>
  )
})

Nacionalidades.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Nacionalidades
