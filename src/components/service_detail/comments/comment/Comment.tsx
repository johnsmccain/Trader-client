import { faCommentDots, faHeart, faHeartbeat, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { service_card_data } from '../../../../dummyData'

const Comment = () => {
    const [isLiked, setIsLiked] = useState(false)
  return (
    <div className="comment-wrap">
            <div className="head">
                <div className="left">
                    <div className="photo">
                        <img src={service_card_data[1].photo} alt="" />
                    </div>
                    <h3 className="name">Thod Eddings</h3>
                </div>
                <div className="right">
                    <button>
                        <FontAwesomeIcon className='icon' icon={faStar}/>
                        <span>5</span>
                    </button>
                    
                        <FontAwesomeIcon icon={faCommentDots}/>
                    
                </div>
            </div>
            <div className="body">
                <p className="text">The workers are very professional and the results are very satisfying! I like it very much!</p>
            </div>
            <div className="foot">
                <div><FontAwesomeIcon onClick={()=> setIsLiked(prev => !prev)} className='icon' icon={isLiked ? faHeartbeat : faHeart}/> <span>789</span></div>
                <span>1 weeks ago</span>
            </div>
        </div>
  )
}

export default Comment