import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { BaseURI } from '../../api';
import { getUser } from '../../api/user';
import brand from '../../assets/brand.png';
const Conversation = ({data}:any) => {
  const user = useSelector(e => e);
  // console.log(`${BaseURI}/images/${user?.picture }`)
  const [current_user, setcurrent_user] = useState()
  useEffect(() => {

    const userId = user?.user?.user?.details._id
    const current_userId = data?.members?.find((e:any) => e !== userId)

    const fetch_data = async () =>{
      const res = await getUser(current_userId);
      setcurrent_user(res?.data);
    } 
    fetch_data()
  }, [])
  

  return (
    <div>
      <div className="follower conversation">
        <div>
            <div className="online-dot"></div>
            <img 
                src={current_user?.picture? `${BaseURI}/images/${current_user?.picture }`: brand} 
                alt="profile" className="follwer-img"
                style={{width: 50, height: 50, borderRadius:"50%", objectFit:"cover"}} />
            <div className="name">
                <span>{current_user?.firstname} {current_user?.lastname}</span>
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
