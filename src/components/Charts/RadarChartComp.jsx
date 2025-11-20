import React from 'react';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer
} from 'recharts';

export default function RadarChartComp({ data, angleKey, valueKey }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey={angleKey} />
        <Radar name="Score" dataKey={valueKey} stroke="#10b981" fill="#10b981" fillOpacity={0.4} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
