import React from 'react'
import { RiUserHeartLine, RiArrowDropUpLine, RiArrowDropDownLine} from 'react-icons/ri';
import { useState } from 'react'

import { Menu } from '@headlessui/react'

const Guide = () => {
const [isOpen, setIsOpen] = useState('false')

  return (
    <Menu as='div' classname='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn w-full text-left'>
        <RiUserHeartLine className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>Guide</div>
          <div className='text-[13px]'>Local guide</div>
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

export default Guide
