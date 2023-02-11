import React from 'react'
import { Link } from 'react-router-dom'
// import { ImSpinnere2 } from 'react-icons/im'
import { useState, useEffect }  from "react";
import axios from 'axios';
import { RiUserHeartLine, RiTimerLine, RiWalkFill, RiMoneyEuroCircleLine, RiBankLine   } from 'react-icons/ri';

const StrollList = () => {
    const [strolls, setStrolls] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5005/strolls')
            .then((response) => {
                console.log('response.data', response.data)
                setStrolls(response.data)
        })
        .catch(error => {
            console.error(error);
        });
        
    },[]);

  return (
    // <div>
    //   <h3>Stroll trips</h3>
    //   <br />   
    //   {strolls.map(stroll =>{
    //     return <div key={stroll._id}>
    //                 <img src={stroll.img2} alt="img" />
    //                 <div>
    //                     <div>{stroll.city}</div>
    //                 </div>
    //                 <h3><Link to={`/strolls/${stroll._id}`}>{stroll.title}</Link></h3>
    //                 <p>{stroll.description}</p>
    //                 {/* <img src={apartment.img} alt={"apartment"} /> */}
    //                 <p>Price: {stroll.budget}$</p>
    //             </div>
    //   })}     
    // </div>

    <div>
    <h3>Stroll trips</h3>
    <br />
    {strolls.map((stroll, index) => {
      if (index === 3) {
        return (
          <div key={stroll._id} className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2 transition'>
            <img className='mb-8 rounded-tl-[90px] rounded-br-[90px]' src={stroll.img2} alt="img" />
            <div className='mb-4 flex gap-x-2'>
            <div>{stroll.city.charAt(0).toUpperCase() + stroll.city.slice(1)}</div>
            <div className='flex ml-6 items-center gap-x-1'> <RiUserHeartLine className='dropdown-icon-custom'/>: {stroll.guide}</div>
            </div>
          </div>
        );
      }
      return null;
    })}
  </div>
  )
}

export default StrollList
