import React from 'react'
import { Link } from 'react-router-dom'
// import { ImSpinnere2 } from 'react-icons/im'
import { useState, useEffect }  from "react";
import axios from 'axios';

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
    <div>
      <h3>Stroll trips</h3>
      <br />   
      {strolls.map(stroll =>{
        return <div key={stroll._id}>
                    <h3><Link to={`/strolls/${stroll._id}`}>{stroll.title}</Link></h3>
                    <p>{stroll.description}</p>
                    {/* <img src={apartment.img} alt={"apartment"} /> */}
                    <p>Price: {stroll.budget}$</p>
                </div>
      })}     
    </div>
  )
}

export default StrollList
