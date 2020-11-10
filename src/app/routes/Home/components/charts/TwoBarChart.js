import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const TwoBarChart = () => {

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
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}
        margin={{ top: 0, right: -10, left: -10, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#03275b" />
        <YAxis yAxisId="right" orientation="right" stroke="#E91E63" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="right" dataKey="instancias" fill="#E91E63" />
        <Bar yAxisId="left" dataKey="acumulado" fill="#3367d6" />
      </BarChart>
    </ResponsiveContainer>
  );
}
export default TwoBarChart;