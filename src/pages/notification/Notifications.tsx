import React from 'react';
import './notifications.scss';
import {Notification} from '../../components'
const Notifications = () => {
  return (
    <div className='notifications'>
      <Notification/>
      <Notification/>
      <Notification/>
      <Notification/>
      <Notification/>
    </div>
  )
}

export default Notifications