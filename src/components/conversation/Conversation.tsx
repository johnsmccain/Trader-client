import React from 'react'
import { BaseURI } from '../../api';
import brand from '../../assets/brand.png';
const Conversation = ({data}:any) => {
  // console.log(`${BaseURI}/images/${user?.picture }`)

  return (
    <div>
      <div className="follower conversation">
        <div>
            <div className="online-dot"></div>
            <img 
                src={data?.picture? `${BaseURI}/images/${data?.picture }`: brand} 
                alt="profile" className="follwer-img"
                style={{width: 50, height: 50, borderRadius:"50%", objectFit:"cover"}} />
            <div className="name">
                <span>{data?.firstname} {data?.lastname}</span>
                <div className="msg">how are you?</div>
            </div>
        </div>
        <span className='badge'>2</span>
      </div>
      <hr style={{width: "85%", border:"0.1rem solid #ececec"}}/>
    </div>
  )
}

export default Conversation
