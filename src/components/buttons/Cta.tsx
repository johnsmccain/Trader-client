import React from 'react'
import './cta.scss';
const Cta = ({left, right}:any) => {
  return (
    <div className="cta">

        <span className="left btn">
            {left}
        </span>
        <span className="right btn"> {right}</span>
    </div>
  )
}

export default Cta