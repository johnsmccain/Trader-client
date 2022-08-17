import React from 'react';
import { Link } from 'react-router-dom';
import './homewrapper.scss';
const HomeWrapper = ({children, title, link}:any) => {
  return (
    <div className='homewrapper'>
        <div className="homewrapper_top">
            <h2 className="homewrapper_top-title">
                {title}
            </h2>
            <Link to={link} className="homewrapper_top-btn">
                See All
            </Link>
        </div>
        <div className="homewrapper-bottom">{children}</div>
    </div>
  )
}

export default HomeWrapper