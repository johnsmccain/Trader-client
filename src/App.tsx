import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import { ChatBox, Splashx } from './components';
import FormInput from './components/form/FormInput';
import Wrapper from './components/wrapper/Wrapper';
import {Home, SocialAuth, SignUp, ProfileForm, Offers, Services, Notifications, Bookmark, Search, Profile, Chat} from './pages';
import ServiceDetail from './pages/service/serviceDetails/ServiceDetail';
import SignIn from './pages/auth/signIn/SignIn';
import Workers from './pages/workers/Workers';
import { useDispatch, useSelector } from 'react-redux';
import NotificationSettings from './pages/notification/settings';
import { authStart, authSuccess } from './redux/user';
import Calender from './pages/calender/Calender';


function App() {

const [start_time, setStart_time] = useState(false)
const {user} = useSelector(selector => selector.user);
  const dispatch = useDispatch()
setTimeout(() => {
  if(!start_time){
    setStart_time(true) 
    let i = 1;
  }

}, 3001);

  useEffect(() => {
    try {
      dispatch(authStart());
      dispatch(authSuccess(JSON.parse(localStorage.getItem("user_details"))))
    } catch (error) {
      
    }
  
    return () => {
      
    }
  }, [])
  

  return (
 
      <div className="App">
        
      { !start_time ? <Splashx/> : <Routes>
          <Route path='/' element={<Home/> }/>
          <Route path='/offer' element={<Wrapper header="Special Offers"><Offers/></Wrapper>}/>
          {/* <Route path='/socialauth' element={<Wrapper header="Special Offers"><Offers/></Wrapper>}/> */}
          
          <Route path='/auth' element={<Home/> }/>
          <Route path='/auth/profileform' element={<ProfileForm/>}/>
          <Route path='/auth/register' element={<SignUp/>}/>
          <Route path='/auth/login' element={<SignIn/>}/>
          <Route path='/services' element={<Wrapper header="Sevices" bg="bg"><Services/></Wrapper> }/>
          <Route path='/services/:id' element={<Wrapper header="Sevices" bg="bg"><Workers/></Wrapper> }/>
          <Route path='/:id' element={<Wrapper header="Sevices" bg="bg"><Workers/></Wrapper> }/>
          <Route path='/service-detail' element={<Wrapper header="Sevices" bg="bg"><Workers/></Wrapper> }/>
          <Route path='/service-detail/:id' element={<Wrapper ><ServiceDetail/></Wrapper> }/>
          <Route path='/notifications' element={user ?<Wrapper header="Notifications" bg='bg'><Notifications/></Wrapper> : <SignIn/>}/>
          <Route path='/chat' element={user ?<Chat/>: <SignIn/>}/>
          <Route path='/chat/:id' element={user ?<Chat/>: <SignIn/>}/>
          <Route path='/calender' element={user ?<Calender/>: <SignIn/>}/>
          <Route path='/notification' element={user ?<Wrapper header="Notification" bg='bg'><NotificationSettings/></Wrapper> : <SignIn/>}/>
          <Route path='/bookmark' element={user ?<Wrapper header="My Bookmark" bg="bg"><Bookmark/></Wrapper> : <SignIn/>}/>
          <Route path='/search' element={user ?<Search/> : <SignIn/>}/>
          <Route path={`/profile/${user?.details?._id}`} element={user ? <ProfileForm/> : <SignIn/>}/>
          <Route path={`/profile`} element={user ? <Wrapper header="Profile" bg="bg"><Profile/></Wrapper> : <SignIn/>}/>
          <Route path='/log' element={user ?<FormInput/> : <SignIn/>}/>
        </Routes>}
        
        {/* <Wrapper >
          <SignUp/>
        </Wrapper> */}
        {/* <ProfileForm/> */}
        {/* <Routes>
          <Route path='/' element={!start_time && <Splashx/>}/>
          <Route path='/' element={}/>
          <Route path='/' element={}/>
          <Route path='/' element={}/>
        </Routes> */}
        {/* {start_time && <SocialAuth/>} */}
        {/* {start_time && <SignUp/>} */}
      </div>
    
  );
}

export default App;
