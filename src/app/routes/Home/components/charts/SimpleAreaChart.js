import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const SimpleAreaChart = () => {

  const data = [
    { name: 'En', instancias: 100 },
    { name: 'Feb', instancias: 55 },
    { name: 'Mar', instancias: 70 },
    { name: 'Abr', instancias: 64 },
    { name: 'May', instancias: 86 },
    { name: 'Jun', instancias: 65 },
    { name: 'Jul', instancias: 125 },
    { name: 'Agos', instancias: 54 },
    { name: 'Sept', instancias: 33 },
    { name: 'Oct', instancias: 88 },
    { name: 'Nov', instancias: 189 },
    { name: 'Dic', instancias: 67 },
  ];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type='monotone' dataKey='instancias' stroke='#3367d6' fill='#3367d6' />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default SimpleAreaChart;