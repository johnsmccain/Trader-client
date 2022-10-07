import React, { useRef, useState } from 'react';
import { BsApple, BsCalendarDate, BsFacebook, BsGoogle, BsLock, BsLockFill, BsMailbox, BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Btn from '../button/Btn';
import FormInput from '../form/FormInput';
import INPUT from '../input/INPUT';
import './singInOut.scss';
import { inputOptions } from './utils';
type eve = {
    target: {
        name: any;
        value: (String | Number | Object | Array<{}>);
    }
}

const SignInOut = (props:any) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: ""
    });
    const IsRemembered = useRef();

    const link = props.type.split(" ").join("")

    const onChange = (e:eve) => {
        
        setValues({...values, [e.target.name]: e.target.value})
        
    }
    const handleSubmit = (e:any) => {
        e.preventDefault()
    }
    // const handleChange= (data:any) =>{
        //     switch (data.type) {
            //         case "email":
            //             Email.current = data.value
            //             break;
            
            //         case "password":
            //             Password.current = data.value
            //             break;
            
            //         default:
            //             IsRemembered.current = data.checked
            //             break;
            //     }
            // }
            // console.log(values["username"])
            // console.log(values)
            const icons = [<BsPerson/>,<BsMailbox/>, <BsCalendarDate/>, <BsLock/>, <BsLockFill/>]
            return (
                <div className='signinout'>
        <h2 >
            {
                props.type === "Sign up"
                ? "Create your Account"
                : "Login your Account"
            }
        </h2>
        {/* <form className='signinout-form' onSubmit={(event) => {
            event?.preventDefault()
            console.log(Email.current)
            console.log(Password.current)
            console.log(IsRemembered.current)
            
        }}>
            <INPUT placeholder='Email' handleChange={handleChange}  type="email" required startIcon={<BsMailbox/>}/>
            <INPUT placeholder='Password' handleChange={handleChange}   type="password" required startIcon={<BsLock/>}/>
            <INPUT  type="checkbox" handleChange={handleChange}  required={false} label='Remember me'/>
            

        </form> */}

        <form  className="signinout-form" onSubmit={handleSubmit}>
            {inputOptions(values, props.type).map(option => (
                <FormInput
                key={option.id}
                {...option}
                onChange={onChange}
                label={icons[option.id - 1]}
                value={values[option.name]}
                />
            ))}
            <Btn text={props.type} width="100" color='primary' variant="contained"/>
         </form>

        {props.type !== "Sign up" && <a href=''>Forget the password?</a>}
        <div className="signinout-icons">
            <p>{props.type !== "Sign up" ? "or continue with" : 'or'}</p>
            <div className="signinout-icons_icon">
                <Link to="/auth">
                    <BsFacebook/> 
                </Link>
                <Link to="/auth">
                    <BsGoogle/> 
                </Link>
                <Link to="/auth">
                    <BsApple/> 
                </Link>
               
            </div>

        </div>
        {
            props.type === "Sign up"
            ?<p className="signinout-footer">Already have an acount? <Link to="/auth/login">Sign in</Link></p>
            :<p className="signinout-footer">Don't have an acount? <Link to="/auth/register">Sign up</Link></p>
        }
        
         
    </div>
  )
}

export default SignInOut