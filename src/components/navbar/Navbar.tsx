import React from 'react';
import { BsBookmarkDashFill, BsCalendar, BsHouse, BsMessenger, BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './navbar.scss';
const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <Link to="/"className="link">
            <BsHouse/>
            <h4>Home</h4>
          </Link>
        </li>
        <li>
          <Link to="/bookmark" className="link">
            <BsBookmarkDashFill/>
            <h4>Bookmark</h4>
          </Link>
        </li>
        <li>
          <Link to="/calender" className="link">
            <BsCalendar/>
            <h4>Calender</h4>
          </Link>
        </li>
        <li>
          <Link to="/chat" className="link">
            <BsMessenger/>
            <h4>Inbox</h4>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="link">
            <BsPerson/>
            <h4>Profile</h4>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar