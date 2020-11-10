import React from 'react'
import { PDFViewer } from "@react-pdf/renderer";
import { RenderPdf } from './RenderPdf';
const VistaPreviaPdf = (props) => {

  const {plantilla} = props
  const PlantillaSeleccionada = RenderPdf(plantilla.filename); 

  return (
    <>
      <PDFViewer width="92%" height="500">
        
        <PlantillaSeleccionada /> 
        
      </PDFViewer>
    </>
  )
}

export default VistaPreviaPdf
