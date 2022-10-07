import React, { useState } from 'react'
import './slide.scss';
import styled from 'styled-components';


const Wrapper = styled.div`
    display: flex;
    transform: translateX(${(props:any) => props.slideIndex * -100}vw);
    width: 100vw;
`
const Slide = ({photo}:any) => {
    
    const [index, setIndex] = useState(0);
    let total = photo.length -1
    
    const handleNext = (direction:any) =>{
        if (  direction === 'l'){
            setIndex((prev:number) => prev > 0 ? prev - 1 : total)
        }else {
            setIndex((prev:number) => prev < total ? prev + 1 : 0)
    
        } 
    }

    return (
        <div className="slide">
            <Wrapper slideIndex={index}>

                {
                    photo.map((img:any, i:any) => <img src={img} key={i} alt="profile" />)
                }
            {/* <img src={photo[index]} alt="profile" /> */}
            </Wrapper>
        
            <div className="slide-group-btn">
                <button onClick={()=>handleNext("l")} className='slide-group-btn-prev'>{`<`}</button>
                <button onClick={()=>handleNext("r")} className='slide-group-btn-next'>{`>`}</button>
            </div>
        </div>
    )
}

export default Slide