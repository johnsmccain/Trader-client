import React from 'react'
import './gallery.scss';
const Gallery = ({gallery}:any) => {
  return (
    <div className="gallery">
        <h3 className="gallery-title">Photo & Videos</h3>
        <ul className="gallery-media">
            {
                gallery.slice(0,3).map((d:any, i:number)=> <li key={i}><img src={d} alt="" /></li>  )
            }
        </ul>
    </div>
  )
}

export default Gallery