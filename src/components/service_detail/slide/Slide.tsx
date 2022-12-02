import React, { useEffect, useRef, useState } from 'react'
import './slide.scss';
import styled from 'styled-components';
import { BsArrowLeft, BsArrowRight, BsPlusCircle } from 'react-icons/bs';
import { BaseURI } from '../../../api';


const Wrapper = styled.div`
    display: flex;
    transform: translateX(${(props:any) => props.slideIndex * -100}vw);
    width: 100vw;
`
const Slide = ({photo, handleChange, data}:any) => {
//    console.log(photo)   
    const [index, setIndex] = useState(0);
    const [newPhoto, setNewPhoto] = useState();
    const [photos, setPhotos] = useState(photo);
    const story_pic = useRef();
    
        
    let total = photos?.length -1
    const handleNext = (direction:any) =>{
        if (  direction === 'l'){
            setIndex((prev:number) => prev > 0 ? prev - 1 : total)
        }else {
            setIndex((prev:number) => prev < total ? prev + 1 : 0)
    
        } 
    }
    // console.log(`${BaseURI}/images/${photo}`)

    // const handleChange = async (e:any) => {
    //     // console.log(e.target.files[0])
    //     console.log(e.target.files[0])
    // }
    return (
        <div className="slide">
            <Wrapper slideIndex={index}>

                {/* {
                    photos?.map((img:any, i:any) => <img src={`${BaseURI}/images/${img}`} key={i} alt="profile" />)
                } */}
                <img src={`${BaseURI}/images/${data?.data?.picture}`} alt="profile" />
                {/* <div className="slide-input">
                    <label htmlFor="photo"><BsPlusCircle/></label>
                    <input 
                        type="file" 
                        name="story" 
                        accept='image/*' 
                        id="photo" 
                        // ref={story_pic}
                        style={{display: "none"}}
                        onChange={handleChange}
                    />
                </div> */}
            {/* <img src={photo[index]} alt="profile" /> */}
                
            </Wrapper>
            
            <div className="slide-group-btn">
                <span onClick={()=>handleNext("l")} className='slide-group-btn-prev  btn'><BsArrowLeft/></span>
                <span onClick={()=>handleNext("r")} className='slide-group-btn-next btn'><BsArrowRight/></span>
            </div>
        </div>
    )
}

export default Slide