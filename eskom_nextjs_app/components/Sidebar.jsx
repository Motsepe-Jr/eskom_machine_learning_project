import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {RxSketchLogo, RxDashboard, RxPerson} from 'react-icons/rx'
import { MdWindPower, MdPowerOff } from "react-icons/md";
import { GiSolarPower } from "react-icons/gi";
import { SiPowerbi } from "react-icons/si";
import Header from './Header';


const Sidebar = () => {
  return (
    <div className='flex'>
        <div className='fixed w-20 h-screen p-4 bg-white border-r[1px] flex flex-col justify-between'>
          
          <div className='flex flex-col items-center'>
            <Link href='/'>
                <div className='text-white inline-block rounded-lg shadow-lg w-16 h-16'>
                <Image
                    src='/asssets/logo/eskom_logo.png'
                    width={500}
                    height={500}
                    alt="Logo"
                    className="p-3 rounded-lg"
                    />
                </div>
            </Link>
            <span className='border-b-[1px] border-gray-200 w-full p-2'>
            </span>

            <Link href='/dashbaord'>
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                  <RxDashboard size={20} />
                </div>
            </Link>
            
            <Link href='/trends'>
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                  <SiPowerbi size={20} />
                </div>
            </Link>
            <Link href='/power'>
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                  <MdPowerOff size={20} />
                </div>
            </Link>
            <Link href='/generator'>
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                  <MdWindPower size={20} />
                </div>
            </Link>
            <Link href='/grid'>
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                  <GiSolarPower size={20} />
                </div>
            </Link>

          </div>

          <Link href='/'>
                <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
                  <RxPerson size={20} />
                </div>
            </Link>
           
        </div>
      
    </div>
  )
}

export default Sidebar
