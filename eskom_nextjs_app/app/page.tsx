import Image from 'next/image'
import { Inter } from 'next/font/google'
import TopCards from '@/components/TopCards'
import AreaChart from '@/components/AreaChart'
import LineCharts from '@/components/LineCharts'
import PieChartWithNeedle from '@/components/PieChart'
import SimpleBarChart from '@/components/BarChart'


async function getHourForecasts() {
  const res = await  fetch(`${process.env.BASE_URL}/api/hourlyforecast`, {cache: 'force-cache'})
  if(!res.ok) {
    console.log(res)
  }
  return res.json()
}

async function getWeeklyForecasts() {
  const res = await  fetch(`${process.env.BASE_URL}/api/weeklyforecast`, {cache: 'force-cache'}) // SSG // ISR - revalidate the page after certain time {next: {revalidate: 60}} 
  if(!res.ok) {
    console.log(res)
  }
  return res.json()
}

const inter = Inter({ subsets: ['latin'],  })

export default async function Home() {

  const hourlyforecasts = await getHourForecasts()

  const sortedhourlyforecasts = hourlyforecasts.sort((a: any, b: any) => {
    return new Date(a.Date_Time_Hour_Beginning).getTime() - new Date(b.Date_Time_Hour_Beginning).getTime();
  });

  const weeklyforecasts = await getWeeklyForecasts()

  const sortedweeklyforecasts = weeklyforecasts.sort((a: any, b: any) => {
    return new Date(a.Date_Time_Hour_Beginning).getTime() - new Date(b.Date_Time_Hour_Beginning).getTime();
  });



  return (
    <main className={inter.className}>
      <TopCards />
    <div className='p-4 grid md:grid-cols-2 grid-cols-1 gap-3 '>

        <div className='bg-white shadow-lg rounded-lg p-2 md:mr-6 flex flex-col w-full'>
        <p className='text-gray-600 p-5 mb-2 font-bold text-xl'>Daily Residual Demand</p>
        <div style={{ padding: '0 20px' }}>
    <AreaChart hourlyforecasts={sortedhourlyforecasts} />
       </div>
        </div>
  
      <div className='bg-white shadow-lg rounded-lg p-2 md:mr-6 flex flex-col w-full'>
      <p className='text-gray-600 p-5 mb-2 font-bold text-xl'>Weekly Residual Demand</p>
      <LineCharts sortedweeklyforecasts= {sortedweeklyforecasts}/>
      </div>

      <div className='bg-white shadow-lg rounded-lg p-2 md:mr-6 flex flex-col w-full'>
      <p className='text-gray-600 p-5 mb-2 font-bold text-xl'>Generation Capacity</p>
      <SimpleBarChart />
      </div>
      <div className='bg-white shadow-lg rounded-lg p-2 md:mr-6 flex flex-col w-full'>
      <p className='text-gray-600 p-5 mb-2 font-bold text-xl'>Outages</p>
      <PieChartWithNeedle />
      </div>
    </div>
    </main>
  )
}