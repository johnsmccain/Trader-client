import React from 'react';
import './socialAuth.scss';
import social from '../../assets/socialA.png';
import Btn from '../../components/button/Btn';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';





const SocialAuth = () => {
  // const {Params} = useNavigate()
  const {Params} = useParams()
  console.log(Params)
  return (

    <div className='social'>
        <div className="social-top">

        </div>
        
        <div  className='social-bottom'>
          <img src={social} alt="woman sitting" />
          <h2>Let's you in</h2>
          <a href=""><BsFacebook/>Continue with Facebook</a>
          <a href=""><BsGoogle/>Continue with Google</a>
          <span>or</span>

          <Btn  color='primary' variant='contained' width='100' text='SignIn with pasword' linktopassword="login"/>
          <p >
            Don't have an account? <Link to='register'>Sign up</Link >
          </p>
        </div>

        
    </div>
  )
}

export default SocialAuth