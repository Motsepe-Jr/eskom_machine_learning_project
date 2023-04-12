'use client'

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, LabelList } from 'recharts';

const data = [
  { name: 'PCLF', value: 200 },
  { name: 'UCLF', value: 400 },
  { name: 'OCLF', value: 300 },
  { name: 'EAF', value: 500 },
  { name: 'PHQ', value: 100 },
];

const COLORS = ['#0077B6', '#00B4D8', '#90E0EF', '#CAF0F8', '#FFC300'];

const PieChartWithNeedle = () => {
  return (
    <ResponsiveContainer width='100%' height={500}>
      <PieChart>
        <Pie
          data={data}
          dataKey='value'
          nameKey='name'
          cx='50%'
          cy='50%'
          innerRadius={140}
          outerRadius={170}
          startAngle={180}
          endAngle={0}
          paddingAngle={5}
          fill='#8884d8'
          labelLine={false}
          label={renderCustomizedLabel}
          cornerRadius={5}
          animationDuration={1000}
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <g>
      <text x={x} y={y} fill='#6b6b6b' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central' fontWeight='bold'>
        {`${data[index].name} (${(percent * 100).toFixed(0)}%)`}
      </text>
    </g>
  );
};

export default PieChartWithNeedle;