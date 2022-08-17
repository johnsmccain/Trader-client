import React, { Component } from 'react'
import { Carousel, INPUT, OfferCard, Services, Trader_card } from '../../components';
import c1 from '../../assets/c1.png'
import './home.scss';
import { Badge } from '@mui/material';
import { BsAlarm, BsBookmark, BsSearch } from 'react-icons/bs';
import HomeWrapper from './wrapper/HomeWrapper';
import { offer_data, service_card_data, service_cat, service_cat2 } from '../../dummyData';
import {faBroom, faBrush, faBuilding, faHandsWash, faPaintRoller, faPlug, faTools, faTruck} from "@fortawesome/free-solid-svg-icons"

const icons =[faBroom, faBrush, faBuilding, faHandsWash, faPlug, faTools, faTruck, faPaintRoller];
const Profile =  (
  
  <div className="home-profile">

    <div className="home-profile_detail">
      <img src={c1} alt="profile" className="home-profile_detail-pic" />
      <div className="home-profile_detail-desc">
        <span>Good Moring</span>
        <h3>Andrew Ainsley</h3>
      </div>
    </div>

    <div className="home-profile-notification">
      <Badge/>
      <BsAlarm/>
      <BsBookmark/>
    </div>
  </div>
)



const Home = () => {

  return ( 
    
      <div className='home' >

        {Profile}
        
        <div className="home-search">
          <INPUT startIcon={<BsSearch/>}/>
        </div>
        <div className="home-special">
          <HomeWrapper link='/offer' title='Special Offers'>
            <div  className='home-offers'>
              {
                offer_data.map(x => <div className='home-offers-item' key={x.id}> <OfferCard discount={x.discount} title={x.title} desc={x.desc} photo={x.photo} color={x.bg} key={x.id}/> </div>)
              }
            </div>
          </HomeWrapper>
          <HomeWrapper link='/services' title='Services'>
            <ul className="home-services-list">
              {
                service_cat2.slice(1,7).map((d, i) => <Services keys={d.id} name={d.title} icon={icons[i]} color={d.bg}/>)
              }
              <li className='home-services-list-item'>
                All<span></span>
              </li>
            </ul>
            
            
          </HomeWrapper>
          <HomeWrapper link='/popular' title='Most Popular Services'>
            <div className="home_service-option">
              <ul>
                {
                  service_cat.map((d, i) => <li key={i}>{d}</li>)
                }
                <li>All</li>
              </ul>
            </div>
            {
              service_card_data.map(data => <Trader_card key={data.id} photo={data.photo} name={data.name} service={data.service} price={data.price} rating={data.rating} views={data.views} />)
              
            }
          </HomeWrapper>
        </div>
        <div className="home-services"></div>
        
      
      </div>
    
  )
}

export default Home