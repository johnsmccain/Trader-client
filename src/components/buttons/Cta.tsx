import React from 'react'
import { Link } from 'react-router-dom';
import './cta.scss';
const Cta = ({left, leftpath, right}:any) => {
  return (
    <div className="cta">

        <Link to={leftpath} className="left btn">
            {left}
        </Link>
        <span className="right btn"> {right}</span>
    </div>
  )
}

export default Cta