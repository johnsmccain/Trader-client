import React from 'react'
import './servicedetail.scss';
const ServiceDetail = () => {
  return (
    <div className='servicedetail'>
        <div className="servicedetail-slide"></div>
        <div className="servicedetail-desc">
            <h2 className="servicedetail-desc-service">House Cleaning</h2>
            <div className="servicedetail-desc-wrapper">
                <h3 className="servicedetail-desc-wrapper-name">Jenny Wilson</h3>
                <span className="servicedetail-desc-wrapper-rating">* 4.8(4,479 reviews)</span>
            </div>
            <div className="servicedetail-desc-wrapper">
                <h3 className="servicedetail-desc-wrapper-tag">Cleaning</h3>
                <span className="servicedetail-desc-wrapper-location">255 Grand Park Avenue, New York</span>
            </div>
            <h2 className="servicedetail-desc-price">$20</h2>

            <hr className="servicedetail-desc-line" />

            <div className="servicedetail-desc-wrapper-about">
                <h3 className="servicedetail-desc-wrapper-about-title">About me</h3>
                <p className="servicedetail-desc-wrapper-about-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, necessitatibus.

                </p>
            </div>
            <div className="servicedetail-desc-wrapper-gallery">
                <h3 className="servicedetail-desc-wrapper-gallery-title">Photo & Videos</h3>
                <div className="servicedetail-desc-wrapper-gallery-media">
                    <img src='' alt="" />
                </div>
            </div>
            <div className="servicedetail-desc-wrapper-comments">
                
                <ul>
                    <li></li>
                </ul>
            </div>
            <div className="servicedetail-desc-icon"></div>
        </div>
    </div>
  )
}

export default ServiceDetail