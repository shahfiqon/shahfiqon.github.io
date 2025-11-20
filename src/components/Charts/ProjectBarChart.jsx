import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
export default function ProjectBarChart({ data, xKey = 'name', yKey = 'count', height = 200 }) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                <XAxis type="number" tick={{ fill: '#cbd5e1' }} />
                <YAxis dataKey={xKey} type="category" tick={{ fill: '#cbd5e1' }} />
                <Tooltip />
                <Bar dataKey={yKey} fill="#10b981" radius={[6, 6, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}