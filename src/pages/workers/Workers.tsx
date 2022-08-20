import React from 'react'
import { Trader_card } from '../../components';
import { service_card_data, service_cat } from '../../dummyData';
import './workers.scss';
const Workers = () => {
  return (
    <div className='workers'>
        <div className="home_service-option">
            <ul>
            {
                service_cat.map((d, i) => <li key={i}>{d}</li>)
            }
            <li>All</li>
            </ul>
        </div>
        {
            service_card_data.map(data => <Trader_card key={data.id} photo={data.photo} name={data.name} service={data.service} price={data.price} rating={data.rating} views={data.views} />)
            
        }
    </div>
  )
}

export default Workers