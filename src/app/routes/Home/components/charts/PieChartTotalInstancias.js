import React, { useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer, Sector
} from 'recharts';



const PieChartTotalInstancias = (props) => {


  const { colors } = props;

  const data = [
    { "nombre_camunda": "Completar datos de la caratula", "value": 4 },
    { "nombre_camunda": "Analizar admisibilidad", "value": 1 },
    { "nombre_camunda": "Elabora oficio de derivacion a Prestador", "value": 1 },
    { "nombre_camunda": "Elaborar traslado al prestador", "value": 0 },
    { "nombre_camunda": "Elabora oficio de derivacion a otra entidad", "value": 1 },
    { "nombre_camunda": "Elaborar solicitud de antecedentes al reclamante", "value": 1 },
    { "nombre_camunda": "Elabora Respuesta directa", "value": 1 },
    { "nombre_camunda": "Despacha Documentacion Fisica a Entidad Externa", "value": 0 },
    { "nombre_camunda": "Despacha Documentacion Electronica a Entidad Externa", "value": 0 },
    { "nombre_camunda": "Espera Respuesta de Entidad Externa-Archivo Transitorio", "value": 0 },
    { "nombre_camunda": "Analiza Respuesta de Entidad Externa", "value": 0 },
    { "nombre_camunda": "Controlar Notificacion a Entidad Externa", "value": 0 },
    { "nombre_camunda": "Despacha Documentacion Fisica al reclamante", "value": 0 },
    { "nombre_camunda": "Despacha Documentacion Electronica al reclamante", "value": 0 },
    { "nombre_camunda": "Espera Respuesta Reclamante - Archivo Transitorio", "value": 0 },
    { "nombre_camunda": "Control Notificacion al Reclamante", "value": 0 },
    { "nombre_camunda": "Analiza Respuesta del Reclamante", "value": 0 },
    { "nombre_camunda": "Analiza posible recurso", "value": 0 },
    { "nombre_camunda": "Elabora Resolucion", "value": 1 },
    { "nombre_camunda": "Visa y/o registra observaciones a la resolucion", "value": 0 }
  ];


const radian = Math.PI / 180;
/* const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * radian);
  const y = cy + radius * Math.sin(-midAngle * radian);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}; */

const renderActiveShape = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent } = props;
  const sin = Math.sin(-radian * midAngle);
  const cos = Math.cos(-radian * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${payload.nombre_camunda}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Porcentaje ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const [activeIndex, setActiveIndex] = useState(0);

const onPieEnter = (data, index) => {
  setActiveIndex(index)
}



return (
  <ResponsiveContainer minHeight={350} minWidth={350}>
    <PieChart>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={data}
        outerRadius={100}
        fill="#8884d8"
        onMouseEnter={onPieEnter}
        dataKey='value'
      >
        {
          data.map((entry, index) => <Cell fill={colors[index % colors.length]} key={index} />)
        }
      </Pie>

    </PieChart>
  </ResponsiveContainer>
);

}

export default PieChartTotalInstancias;