import React, { useEffect, useState } from 'react'
import { getUsers } from '../../api/user';
import { Trader_card } from '../../components';
import { service_card_data, service_cat } from '../../dummyData';
import './workers.scss';
const Workers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await getUsers();
      setUsers(res.data);
    }
    fetch()
    return () => {
    }
  }, [])
  console.log(users[1]?._id)
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
          users?.map((data, id)=> (
            <Trader_card 
              key={id} 
              id={data?._id} 
              photo={data?.picture} 
              name={`${data?.firstname} ${data?.lastname}`} 
              service={data?.service_name} 
              price={data?.price} 
              rating={data?.rating} 
              views={data?.views} 
            />
          ))   
        }
    </div>
  )
}

export default Workers