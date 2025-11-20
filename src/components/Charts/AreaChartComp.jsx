import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

export default function AreaChartComp({ data, xKey, yKey }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey={yKey} stroke="#6366f1" fill="#c7d2fe" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
