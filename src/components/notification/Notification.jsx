import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './notification.scss';

const Item = () => {
    return(
        <div className="notification">
        <div className="notification__icon">
            <FontAwesomeIcon className='icon' icon={faWallet}/>
        </div>
        <div className="notification__info">
            <h4 className='title'> Payment Successful!</h4>
            <p className='text'>You have made a service payment</p>
        </div>
    </div>
    )
}

const Notification = () => {
  return (
    <ul className="">
        <li>
            <span className="date">Today</span>
            <div>
                <Item/>
                <Item/>
                <Item/>
            </div>
        </li>
    </ul>
  )
}

export default Notification