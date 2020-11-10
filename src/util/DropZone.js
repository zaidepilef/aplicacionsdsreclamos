import React, { useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import PropTypes from 'prop-types';
import { URL_GLOBAL } from '../constants/constants';

const DropZone = ({instancia}) => {

  const [files, setFiles] = useState([]);
  const token = localStorage.getItem('access');

  return (
    <div>
      <FilePond
        files={files}
        allowMultiple={true}
        maxFiles={3}
        onupdatefiles={setFiles}
        labelIdle='Suelta archivos aquí o <span class="filepond--label-action">haga clic para cargar</span>'
        labelInvalidField="Documento Invalido"
        labelFileLoading="Cargando.."
        labelFileLoadError="Error al Cargar Documento"
        labelFileProcessing="Subiendo"
        labelFileProcessingAborted="Carga de Archivo Abortada"
        labelFileProcessingError="Error al Subir Documento"
        labelFileProcessingComplete="Archivo Subido Correctamente"
        labelTapToUndo="Click para Eliminar"
        labelTapToCancel="Click para Cancelar"
        server={
          {
              url: URL_GLOBAL,
              process: {
                url:'/api/registro/documentacion/fisica',
                  headers: {
                      'Authorization': `JWT ${token}`
                  },
                  ondata: (formData) => {
                    formData.append('instancia',instancia);
                    return formData;
                  }
              }
          }
      }
      />
    </div>
  )
}

DropZone.propTypes = {
  instancia: PropTypes.string.isRequired
}
export default DropZone;
