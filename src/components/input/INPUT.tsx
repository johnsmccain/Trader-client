import React, { useState, useRef, useEffect } from 'react';
import  './input.scss';
const INPUT = (props:any) => {
    // const [value, setValue] = useState(false)
    
   
    
    return (
        <div className='input'>
            <span  className='input-startIcon'>{props?.startIcon}</span>
            {

            props.type !== "checkbox" && 
            <input 
                className='input-control'
                type={props?.type} 
                required={props?.required }
                placeholder={props.placeholder}
                onChange={(e:any) => props.handleChange( e.target)}
                name={props?.name}
                // id={props.label}
            />
        }
        <span className='input-endIcon'>{props?.endIcon}</span>
            {
                props.label && <label
                    className='input-label' 
                    htmlFor={props.label}
                    >
                        <input 
                            className='input-control-box'
                            type={props?.type} 
                            onChange={(e:any)=>props.handleChange( e.target)}
                            id={props.label}
                        />
                        {props.label}
                    </label>
            }
        </div>
    )
}

export default INPUT