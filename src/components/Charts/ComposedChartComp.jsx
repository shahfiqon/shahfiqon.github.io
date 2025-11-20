import React from 'react';
import {
  ComposedChart, Bar, Line, Area, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

export default function ComposedChartComp({ data, xKey, barKey, lineKey, areaKey }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={data}>
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />

        {areaKey && <Area type="monotone" dataKey={areaKey} fill="#bfdbfe" stroke="#3b82f6" />}
        {barKey && <Bar dataKey={barKey} barSize={20} fill="#10b981" />}
        {lineKey && <Line type="monotone" dataKey={lineKey} stroke="#f43f5e" />}
      </ComposedChart>
    </ResponsiveContainer>
  );
}
