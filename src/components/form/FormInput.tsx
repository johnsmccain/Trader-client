import React, { useState } from 'react'
import "./form.scss";
const FormInput = (props:any) => {
  const [focused, setFocused] = useState(false)
  const {label, errorMessage, onChange, ...inputProps} = props;

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
          autoComplete='off'

          />  
        <span >{errorMessage}</span>
      </div>
    </div>
  )
}

export default FormInput