import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
const COLORS = ['#3b82f6','#06b6d4','#60a5fa','#f97316'];
export default function ImpactDonut({ data, nameKey='name', valueKey='value', height=220 }){
return (
<ResponsiveContainer width="100%" height={height}>
<PieChart>
<Tooltip />
<Pie data={data} dataKey={valueKey} nameKey={nameKey} innerRadius={50} outerRadius={80} paddingAngle={4}>
{data.map((d, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
</Pie>
</PieChart>
</ResponsiveContainer>
);
}