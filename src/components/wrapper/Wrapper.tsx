import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './wrapper.scss';
const Wrapper = ({children, header}:any) => {

  return (
    <div className='wrapper'>
        <div className="wrapper-arrow"><Link to='/'><BsArrowLeft/></Link> <h3>{header && header}</h3></div>
        <div className="wrapper-children">
          {children}
        </div>
    </div>
  )
}

export default Wrapper