import React from 'react'
import './carousel.scss'


import Card from './card/Card'
import { intro } from '../../dummyData'
const Carousel = () => {
  const totalCarousel = intro.length -1
  return (
    <div className='carousel'>

      {
        intro.map((c)=> <Card pix={c.pic}id={c.id} desc={c.desc} key={c.id} last={totalCarousel}/>)
      }
      
    </div>
  )
}

export default Carousel