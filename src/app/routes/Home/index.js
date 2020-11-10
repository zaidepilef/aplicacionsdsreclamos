import React from 'react'
import ContainerHeader from 'components/ContainerHeader'
import CardBox from "components/CardBox";
import PieChartTotalInstancias from './components/charts/PieChartTotalInstancias'
import StatusCard from './components/cards/StatusCard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';
import TwoBarChart from './components/charts/TwoBarChart';
import SimpleLineChart from './components/charts/SimpleLineChart';
import RadarChartSimple from './components/charts/RadarChartSimple';
import CheckIcon from '@material-ui/icons/Check';
import SimpleAreaChart from './components/charts/SimpleAreaChart';


const Home = ({ match }) => {

  const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
  ]

  // if (!data) {
  //   return (
  //     <div className="app-wrapper">
  //       <ContainerHeader match={match} title="Inicio" />
  //       <div className="col d-flex justify-content-center">
  //         <h3>Error al cargar los datos del Dashboard</h3>
  //       </div>
  //     </div>
  //   )
  // }

  // if (!data.distReclamosPorRegionNivelNacional || !data.distCargaTrabajoPorTarea) {
  //   return (
  //     <div className="app-wrapper">
  //       <ContainerHeader match={match} title="Inicio" />
  //       <div className="col d-flex justify-content-center">
  //         <h3>No se han encontrado instancias para el Dashboard</h3>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="app-wrapper">
      <ContainerHeader match={match} title="Inicio" />
      <div className="row">
        {/* Grafico  Total Tareas */}
        <CardBox styleName="col-md-9 col-lg-9" heading="Datos Solicitudes General">
            <div className="col-md-12">
              <PieChartTotalInstancias colors={colors} />
            </div>
        </CardBox>

        <div className="col-md-3 col-lg-3 d-flex flex-column justify-content-between flex-wrap">
          <StatusCard title="10.254" subTitle=" Cantidad Total de Instancias" color='primary' colorTitle='white' colorSubTitle='white' icon={<AssignmentIcon style={{ fontSize: 70 }} />} />
          <StatusCard title="cespinoza" subTitle=" Usuario con mas Instancias" color='secondary' colorTitle='white' colorSubTitle='white' icon={<PersonIcon style={{ fontSize: 70 }} />} />
        </div>

        <CardBox styleName="col-md-12 col-lg-12" heading="Detalle reclamos Año 2020">
          <div className="row">
            <div className="col-md-12">
              <TwoBarChart />
            </div>
          </div>

        </CardBox>

        <CardBox styleName="col-md-12 col-lg-12" heading="Llenar Carátula Año 2020">
          <div className="row">
            <div className="col-md-12">
              <SimpleLineChart />
            </div>
          </div>
        </CardBox>

        <CardBox styleName="col-md-8 col-lg-8" heading="Evaluacion Respuesta por agente">
          <div className="row">
            <div className="col-md-12">
              <RadarChartSimple />
            </div>
          </div>
        </CardBox>
        <div className="col-md-4 col-lg-4 d-flex flex-column justify-content-between">
          <StatusCard title="10.254" subTitle=" Cantidad Total de Instancias Respondidas" color='primary' colorTitle='white' colorSubTitle='white' icon={<CheckIcon style={{ fontSize: 70 }} />} />
          <StatusCard title="cespinoza" subTitle=" Usuario con mas Respuestas" color='secondary' colorTitle='white' colorSubTitle='white' icon={<PersonIcon style={{ fontSize: 70 }} />} />
        </div>

        <CardBox styleName="col-md-12 col-lg-12" heading="Despacho Año 2020">
          <div className="row">
            <div className="col-md-12">
              <SimpleAreaChart />
            </div>
          </div>
        </CardBox>

      </div>
    </div>
  )
}

export default Home
