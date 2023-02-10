import React from 'react'
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine  } from 'react-icons/ri';

import { Menu } from '@headlessui/react'

const City = () => {
  return (
    <Menu as='div' classname='dropwodn relative'>
      <Menu.Button>
        <RiMapPinLine/>
      </Menu.Button>
    </Menu>
  )
}

export default City
