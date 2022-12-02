import React, { useState } from 'react';
import { BsBookmarkDashFill, BsCalendar, BsHouse, BsMessenger, BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
  const [active, setActive] = useState("home")
  return (
    <div className='navbar'>
      <ul>
        <li  onClick={()=> setActive("home")}>
          <Link to="/" 
            className={ `${active === "home" && "active"} link `}
            
            >
            <BsHouse/>
            <h4>Home</h4>
          </Link>
        </li>
        <li onClick={()=> setActive("booking")}>
          <Link to="/booking" className={ `${active === "booking" && "active"} link `}>
            <BsBookmarkDashFill/>
            <h4>Bookmark</h4>
          </Link>
        </li>
        <li onClick={()=> setActive("calender")}>
          <Link to="/calender" className={ `${active === "calender" && "active"} link `}>
            <BsCalendar/>
            <h4>Calender</h4>
          </Link>
        </li>
        <li onClick={()=> setActive("inbox")}>
          <Link to="/chat" className={ `${active === "inbox" && "active"} link `}>
            <BsMessenger/>
            <h4>Inbox</h4>
          </Link>
        </li>
        <li onClick={()=> setActive("profile")}>
          <Link to="/profile" className={ `${active === "profile" && "active"} link `}>
            <BsPerson/>
            <h4>Profile</h4>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar