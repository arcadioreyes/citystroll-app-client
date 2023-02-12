import React from 'react'
import Banner from '../components/Banner/Banner'
import Stroll from '../components/Stroll/Stroll'
import StrollDetails from './StrollDetails'

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner/>
      <Stroll/>
      <StrollDetails/>
    </div>
  )
}

export default Home
