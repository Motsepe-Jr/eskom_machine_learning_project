'use client'

import React, {useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const _toggle = () => {
    const [toggleOn, setToggleOn] = useState(false);

    const handleToggleClick = () => {
        setToggleOn(!toggleOn);
      }
  return (
    <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
    <AiOutlineMenu size={20}  onClick={handleToggleClick}/>
  </div>
  )
}

export default _toggle