import React from 'react';
export default function KpiCard({ title, value, unit, description }) {
    return (
        <div className="card kpi-card" style={{ padding: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <div className="kpi-value">{value} <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{unit}</span></div>
                    <div className="kpi-label">{title}</div>
                </div>
            </div>
            <div className="small">{description}</div>
        </div>
    );
}