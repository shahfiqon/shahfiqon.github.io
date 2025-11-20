import React from 'react';
import {
  FunnelChart, Funnel, LabelList, Tooltip, ResponsiveContainer
} from 'recharts';

export default function FunnelChartComp({ data, valueKey, nameKey }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <FunnelChart>
        <Tooltip />
        <Funnel data={data} dataKey={valueKey} nameKey={nameKey}>
          <LabelList position="right" fill="#000" stroke="none" dataKey={nameKey} />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  );
}
