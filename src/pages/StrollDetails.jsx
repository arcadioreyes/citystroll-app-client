import React from 'react'
import '../pages/style.css'
import { useState, useEffect}  from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const StrollDetails = () => {
    const [strolls, setStrolls] = useState({});

    const {id} = useParams();

    const [activeModal, setActiveModal] = useState(null);

    function openModal(modalClick) {
      setActiveModal(modalClick);
    }
  
    function closeModal() {
      setActiveModal(null);
    }

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
                        <i class="uil uil-clock-three" style={{color: 'rgb(100,88,136)'}}></i>
                            <span style={{color: 'rgb(100,88,136)'}}>{strolls.duration}</span><i class="uil uil-location-point"style={{color: 'rgb(237,119,113)'}} > </i> <span style={{color: 'rgb(237,119,113)'}}>{strolls.distance}</span>
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
                                    <span class="qualification__rounder" style={{backgroundColor: 'rgb(104,105,152)'}}></span>
                                    <span class="qualification__line" style={{backgroundColor: 'rgb(104,105,152)'}}></span>
                                    
                                </div>
                            </div>
                            
                            <div class="qualification__data">
                                <div></div>
                                <div>
                                    <span class="qualification__rounder" style={{backgroundColor: 'rgb(104,105,152)'}}></span>
                                    <span class="qualification__line"style={{backgroundColor: 'rgb(237,119,113)'}}></span>
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
                                    <span class="qualification__rounder"style={{backgroundColor: 'rgb(237,119,113)'}}></span>
                                    <span class="qualification__line"style={{backgroundColor: 'rgb(104,105,152)'}}></span>
                                </div>
                            </div>
                            
                                <div class="qualification__data">
                                    <div></div>
                                    <div>
                                        <span class="qualification__rounder"style={{backgroundColor: 'rgb(104,105,152)'}}></span>
                                        <span class="qualification__line"style={{backgroundColor: 'rgb(104,105,152)'}}></span> 
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
                                    <span class="qualification__rounder"style={{backgroundColor: 'rgb(104,105,152)'}}></span>
                                    <span class="qualification__line"style={{backgroundColor: 'rgb(237,119,113)'}}></span>
                                </div>
                            </div>

                            <div class="qualification__data">
                                    <div></div>
                                    <div>
                                        <span class="qualification__rounder"style={{backgroundColor: 'rgb(237,119,113)'}}></span>
                                        
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

                <div className="services__container container grid">
      <div className="services__content">
        <div>
          <i className="uil uil-window-grid services__icon"></i>
          <h3 className="services__title">Development  & Design</h3>
        </div>
        <span className="button button--flex button--small button--link services__button" onClick={() => openModal(0)}>
          View More
          <i className="uil uil-arrow-right button__icon"></i>
        </span>
        <div className={activeModal === 0 ? "services__modal active-modal" : "services__modal"}>
          <div className="services__modal-content">
            <h4 className="services__modal-title">Development  & Design</h4>
            <i className="uil uil-times services__modal-close" onClick={closeModal}></i>
            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p>I develop the user interface.</p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p>Web page development.</p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p>I create ux element.</p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p>I position xs brand.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
                
            </section>

            
            
            
    
    </div>
  )
}

export default StrollDetails
