import React from 'react';
import { Link } from 'react-router-dom';
import { Services } from '../../../components';
import { service_cat2 } from '../../../dummyData';
import './serviceCatList.scss';



const SeviceCatList = () => {
  return (
    <div className='services'>
      <ul className="services-list">
        {
          service_cat2.map(
            (d, i) => (
              <Link 
                to={d.link}
                key={d.id} 
              >
                <Services 
                  name={d.title} 
                  icon={d.icon} 
                  color={d.bg}
                /> 
              </Link>
            ) 
          )
        }
      </ul>
    </div>
  )
}

export default SeviceCatList