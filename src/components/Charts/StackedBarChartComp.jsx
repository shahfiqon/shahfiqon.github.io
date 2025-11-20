import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

export default function StackedBarChartComp({ data, xKey, stacks }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />

        {stacks.map((item, i) => (
          <Bar key={i} dataKey={item.dataKey} stackId="a" fill={item.color} />
        ))}

      </BarChart>
    </ResponsiveContainer>
  );
}
