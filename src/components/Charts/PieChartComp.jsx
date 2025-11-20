import React from 'react';
import {
  PieChart, Pie, Tooltip, Cell, ResponsiveContainer
} from 'recharts';

const COLORS = ["#6366f1", "#14b8a6", "#f59e0b", "#ef4444", "#3b82f6"];

export default function PieChartComp({ data, nameKey, valueKey }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Tooltip />
        <Pie
          data={data}
          dataKey={valueKey}
          nameKey={nameKey}
          fill="#6366f1"
          outerRadius={100}
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
