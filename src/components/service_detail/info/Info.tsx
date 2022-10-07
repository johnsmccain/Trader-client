import React from 'react'
import { BsStarHalf } from 'react-icons/bs';
import './info.scss';
const Info = ({data}:any) => {
  return (
    <div className='info'>
        <h2 className="info-service">{data.service}</h2>
            <div className="info-wrapper">
                <h3 className="info-wrapper-name">{data.name}</h3>
                <span className="info-wrapper-rating"><BsStarHalf/>{data.rating}({data.views} reviews)</span>
            </div>
            <div className="info-wrapper">
                <h3 className="info-wrapper-tag">Cleaning</h3>
                <span className="info-wrapper-location">{data.address}</span>
            </div>
            <h2 className="info-price">${data.price}</h2>

            <hr className="info-line" />

            <div className="info-wrapper-about">
                <h3 className="info-wrapper-about-title">About me</h3>
                <p className="info-wrapper-about-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, necessitatibus.

                </p>
            </div>
    </div>
  )
}

export default Info