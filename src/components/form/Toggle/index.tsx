import React, { useState } from 'react'
import "../form.scss";
const FormToggle = (props:any) => {
    const [toggler, setToggler] = useState(false);
    // console.log(type)
    // handleChange(toggler);
  const handleChange = () => {
    props.handleClick( toggler, props?.type);
    setToggler(prev => !prev);
    console.log(props.values[props.type])
    console.log()
  }
  return (
    <div className="form-toggle">
        <b>{props?.name}</b>
        <label
        
            className={`form-toggle__toggler ${props.values[props.type] ? "left" : "right"}` }
            onClick={handleChange} 
            // name={type}
        >
            <div className="form-toggle__toggler-ball" />
        </label >
    </div>
  )
}

export default FormToggle