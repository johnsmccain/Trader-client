import React from 'react'
import { OfferCard } from '../../components'
import {offer_data} from '../../dummyData';
import './offers.scss'

const Offers = () => {
  return (
    <div className='offers'>
        {offer_data.map(x => (
          <div key={x.id} className='offers-card'>
            <OfferCard discount={x.discount} title={x.title} desc={x.desc} photo={x.photo} color={x.bg}/> 
          </div>
        ))}
    </div>
  )
}

export default Offers