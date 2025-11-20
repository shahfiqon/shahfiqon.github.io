import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
export default function SkillBarChart({ data, xKey = 'skill', yKey = 'value', height = 220 }) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <XAxis dataKey={xKey} tick={{ fill: '#cbd5e1' }} />
                <YAxis tick={{ fill: '#cbd5e1' }} />
                <Tooltip />
                <Bar dataKey={yKey} fill="#3b82f6" radius={[6, 6, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
    );
}