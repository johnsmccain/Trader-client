import React, { useState } from 'react'
import { profile_data } from '../../dummyData';
import { useParams } from 'react-router-dom'
import './servicedetail.scss';
import { URLSearchParams } from 'url';
import { BsStarHalf } from 'react-icons/bs';
import Slide from '../../components/service_detail/slide/Slide';
import Info from '../../components/service_detail/info/Info';
import Gallery from '../../components/service_detail/gallery/Gallery';
import { Comments, Cta } from '../../components';

const ServiceDetail = () => {
    const params = useParams()
    let id:any = params.id?.slice(1,)
 
    const data = profile_data[id - 1];

  return (
    <div className='servicedetail'>
        <Slide photo={data.photo}/>
        <div className="servicedetail-desc">
            <Info data={data}/>
            <Gallery gallery={data.gallery}/>
            <div className="servicedetail-desc-wrapper-comments">
                
               <Comments/>
            </div>
            <div className="servicedetail-desc-icon"></div>
        </div>
        <div className="footer">
          <Cta left="Message" right="Book Now"/>
        </div>
    </div>
  )
}

export default ServiceDetail