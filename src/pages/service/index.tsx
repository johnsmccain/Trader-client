import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import "./service.scss";
import ServiceDetail from './serviceDetails/ServiceDetail';
const index = () => {
  return (
    <div>
        
        <Routes>
            <Route path="/:id" element={<ServiceDetail/>}/>
        </Routes>
    </div>
  )
}

export default index