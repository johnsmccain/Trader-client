import React, { useEffect, useRef, useState } from 'react';
import { BsApple, BsCalendarDate, BsFacebook, BsGoogle, BsLock, BsLockFill, BsMailbox, BsPerson } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { Btn } from '../../../components';
import FormInput from '../../../components/form/FormInput';
import { inputOptions } from '../utils';
import "../auth.scss"
import { useDispatch, useSelector } from 'react-redux';
import { authFailure, authStart, authSuccess } from '../../../redux/user';
import { logIn } from '../../../api/auth';

type eve = {
    target: {
        name: any;
        value: (String | Number | Object | Array<{}>);
    }
}
const type="Sign in"; 
const SignIn = () => {
  const [values, setValues] = useState({
      username: "johnsmccain",
      email: "",
      birthday: "",
      password: "JOhn27@$",
      confirmPassword: ""
  });
  const IsRemembered = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user, loading} = useSelector(state=> state?.user)
//   const {user, lo} = useSelector(select => select.state);
  // const link = props.type.split(" ").join("")

  const onChange = (e:eve) => {
      
      setValues({...values, [e.target.name]: e.target.value})
      
  }
//   console.log(user?.details)
  const handleSubmit = async(e:any) => {
    e.preventDefault()
    dispatch(authStart)
    // console.log(values)
    try {
        // const da = await logIn(values)
        const user_details =(await logIn(values)).data 
        dispatch(authSuccess(await user_details))

        localStorage.setItem("user_details", JSON.stringify(user_details));
        navigate('/')

    } catch (error) {
        dispatch(authFailure());
    }

}
    

  const icons = [<BsPerson/>,<BsMailbox/>, <BsCalendarDate/>, <BsLock/>, <BsLockFill/>]
  return (
    <div className='auth'>
      <h2>Login your Account</h2>

      <form  className="auth-form" onSubmit={handleSubmit}>
            {inputOptions(values, type).map(option => (
                
                <FormInput
                key={option.id}
                {...option}
                onChange={onChange}
                label={icons[option.id - 1]}
                // value={}
                />
                
            ))}
            <Btn text={type} width="100" color='primary' variant={`${loading ? "loading" : "contained"}`} loading={loading}/>
         </form>

        <a href=''>Forget the password?</a>
        <div className="auth-icons">
            <p>or</p>
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

        </div>
        <p className="auth-footer">Don't have an acount? <Link to="/auth/register">Sign up</Link></p>
    </div>
  )
}

export default SignIn