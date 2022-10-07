import React from 'react'
import './comments.scss';
import { service_card_data}from '../../../dummyData'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCommentDots, faDotCircle, faHeart, faMessage, faStar } from '@fortawesome/free-solid-svg-icons'
import Btn from '../../button/Btn';
import Comment from './comment/Comment';
const Comments = () => {
  return (
    <div className='comment'>
           
        <div className="home_service-option">
            <ul>
                <li> <FontAwesomeIcon className='icon' icon={faStar}/> All</li>
            {
                [1,2,3,4,5].map((d, i) => <li key={i}><FontAwesomeIcon className='icon' icon={faStar}/> {d}</li>)
            }
            </ul>
        </div>

        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        
    </div>
  )
}

export default Comments