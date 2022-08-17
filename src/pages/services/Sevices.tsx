import { faBroom, faBrush, faBuilding, faHandsWash, faPaintRoller, faPlug, faTools, faTruck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Services } from '../../components';
import { service_cat2 } from '../../dummyData';
import './services.scss';
const icons =[faBroom, faBrush, faBuilding, faHandsWash, faPlug, faTools, faTruck, faPaintRoller];

const Sevices = () => {
  return (
    <div className='services'>
      <ul className="services-list">
        {
                service_cat2.slice(1,).map((d, i) => <Services keys={d.id} name={d.title} icon={icons[i]} color={d.bg}/>)
        }
      </ul>
    </div>
  )
}

export default Sevices