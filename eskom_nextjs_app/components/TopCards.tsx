import React from 'react'

async function getCapacities() {
  const res = await  fetch(`${process.env.BASE_URL}/api/capacity`)
  if(!res.ok) {
    console.log(res)
  }
  return res.json()
}

const TopCards =  async () => {

  const capacities = await getCapacities()
  
  
  return (
    <div className='flex flex-col md:flex-row  md:items-center md:space-x-2 m-4'>
      <div className='flex bg-white shadow-lg rounded-lg w-full md:w-1/3 mb-4 md:mb-0'>
        <div className='flex flex-col w-full p-6'>
          <h2 className='text-slate-700 text-2xl font-bold mb-2'>{capacities[0].Wind_Installed_Capacity} MW</h2>
          <p className='text-gray-600'>Installed Wind Capacity</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg m-5'>
           <span className='text-green-700 text-lg'>+18% </span>
        </p>
      </div>
      <div className='flex bg-white shadow-lg rounded-lg w-full md:w-1/3 mb-4 md:mb-0'>
       <div className='flex flex-col w-full p-6'>
          <h2 className='text-slate-700 text-2xl font-bold mb-2'>{capacities[0].Installed_Eskom_Capacity} MW</h2>
          <p className='text-gray-600'>Installed Eskom Capacity</p>
        </div>
        <p className='bg-red-200 flex justify-center items-center p-2 rounded-lg m-5'>
           <span className='text-red-700 text-lg'>-3% </span>
        </p>
      </div>
      <div className=' flex bg-white shadow-lg rounded-lg w-full md:w-1/3'>
      <div className='flex flex-col w-full p-6'>
          <h2 className='text-slate-700 text-2xl font-bold mb-2'>{capacities[0].CSP_Installed_Capacity} MW</h2>
          <p className='text-gray-600'>Installed CSP Capacity</p>
        </div>
        <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg m-5'>
           <span className='text-green-700 text-lg'>+12%</span>
        </p>
      </div>
    </div>
  )
}

export default TopCards