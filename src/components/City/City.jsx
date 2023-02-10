import React from 'react'
import { RiMapPinLine, RiArrowDropUpLine, RiArrowDropDownLine} from 'react-icons/ri';
import { useState } from 'react'

import { Menu } from '@headlessui/react'

const City = () => {
const [isOpen, setIsOpen] = useState('false')

  return (
    <Menu as='div' classname='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiMapPinLine className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>City</div>
          <div className='text-[13px]'>Select your place</div>
        </div>
        {isOpen ? (
            <RiArrowDropUpLine className='dropdown-icon-secondary' />
          ) : (
            <RiArrowDropDownLine className='dropdown-icon-secondary' />
          )}
      </Menu.Button>
      
      <Menu.Items>

      </Menu.Items>
    </Menu>
  )
}

export default City
