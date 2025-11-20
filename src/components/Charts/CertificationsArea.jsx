import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
export default function CertificationsArea({ data, xKey = 'period', yKey = 'value', height = 160 }) {
    return (
        <ResponsiveContainer width="100%" height={height}>
            <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.04} />
                <XAxis dataKey={xKey} tick={{ fill: '#cbd5e1' }} />
                <YAxis tick={{ fill: '#cbd5e1' }} />
                <Tooltip />
                <Area type="monotone" dataKey={yKey} stroke="#3b82f6" fill="#1e293b" fillOpacity={0.5} />
            </AreaChart>
        </ResponsiveContainer>
    );
}