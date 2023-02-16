// import React from 'react'
// import { Link } from 'react-router-dom'
// // import { ImSpinnere2 } from 'react-icons/im'
// import { useState, useEffect }  from "react";
// import axios from 'axios';
// import { RiUserHeartLine, RiTimerLine, RiWalkFill, RiMoneyEuroCircleLine, RiBankLine   } from 'react-icons/ri';

// const StrollList = () => {
//     const [strolls, setStrolls] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5005/strolls')
//             .then((response) => {
//                 console.log('response.data', response.data)
//                 setStrolls(response.data)
//         })
//         .catch(error => {
//             console.error(error);
//         });
        
//     },[]);

//     // const handleDelete = (id) => {
//     //   axios
//     //     .delete(`http://localhost:5005/strolls/${id}`)
//     //     .then((response) => {
//     //       console.log('Stroll deleted');
//     //       setStrolls(strolls.filter((stroll) => stroll._id !== id));
//     //     })
//     //     .catch((error) => {
//     //       console.error(error);
//     //     });
//     // };


//     ////


//   return (
//     <div className="stroll-list">  
//       {strolls.map(stroll =>{
//         return <div key={stroll._id} className='bg-white shadow-1 p-5  w-full max-w-[552px] mx-auto hover:shadow-2 transition'>
//                       <Link to={`/strolls/${stroll._id}`}><img className='mb-8' src={stroll.img1} alt="img"  /></Link>
//                       <div className='mb-4 flex gap-x-2 text-sm'> 
//                         <div className='bg-customPrimary rounded-full text-white px-3'>
//                           {stroll.city.charAt(0).toUpperCase() + stroll.city.slice(1)}
//                         </div>
//                         <div className='flex ml-6 items-center '><RiTimerLine className='dropdown-icon-customYellow'/>
//                           <span className='bg-customSecondary rounded-full text-black px-3 '>{stroll.duration}</span> 
//                         </div>
//                         <div className='flex ml-6 items-center '><RiWalkFill className='dropdown-icon-customPurple'/>
//                           <span className='bg-customPurple rounded-full text-white px-3 '>{stroll.distance}</span>
//                         </div>
//                         <div className='flex ml-6 items-center '><RiUserHeartLine className='dropdown-icon-customFour'/> 
//                           <span className='bg-green-500 rounded-full text-white px-3'>{stroll.guide}</span>  
//                         </div>
//                       </div>
//                       <div className='text-lg font-semibold max-w-[500px]'>
//                          <Link to={`/strolls/${stroll._id}`}>{stroll.title.charAt(0).toUpperCase() + stroll.title.slice(1)}</Link> 
//                       </div>
//                       <div className='  text-red'>{stroll.budget}€ avg.</div>
//                       {/* <button onClick={() => handleDelete(stroll._id)}>Delete</button> */}

//                 </div>
//       })}     
//     </div>

//   )
// }

// export default StrollList



/// TESTING #1
// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState, useEffect }  from "react";
// import axios from 'axios';
// import { RiUserHeartLine, RiTimerLine, RiWalkFill, RiMoneyEuroCircleLine, RiBankLine   } from 'react-icons/ri';

// const StrollList = () => {
//     const [strolls, setStrolls] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5005/strolls')
//             .then((response) => {
//                 console.log('response.data', response.data)
//                 setStrolls(response.data)
//         })
//         .catch(error => {
//             console.error(error);
//         });
//     },[]);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {strolls.map(stroll => {
//         return (
//           <div key={stroll._id} className='bg-white shadow-1 p-5 hover:shadow-2 transition md:col-span-1'>
//             <Link to={`/strolls/${stroll._id}`}><img className='mb-8' src={stroll.img1} alt="img"  /></Link>
//             <div className='mb-4 flex gap-x-2 text-sm'> 
//               <div className='bg-customPrimary rounded-full text-white px-3'>
//                 {stroll.city.charAt(0).toUpperCase() + stroll.city.slice(1)}
//               </div>
//               <div className='flex ml-6 items-center '><RiTimerLine className='dropdown-icon-customYellow'/>
//                 <span className='bg-customSecondary rounded-full text-black px-3 '>{stroll.duration}</span> 
//               </div>
//               <div className='flex ml-6 items-center '><RiWalkFill className='dropdown-icon-customPurple'/>
//                 <span className='bg-customPurple rounded-full text-white px-3 '>{stroll.distance}</span>
//               </div>
//               <div className='flex ml-6 items-center '><RiUserHeartLine className='dropdown-icon-customFour'/> 
//                 <span className='bg-green-500 rounded-full text-white px-3'>{stroll.guide}</span>  
//               </div>
//             </div>
//             <div className='text-lg font-semibold max-w-[500px]'>
//               <Link to={`/strolls/${stroll._id}`}>{stroll.title.charAt(0).toUpperCase() + stroll.title.slice(1)}</Link> 
//             </div>
//             <div className='  text-red'>{stroll.budget}€ avg.</div>
//           </div>
//         );
//       })}
//     </div>
//   )
// }

// export default StrollList;

import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext }  from "react";
import axios from 'axios';
import { RiUserHeartLine, RiTimerLine, RiWalkFill} from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';

const StrollList = () => {
    const [strolls, setStrolls] = useState([]);

    const { user } = useContext(AuthContext);

    const [isStrollAdded, setIsStrollAdded] = useState(false);

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
          setIsStrollAdded(true);
        })
        .catch((error) => {
          console.error(error);
        });
    };

      

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {strolls.map(stroll => {
                return (
                    <div key={stroll._id} className="bg-white shadow-1 p-5  hover:shadow-2 transition">
                        <Link to={`/strolls/${stroll._id}`}>
                            <img className="mb-8" src={stroll.img1} alt="img" />
                        </Link>
                        {isStrollAdded && (
                        <p className="text-green-500 font-bold text-sm mb-2">
                            Stroll has been added to your favorites
                        </p>
                        )}
                        <div className="mb-4">
                            <div className="text-sm mb-2">
                                <span className="bg-customPrimary rounded-full text-white px-3">
                                    {stroll.city.charAt(0).toUpperCase() + stroll.city.slice(1)}
                                </span>
                            </div>
                            <div className="flex gap-x-6">
                                <div className="flex items-center">
                                    <RiTimerLine className="dropdown-icon-customYellow" />
                                    <span className="bg-customSecondary rounded-full text-black px-3">
                                        {stroll.duration}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <RiWalkFill className="dropdown-icon-customPurple" />
                                    <span className="bg-customPurple rounded-full text-white px-3">
                                        {stroll.distance}
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <RiUserHeartLine className="dropdown-icon-customFour" /> 
                                    <span className="bg-green-500 rounded-full text-white px-3">
                                        {stroll.guide}
                                    </span>  
                                </div>
                            </div>
                        </div>
                        <div className="text-lg font-semibold mb-2">
                            <Link to={`/strolls/${stroll._id}`}>
                                {stroll.title.charAt(0).toUpperCase() + stroll.title.slice(1)}
                            </Link> 
                        </div>
                        <div className='flex' style={{justifyContent: 'space-between'}}>
                            <div className="text-red">{stroll.budget}€ avg.</div>
                            <i class="uil uil-heart-sign cursor-pointer" onClick={() => handleStrollClick(stroll._id)}></i>
                        </div>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default StrollList
