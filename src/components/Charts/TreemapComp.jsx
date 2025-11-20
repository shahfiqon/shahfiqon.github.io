import React from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';

export default function TreemapComp({ data, sizeKey, nameKey }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <Treemap
        data={data}
        dataKey={sizeKey}
        nameKey={nameKey}
        ratio={4 / 3}
        stroke="#fff"
        fill="#6366f1"
      />
    </ResponsiveContainer>
  );
}
