'use client'

import {  ResponsiveContainer, 
          AreaChart as AreaCharts, 
          XAxis, 
          YAxis,
          Area, 
          Tooltip, 
          CartesianGrid } from 'recharts';
import { parseISO, subDays} from 'date-fns'
import { format} from 'date-fns/esm';


const AreaChart = ({ hourlyforecasts }: any) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaCharts data={hourlyforecasts}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0077B6" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#FFFFFF" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <Area
          dataKey="Residual_Demand_Forecast"
          stroke="#0077B6"
          fill="url(#color)"
        />
         <XAxis
          dataKey="Date_Time_Hour_Beginning"
          interval={0}
          axisLine={false}
          tickLine={false}
          tickMargin={-5}
          tickFormatter={(str, index) => {
            const date = new Date(str);
            if (index % 8 === 0) {
              return `${date.getHours()}`;
            } else {
              return "";
            }
          }}
          label={{
            value: "Time (AM/PM)",
            position: "insideBottom",
            offset: -5,
          }}
        />
        <YAxis
          dataKey="Residual_Demand_Forecast"
          axisLine={false}
          tickMargin={8}
          tickSize={12}
          tickLine={false}
          tickCount={5}
          tick={{dy: 18}} 
          tickFormatter={(number) => `${(number / 1000).toFixed(2)}k`}
          label={{ value: "MW (thousands)", angle: 360, position: "insideTopLeft", offset: -5}}
        />
        <Tooltip
          content={<CustomTooltip />}
          contentStyle={{ border: "1px solid white" }}
        />
        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaCharts>
    </ResponsiveContainer>
  );
};






function CustomTooltip ({active, payload, label}: any) {
  if (active) {

    return <div className='tooltip'>
      <h4>{format(parseISO(label), 'eee, d MMM, yyyy')}</h4>
      <p>
        {payload[0].value.toFixed(2)} MW
      </p>
    </div>

  }
  return null;

}

export default AreaChart;