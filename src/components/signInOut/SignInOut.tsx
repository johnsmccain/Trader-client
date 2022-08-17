import React, { useRef } from 'react';
import { BsApple, BsFacebook, BsGoogle, BsLock, BsMailbox } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Btn from '../button/Btn';
import INPUT from '../input/INPUT';
import './singInOut.scss';
const SignInOut = (props:any) => {
    const Email = useRef()
    const Password = useRef()
    const IsRemembered = useRef()
    const link = props.type.split(" ").join("")
    // console.log(link)
    const handleChange= (data:any) =>{
        switch (data.type) {
            case "email":
                Email.current = data.value
                break;
                
            case "password":
                Password.current = data.value
                break;
        
            default:
                IsRemembered.current = data.checked
                break;
        }
    }
  return (
    <div className='signinout'>
        <h2 >
            {
                props.type === "Sign up"
                ? "Create your Account"
                : "Login your Account"
            }
        </h2>
        <form className='signinout-form' onSubmit={(event) => {
            event?.preventDefault()
            console.log(Email.current)
            console.log(Password.current)
            console.log(IsRemembered.current)
            
        }}>
            <INPUT placeholder='Email' handleChange={handleChange}  type="email" required startIcon={<BsMailbox/>}/>
            <INPUT placeholder='Password' handleChange={handleChange}   type="password" required startIcon={<BsLock/>}/>
            <INPUT  type="checkbox" handleChange={handleChange}  required={false} label='Remember me'/>
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
            ?<p className="signinout-footer">Already have an acount? <Link to="/auth/signin">Sign in</Link></p>
            :<p className="signinout-footer">Don't have an acount? <Link to="/auth/signup">Sign up</Link></p>
        }
        
    </div>
  )
}

export default SignInOut