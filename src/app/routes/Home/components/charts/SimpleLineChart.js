import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const SimpleLineChart = () => {

  const data = [
    {name: 'En', instancias: 100, acumulado: 100,},
    {name: 'Feb', instancias: 55, acumulado: 155 },
    {name: 'Mar', instancias: 70, acumulado: 225 },
    {name: 'Abr', instancias: 64, acumulado: 289 },
    {name: 'May', instancias: 86, acumulado: 375 },
    {name: 'Jun', instancias: 65, acumulado: 440 },
    {name: 'Jul', instancias: 125, acumulado: 565 },
    {name: 'Agos', instancias: 54, acumulado: 619 },
    {name: 'Sept', instancias: 33, acumulado: 652 },
    {name: 'Oct', instancias: 88, acumulado: 740 },
    {name: 'Nov', instancias: 189, acumulado: 929 },
    {name: 'Dic', instancias: 67, acumulado: 996 },
  ];

  return (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={data}
               margin={{top: 10, right: 0, left: 0, bottom: 0}}>
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid strokeDasharray="3 3"/>
      <Tooltip/>
      <Legend/>
      <Line type="monotone" dataKey="instancias" stroke="#3367d6"/>
      <Line type="monotone" dataKey="acumulado" stroke="#E91E63"/>
    </LineChart>
  </ResponsiveContainer>
);
}

export default SimpleLineChart