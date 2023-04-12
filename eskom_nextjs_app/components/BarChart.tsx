'use client'

import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, Tooltip } from 'recharts';
import { parseISO, subDays } from 'date-fns';
import { format } from 'date-fns/esm';

const data: any[] | undefined = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substring(0, 10),
    value: 1 + Math.random(),
    value2: 1 - Math.random(),
  });
}

const SimpleBarChart = () => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <BarChart data={data}>
        <Bar dataKey='value' fill='#0077B6' />
        <Bar dataKey='value2' fill='#3CB371' />
        <XAxis
          dataKey='date'
          interval={0}
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, 'MMM, d');
            }
            return '';
          }}
        />
        <YAxis
          dataKey='value'
          axisLine={false}
          tickLine={false}
          tickCount={5}
          tickFormatter={(number) => `${number.toFixed(2)} `}
        />
        <Tooltip content={<CustomTooltip />} contentStyle={{ border: '1px solid white' }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

function CustomTooltip({ active, payload, label }: any) {
  if (active) {
    return (
      <div className='tooltip'>
        <h4>{format(parseISO(label), 'eee, d MMM, yyyy')}</h4>
        <p>{payload[0].value.toFixed(2)} MW</p>
      </div>
    );
  }
  return null;
}

export default SimpleBarChart;