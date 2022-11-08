import React from 'react'
import './service.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import {} from "@fortawesome/free-regular-svg-icons"
const Services = ({icon, name, color}:any) => {
  return (
    <li className='service' >
      <FontAwesomeIcon className='service-icon' icon={icon} style={{color: color}}/>
      <span className='service-name'>{name}</span>
    </li>
  )
}

export default Services