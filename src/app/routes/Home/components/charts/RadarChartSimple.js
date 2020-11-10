import React from 'react';
import { PolarAngleAxis,  PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

const RadarChartSimple = () => {

  const data = [
    { usuario: 'cespinoza', instancias: 120, fullMark: 150},
    { usuario: 'bgallardo', instancias: 98, fullMark: 150 },
    { usuario: 'froman', instancias: 86, fullMark: 150 },
    { usuario: 'vgonzalez', instancias: 99, fullMark: 150 },
    { usuario: 'csanchez', instancias: 85, fullMark: 150 },
    { usuario: 'rromero', instancias: 65, fullMark: 150 },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart outerRadius={150} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="usuario" />
        <PolarRadiusAxis />
        <Radar name="Datos" dataKey="instancias" stroke="#3367d6" fill="#3367d6" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
export default RadarChartSimple;