import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
export default function ExperienceLineChart({ data, xKey = 'year', yKey = 'exp', height = 180 }) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.06} />
                <XAxis dataKey={xKey} tick={{ fill: '#cbd5e1' }} />
                <YAxis tick={{ fill: '#cbd5e1' }} />
                <Tooltip />
                <Line type="monotone" dataKey={yKey} stroke="#06b6d4" strokeWidth={3} dot={{ r: 3 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}