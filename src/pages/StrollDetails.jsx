import React from 'react'
import '../pages/style.css'
import { useState, useEffect}  from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StrollDetails = () => {
    const [strolls, setStrolls] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5005/strolls/${id}`)
            .then((response) => {
                console.log('respuesta del API :', response.data)
                setStrolls(response.data)
            })
            .catch(error => {
                console.error(error);
            });
        
    },[id]);

    if(Object.keys(strolls).length===0){
        return <p>Loading...</p>
    }

  return (
    <div>
            
            
            <section class="qualification section">
                <h2 class="section__title">{strolls.title.charAt(0).toUpperCase() + strolls.title.slice(1)}</h2>
                <span class="section__subtitle">Lets Start🚀</span>
                <div class="qualification__container container">
                    <div class="qualification__tabs">
                        <div class="qualification__button button--flex qualification__active" data-target='#education'>
                            <i class="uil uil-graduation-cap qualification__icon"></i>
                            {`Strolling Time: ${strolls.duration}`}
                        </div>
                    </div>
                    <div class="qualification__sections">
                        
                        <div class="qualification__content qualification__active" data-content id="education">
                            
                            <div class="qualification__data">
                                <div>
                                    <h3 class="qualification__title">{strolls.stops1}</h3>
                                    <span class="qualification__subtitle">Caracas - University</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2009-2015
                                    </div>
                                </div>
                                <div>
                                    <span class="qualification__rounder" style={{backgroundColor: 'rgb(100,88,136)'}}></span>
                                    <span class="qualification__line" style={{backgroundColor: 'rgb(100,88,136)'}}></span>
                                    
                                </div>
                            </div>
                            
                            <div class="qualification__data">
                                <div></div>
                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 class="qualification__title">{strolls.stops2}</h3>
                                    <span class="qualification__subtitle">Caracas - Uneweb</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2015-2016
                                    </div>
                                </div>

                            </div>
                            
                            <div class="qualification__data">
                                <div>
                                    <h3 class="qualification__title">{strolls.stops3}</h3>
                                    <span class="qualification__subtitle">USA - Celeritech</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2018-2019
                                    </div>
                                </div>
                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>
                            </div>
                            
                                <div class="qualification__data">
                                    <div></div>
                                    <div>
                                        <span class="qualification__rounder"></span>
                                        <span class="qualification__line"></span> 
                                    </div>
                                    <div>
                                        <h3 class="qualification__title">{strolls.stops4}</h3>
                                        <span class="qualification__subtitle">Spain - Ironhack</span>
                                        <div class="qualification__calendar">
                                            <i class="uil uil-calendar-alt"></i>
                                            2022-2023
                                        </div>
                                    </div>
                    
        
                                </div>

                                <div class="qualification__data">
                                <div>
                                    <h3 class="qualification__title">{strolls.stops5}</h3>
                                    <span class="qualification__subtitle">USA - Celeritech</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2018-2019
                                    </div>
                                </div>
                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>
                            </div>

                            <div class="qualification__data">
                                    <div></div>
                                    <div>
                                        <span class="qualification__rounder"></span>
                                        
                                    </div>
                                    <div>
                                        <h3 class="qualification__title">{strolls.stops6}</h3>
                                        <span class="qualification__subtitle">Spain - Ironhack</span>
                                        <div class="qualification__calendar">
                                            <i class="uil uil-calendar-alt"></i>
                                            2022-2023
                                        </div>
                                    </div>
                    
        
                            </div>

                            
                        </div>
                        
                        <div class="qualification__content" data-content id="work">
                            
                            <div class="qualification__data">
                                <div>
                                    <h3 class="qualification__title">Marketing and Team lead designer</h3>
                                    <span class="qualification__subtitle">Cocolu Store</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2014-2018
                                    </div>
                                </div>
                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>
                            </div>
                            
                            <div class="qualification__data">
                                <div></div>
                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 class="qualification__title">Financial RTR Executive</h3>
                                    <span class="qualification__subtitle">Wns Global Services</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2019-2022
                                    </div>
                                </div>

                            </div>
                            
                            <div class="qualification__data">
                                <div>
                                    <h3 class="qualification__title">Fullstack developer freelance</h3>
                                    <span class="qualification__subtitle">Spain</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        Actual
                                    </div>
                                </div>
                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span> 
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            
            
    
    </div>
  )
}

export default StrollDetails
