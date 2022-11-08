import React, { useRef, useState } from 'react'
import { BsPinMapFill, BsStarHalf } from 'react-icons/bs';
import { updateUser } from '../../../api/user';
import './info.scss';
const Info = ({data, isOwner, handleChange}:any) => {
    const [editMode, setEditMode] = useState(false)
    const serviceRef = useRef();
    const tagRef = useRef();
    const priceRef = useRef();
    const info_data = {
        [serviceRef?.current?.name]: serviceRef?.current?.value,
        [priceRef?.current?.name]: priceRef?.current?.value,
        [tagRef?.current?.name]: tagRef?.current?.value
    }
    // console.log(tagRef.current.name)
    const handleSubmit = async () => {
        // console.log(info_data)
        const res = await updateUser(data._id, info_data);
        console.log(res)
    }
  return (
    <div className='info'>
        <h2 className="info-service">
            {data?.service_name}
        </h2>
            <div className="info-wrapper">
                <h3 className="info-wrapper-name">{`${data?.firstname} ${data?.lastname}`}</h3>
                <span className="info-wrapper-rating"><BsStarHalf/>{data?.rating}({data?.views} reviews)</span>
            </div>
            <div className="info-wrapper">
                <h3 className="info-wrapper-tag">
                   {data?.tag}
                </h3>
                <span className="info-wrapper-location"><BsPinMapFill/>{data?.address}</span>
            </div>
            <h2 className="info-price">
                ${data?.price}
            </h2>

            <hr className="info-line" />

            <div className="info-wrapper-about">
                <h3 className="info-wrapper-about-title">About me</h3>
                <p className="info-wrapper-about-text">
                    {data?.about}
                </p>
            </div>
    </div>
  )
}

export default Info