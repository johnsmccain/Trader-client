import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import { Splashx } from './components';
import FormInput from './components/form/FormInput';
import Wrapper from './components/wrapper/Wrapper';
import {Home, SocialAuth, SignUp, ProfileForm, Offers, Services, Notifications, Bookmark, Search} from './pages';
import ServiceDetail from './pages/serviceDetails/ServiceDetail';
import ServiceList from './pages/serviceList/ServiceList';
import SignIn from './pages/signIn/SignIn';
import Workers from './pages/workers/Workers';


function App() {

const [start_time, setStart_time] = useState(false)
setTimeout(() => {
  if(!start_time){
    setStart_time(true) 
    let i = 1;
  }

}, 3001);
const isLogin = true;
const ifFirstTime = true;

  return (
 
    
      <div className="App">
        
      { !start_time ? <Splashx/> : <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/offer' element={<Wrapper header="Special Offers"><Offers/></Wrapper>}/>
          {/* <Route path='/socialauth' element={<Wrapper header="Special Offers"><Offers/></Wrapper>}/> */}
          
          <Route path='/auth' element={<SocialAuth/>}/>
          <Route path='/auth/profileform' element={<ProfileForm/>}/>
          <Route path='/auth/register' element={<SignUp/>}/>
          <Route path='/auth/login' element={<SignIn/>}/>
          <Route path='/services' element={<Wrapper header="Sevices" bg="bg"><Services/></Wrapper>}/>
          <Route path='/services/:id' element={<Wrapper header="Sevices" bg="bg"><Workers/></Wrapper>}/>
          <Route path='/:id' element={<Wrapper header="Sevices" bg="bg"><Workers/></Wrapper>}/>
          <Route path='/service-detail' element={<Wrapper header="Sevices" bg="bg"><Workers/></Wrapper>}/>
          <Route path='/service-detail/:id' element={<Wrapper ><ServiceDetail/></Wrapper>}/>
          <Route path='/notifications' element={<Wrapper header="Notifications" bg='bg'><Notifications/></Wrapper>}/>
          <Route path='/bookmark' element={<Wrapper header="My Bookmark" bg="bg"><Bookmark/></Wrapper>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/log' element={<FormInput/>}/>
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
