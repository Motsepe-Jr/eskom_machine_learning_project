
import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import _toggle from './toggle'



const Header = () => {

  return (
    <div className='flex justify-between px-4 pt-2 items-center'>
        
          <div className='flex items-center'>
           <_toggle />
            <h2>
                Dashboard
            </h2>
          </div>
        <h2>
            Welcome Back Hector
        </h2>

    </div>
  )
}

export default Header