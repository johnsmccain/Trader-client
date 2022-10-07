import React from 'react'
import { Cta, Trader_card } from '../../components';
import { service_card_data, service_cat } from '../../dummyData';
import './bookmark.scss';
const Bookmark = () => {
  return (
    <div className="bookmark">

        <div className="home_service-option">
            <ul>
            {
                service_cat.map((d, i) => <li key={i}>{d}</li>)
            }
            <li>All</li>
            </ul>
        </div>
        {
            service_card_data.map(data => <Trader_card key={data.id} id={data.id} photo={data.photo} name={data.name} service={data.service} price={data.price} rating={data.rating} views={data.views} />)
            
        }
        <div className="bookmark__footer">
            <div className="wrap">
                <h3 className="title">Remove from Bookmark?</h3>
                    
                <Trader_card key={service_card_data[0].id} id={service_card_data[0].id} photo={service_card_data[0].photo} name={service_card_data[0].name} service={service_card_data[0].service} price={service_card_data[0].price} rating={service_card_data[0].rating} views={service_card_data[0].views} />

            <Cta left="Cancel" right="Yes, Remove"/>
            </div>

        </div>
        
    </div>
  )
}

export default Bookmark