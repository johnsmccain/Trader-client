import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import { Splashx } from './components';
import Wrapper from './components/wrapper/Wrapper';
import {Home, SocialAuth, SignUp, ProfileForm, Offers, Services} from './pages';
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
          <Route path='/auth/signup' element={<SignUp/>}/>
          <Route path='/auth/signin' element={<SignIn/>}/>
          <Route path='/services' element={<Wrapper header="Sevices"><Services/></Wrapper>}/>
          <Route path='/services/:id' element={<Wrapper header="Sevices"><Workers/></Wrapper>}/>
          <Route path='/:id' element={<Wrapper header="Sevices"><Workers/></Wrapper>}/>
          <Route path='/workers' element={<Wrapper header="Sevices"><Workers/></Wrapper>}/>
          {/* <Route path='/:id' element={<Wrapper header="Sevices"><ServiceList/></Wrapper>}/> */}
          {/* <Route path='/services/:id' element={<Wrapper header="Sevices"><ServiceList/></Wrapper>}/> */}
        </Routes>}
        
        {/*  */}
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
