import React, { useEffect, useState } from 'react';
import { BsArrowBarRight, BsPenFill, BsPerson } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BaseURI } from '../../api';
import { upload } from '../../api/upload';
import { getUser, updateUser } from '../../api/user';
import c1 from "../../assets/c1.png";
import { NavBar } from '../../components';
import { logout } from '../../redux/user';
import "./profile.scss";
import { profileOptionList } from './profile_option';

const Profile = () => {
  const [pic, setPic] = useState();
  const [userData, setUserData] = useState();
  const {user, loading, error} = useSelector((item) => item?.user);
  const user_details = user?.details;
  const dispatch = useDispatch();
  useEffect(() => {
    // first
    const fetchUserData = async () => {
      const res = await getUser(user_details._id)
      setUserData(res.data);
    }
    fetchUserData()
    return () => {
      // second
    }
  }, [])
  
  const handleLogout = (name:any) => {
    if (name === "Logout") {
      if (confirm("Are you sure you want to logout?")) {

        dispatch(logout());
      }
      // console.log(i)
    }

  }

 console.log(`${BaseURI}images/${userData?.picture}`)
  return (
    <div className='profile'>
       <div className="profile__header">
        <div className="profile__header-img">
          <img src={
            userData?.picture 
            ? `${BaseURI}/images/${userData?.picture}`
            : c1
            } 
            alt="profile" 
          />
        </div>
        <div className="profile__header-info">
          <b>{user_details?.firstname} {user_details?.lastname}</b>
          <span>{user_details?.email}</span>
        </div>
       </div>
      <ul className="profile__options">
        {profileOptionList(user_details?._id).map((item:any, id:any) => (

          <Link 
            to={item.link_to ? item.link_to : ""} 
            className="profile__options-list" key={id} 
            onClick={() => handleLogout(item.name)}
          >
            <div>
              <span className="profile__options-list-icon"><item.icon/></span>
              <b className="profile__options-list-name">{item.name}</b>
            </div>
            <span className="profile__options-list-icon"><BsArrowBarRight/></span>
          </Link>
        ))}
      </ul>  
      <NavBar/>
    </div>
  )
}

export default Profile  