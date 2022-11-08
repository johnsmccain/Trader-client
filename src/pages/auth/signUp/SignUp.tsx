import React, { useRef, useState } from 'react';
import { BsApple, BsCalendarDate, BsFacebook, BsGoogle, BsLock, BsLockFill, BsMailbox, BsPerson } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { Btn } from '../../../components';
import FormInput from '../../../components/form/FormInput';
import { inputOptions } from '../utils';
import '../auth.scss'
import { useDispatch, useSelector } from 'react-redux';
import { logIn, register } from '../../../api/auth';
import { authFailure, authStart, authSuccess } from '../../../redux/user';

type eve = {
    target: {
        name: any;
        value: (String | Number | Object | Array<{}>);
    }
}


const SignUp = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: ""
    });
    const IsRemembered = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newUser = useSelector(state => state?.user);
    const onChange = (e:eve) => {
        
        setValues({...values, [e.target.name]: e.target.value})
        
    }
    // console.log(newUser)
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        dispatch(authStart)
        try {
            const res =  await register(values)
            console.log(res)
            navigate('/auth/login')
        } catch (error) {
            dispatch(authFailure());
        }

    }

    const icons = [<BsPerson/>,<BsMailbox/>, <BsCalendarDate/>, <BsLock/>, <BsLockFill/>]
   const type = "Sign up"
    return (
        <div className='auth'>
            <h2 >Create your Account</h2>
            <form  className="auth-form" onSubmit={handleSubmit}>
                {inputOptions(values, type).map(option => (
                    
                    <FormInput
                    key={option.id}
                    onChange={onChange}
                    label={icons[option.id - 1]}
                    {...option}
                    />
                    
                ))}
                <span>{values.password !== values.confirmPassword && "not match"}</span>
                <Btn text={type} width="100" color='primary' variant="contained"/>
            </form>

            <div className="auth-icons">
            <p>or continue with</p>
            <div className="auth-icons_icon">
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
            <p className="auth-footer">Already have an acount? <Link to="/auth/login">Sign in</Link></p>
        </div>
        </div>
    )
}


export default SignUp