import React, { useState } from 'react'
import "./formInput.scss";
const FormInput = (props:any) => {
  const [focused, setFocused] = useState(true)
  const {label, errorMessage, onChange, id, ...inputProps} = props;

  const handleFocus = (e:Object) =>{
    setFocused(true);
  }
  return (
    <div className="form__input">
      <div className="form__wrap " itemProp={focused.toString()}>

        <label htmlFor="">{label}</label>
        <input 
          className='form__input-control'
          onChange={onChange}
          
          onBlur={handleFocus}
          onFocus={()=> inputProps.name === "confirmPassword" && setFocused(true) }
          {...inputProps}
          focused={focused.toString()}
          />  
      </div>
        <span >{errorMessage}</span>
    </div>
  )
}

export default FormInput