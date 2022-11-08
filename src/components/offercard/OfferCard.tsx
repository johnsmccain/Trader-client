import React from 'react';
import './offercard.scss';
import c1 from '../../assets/c1.png';
const OfferCard = ({title, desc, color, discount, photo}:any) => {
  return (
    <div className='offercard' style={{backgroundColor: color}}>
        <div className="offercard_left">
            <h2 className="offercard_left-discount">{discount}%</h2>
            <h3 className="offercard_left-title">{title}</h3>
            <p className="offercard_left-desc">{desc}</p>
        </div>
        <div className="offercard_right">
            <div className="offercard_right-photo">
                <img src={photo} alt="worker" />
            </div>
        </div>
    </div>
  )
}

export default OfferCard