import React from 'react';
import {
  ScatterChart, XAxis, YAxis, ZAxis, Tooltip, Scatter, ResponsiveContainer
} from 'recharts';

export default function ScatterChartComp({ data, xKey, yKey }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ScatterChart>
        <XAxis dataKey={xKey} />
        <YAxis dataKey={yKey} />
        <ZAxis range={[60, 400]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={data} fill="#6366f1" />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
