import React from 'react'
import Banner from '../components/Banner/Banner'
import Stroll from '../components/Stroll/Stroll'

import { Link } from 'react-router-dom'
import { useState, useEffect, useContext }  from "react";
import axios from 'axios';
import { RiUserHeartLine, RiTimerLine, RiWalkFill} from 'react-icons/ri';

import { AuthContext } from '../context/auth.context';



const User = () => {
const [strolls, setStrolls] = useState([]);
const { user } = useContext(AuthContext);



  useEffect(() => {
          axios.get('http://localhost:5005/strolls')
              .then((response) => {
                  // console.log('response.data', response.data)
                  setStrolls(response.data)
              })
              .catch(error => {
                  console.error(error);
              });
        
  },[]);

  const handleStrollClick = (strollId) => {
      axios.post(`http://localhost:5005/users/${user._id}`, {
        strollId: strollId
      })
      .then((response) => {
        const updatedUser = response.data;
        setStrolls((prevStrolls) => {
          return prevStrolls.map((stroll) => {
            if (stroll._id === strollId) {
              return {
                ...stroll,
                list: updatedUser.list
              };
            } else {
              return stroll;
            }
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div>
    {strolls.map(stroll => {
      return (
        <div>
          <div className='flex gap-x-6'>
            <p>{stroll.title}</p>
            <p>{stroll._id}</p>
            <i class="uil uil-heart-sign cursor-pointer" onClick={() => handleStrollClick(stroll._id)}></i>
          </div>
 
          <ul>
            {user && user.list && user.list.map(listItem => (
              <li>{listItem}</li>
            ))}
          </ul>
        </div>
      )
    })}
  </div>
  )
}

export default User



