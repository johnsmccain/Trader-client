import React, { Component, useEffect, useState } from 'react'
import { Carousel, INPUT, NavBar, OfferCard, Services, Trader_card } from '../../components';
import c1 from '../../assets/c1.png'
import './home.scss';
import { Badge } from '@mui/material';
import { BsAlarm, BsBookmark, BsSearch } from 'react-icons/bs';
import HomeWrapper from './wrapper/HomeWrapper';
import { offer_data, profile_data, service_card_data, service_cat, service_cat2 } from '../../dummyData';
import {faBroom, faBrush, faBuilding, faHandsWash, faPaintRoller, faPlug, faTools, faTruck} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {RootState} from '../../redux/store'
import { BaseURI } from '../../api';
import { getUser, getUsers } from '../../api/user';

const icons =[faBroom, faBrush, faBuilding, faHandsWash, faPlug, faTools, faTruck, faPaintRoller];
const Profile = ({user}:any) => {

  console.log(`${BaseURI}images/${user?.picture}`)
  console.log(user?._id)
  const [user_detail, setuser_detail] = useState()
  useEffect(() => {
    const fetch_data = async () => {
      const res = await getUser(user?._id);
      setuser_detail(res.data);
    }
    fetch_data();
  }, [user?._id])
  
  
  let time = new Date().getHours();
  return (
    <div className="home-profile">

    { user ? <div className="home-profile_detail">
      <img src={user_detail?.picture ?`${BaseURI}images/${user_detail?.picture}` : c1} alt="profile" className="home-profile_detail-pic" />
      <Link to={`/service-detail/${user._id}`} className="home-profile_detail-desc">
        <span>{`Good ${time >= 0 &&  time < 12  ? "mornig" : time >= 12 &&  time < 16 ? "Afternoon" : "Night" }`}</span>
        <h3>{user_detail?.firstname} {user_detail?.lastname}</h3>
      </Link>
    </div>: "LSTM"}

    <div className="home-profile-notification">
    {user ? <>
      <Badge/>
      <Link to="notifications">  
        <BsAlarm/>
      </Link>
      <BsBookmark/>
     </>: <Link className='link' to="/auth/login">Login</Link>}
    </div>
  </div>
)

}



const Home = () => {

  const {user} = useSelector(state => state?.user)
  const userId = user?.details?._id;
  const [users, setUsers] = useState()

  useEffect(() => {
    const fetch = async ()=> {
      const res = await getUsers();
      setUsers(res.data);
    }
    fetch();

    return () => {
      
    }
  }, [])

  return ( 
    
      <div className='home' >

        <Profile user={user?.details}/> 
        
        <div className="home-search">
          <INPUT startIcon={<BsSearch/>}/>
        </div>
        <div className="home-special">
          <HomeWrapper link='/offer' title='Special Offers'>
            <div  className='home-offers'>
              {
                offer_data.map((x, i) => <div className='home-offers-item' key={i}> <OfferCard discount={x.discount} title={x.title} desc={x.desc} photo={x.photo} color={x.bg} key={x.id}/> </div>)
              }
            </div>
          </HomeWrapper>
          <HomeWrapper link='/services' title='Services'>
            <ul className="home-services-list">
              {
                service_cat2.slice(1,7).map((d, i) =><Link to={d.link} key={i}> <Services  name={d.title} icon={icons[i]} color={d.bg}/></Link>)
              }
              <Link to="services" className='home-services-list-item'>
                All<span></span>
              </Link>
            </ul>
            
            
          </HomeWrapper>
          <HomeWrapper link='/service-detail' title='Most Popular Services'>
            <div className="home_service-option">
              <ul>
                {
                  service_cat.map((d, i) => <li key={i}>{d}</li>)
                }
                <li>All</li>
              </ul>
            </div>
            {
              users ?
                users?.filter(user => user?._id !== userId)?.map((data:any, id:any) => 
                  (<Trader_card 
                    key={id}  
                    photo={data.picture} 
                    id={data._id} 
                    name={data.firstname + " " + data.lastname} 
                    service={data.service_name} 
                    price={data.price} 
                    // rating={data.rating} 
                    // views={data.views}
                  />))
              : 
                  "Loading"
              
            }
          </HomeWrapper>
        </div>
        <div className="home-services"></div>
        <div className="home-nav">
          <NavBar/>
        </div>
      
      </div>
    
  )
}

export default Home