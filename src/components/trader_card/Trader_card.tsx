import React, { useState } from 'react'
import { BsBookmark, BsBookmarkCheck, BsFillBookmarkCheckFill, BsStarHalf } from 'react-icons/bs'
import './trader_card.scss';
import {service_card_data} from '../../dummyData'
import { Link } from 'react-router-dom';
import { BaseURI } from '../../api';
import brand from '../../assets/brand.png';
// interface card {
//     photo:any,
//     name:string, 
//     service:any,
//     price:number,
//     rating:number,
//     views:number
// }
const Trader_card = ({photo, name, service, price, rating, views, id}:any) => {
    const [markbook, setMarkbook] = useState(true)
    // console.log(`${BaseURI}/images/${photo}`)
    
  return (
    <div className='trader_card'>
        <Link to={`/service-detail/${id}`} className="trader_card-details">
            <div className="trader_card-details-photo">
                <img alt="trader" src={
                    photo ?
                        `${BaseURI}/images/${photo}`
                    :
                        brand
                    } 
                />
                {}
            </div>
            <div className="trader_card-details-desc">
                <span className='trader_card-details-desc-name'>{name}</span>
                <h3  className='trader_card-details-desc-service'>{service}</h3>
                <h3 className='trader_card-details-desc-price'>${price}</h3>
                <span className="trader_card-details-desc-rate">
                    <BsStarHalf/> {rating} | {views}views
                </span>
            </div>
        </Link>
        <div className="trader_card-icons" onClick={()=> setMarkbook(prev => !prev)}>
            {markbook ? <BsBookmark/>
            : <BsFillBookmarkCheckFill/>}
        </div>
    </div>
  )
}

export default Trader_card