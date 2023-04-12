'use client'

import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip, CartesianGrid } from 'recharts';
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

const LineCharts = ({ sortedweeklyforecasts }: any) => {

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={sortedweeklyforecasts}>
        <Line
          dataKey="Residual_Demand"
          stroke="#0077B6"
          strokeWidth={1}
          // dot={{ stroke: '#0077B6', strokeWidth: 2, fill: '#fff', r: 4 }}
          activeDot={{ stroke: '#0077B6', strokeWidth: 2, fill: '#fff', r: 6 }}
        />
        <Line
          dataKey="Forecast_Demand"
          stroke="#FFC300"
          strokeWidth={1}
          // dot={{ stroke: '#0077B6', strokeWidth: 2, fill: '#fff', r: 4 }}
          activeDot={{ stroke: '#0077B6', strokeWidth: 2, fill: '#fff', r: 6 }}
        />
        <XAxis
          dataKey="Date_Time_Hour_Beginning"
          interval={0}
          axisLine={false}
          tickLine={false}
          tickMargin={-5}
          tickFormatter={(str, index) => {
            const date = new Date(str);
            if (index % 48 === 0) {
              return `${format(date, 'MMM, d')}`;
            } else {
              return "";
            }
          }}
          label={{
            value: "Days",
            position: "insideBottom",
            offset: -2,
            fill: '#666'
          }}
        />
        <YAxis
          dataKey="Residual_Demand"
          axisLine={false}
          tickMargin={8}
          tickSize={12}
          tickLine={false}
          tickCount={5}
          tick={{ dy: 18 }} 
          tickFormatter={(number) => `${(number / 1000).toFixed(2)}k`}
          label={{
            value: "MW (thousands)",
            angle: 360,
            position: "insideTopLeft",
            offset: -5,
            fill: '#666'
          }}
        />
        <Tooltip
          content={<CustomTooltip />}
          contentStyle={{ backgroundColor: "#333", border: "none", borderRadius: '4px' }}
        />
        <CartesianGrid opacity={0.1} vertical={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};


function CustomTooltip ({active, payload, label}: any) {
  if (active) {

    return <div className='tooltip'>
      <h4>{format(parseISO(label), 'eee, d MMM, yyyy')}</h4>
      <p>
      {(payload[0] ? payload[0]?.value : payload[1]?.value)?.toFixed(2)} MW
      </p>
    </div>

  }
  return null;

}
export default LineCharts;