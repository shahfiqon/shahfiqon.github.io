import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

export default function LineChartComp({ data, xKey, yKey }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={yKey} stroke="#10b981" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}
