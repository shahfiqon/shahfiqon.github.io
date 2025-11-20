import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';

const COLORS = ["#3b82f6", "#10b981", "#f43f5e", "#f97316"];

export default function DonutChartComp({ data, nameKey, valueKey }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Tooltip />
        <Pie
          data={data}
          dataKey={valueKey}
          nameKey={nameKey}
          innerRadius={60}
          outerRadius={100}
          paddingAngle={4}
          label
        >
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
