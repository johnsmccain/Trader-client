import React, { useState } from 'react'
import { BsBookmark, BsBookmarkCheck, BsStarHalf } from 'react-icons/bs'
import './trader_card.scss';
import {service_card_data} from '../../dummyData'

// interface card {
//     photo:any,
//     name:string, 
//     service:any,
//     price:number,
//     rating:number,
//     views:number
// }
const Trader_card = ({photo, name, service, price, rating, views, }:any) => {
    const [markbook, setMarkbook] = useState(true)
  return (
    <div className='trader_card'>
        <div className="trader_card-details">
            <div className="trader_card-details-photo">
                <img src={photo} alt="trader" />
            </div>
            <div className="trader_card-details-desc">
                <span className='trader_card-details-desc-name'>{name}</span>
                <h3  className='trader_card-details-desc-service'>{service}</h3>
                <h3 className='trader_card-details-desc-price'>${price}</h3>
                <span className="trader_card-details-desc-rate">
                    <BsStarHalf/> {rating} | {views}views
                </span>
            </div>
        </div>
        <div className="trader_card-icons" onClick={()=> setMarkbook(prev => !prev)}>
            {markbook ? <BsBookmark/>
            : <BsBookmarkCheck/>}
        </div>
    </div>
  )
}

export default Trader_card