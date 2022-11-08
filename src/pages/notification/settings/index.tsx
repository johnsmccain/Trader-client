import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { get_settings, update_settings } from '../../../api/settings'
import FormToggle from '../../../components/form/Toggle'
import { settings_data } from './data'
const NotificationSettings = () => {
  const {user} = useSelector(state => state?.user);
  // let settings = {};
  const [settings, setsettings] = useState(
    {
      general: false,
      sound: false,
      vibrate: false,
      offers: false,
      promo: false,
      payment: false,
      cashback: false,
      update: false,
      new_service: false,
      new_tips: false,
  })
  const {details} = user;
  useEffect(() => {

    const fetch_settings = async() => {
      let local_settings = ((await get_settings(details.settings_id)).data.setting)
      setsettings(local_settings);
      // localStorage.setItem("settings", JSON.stringify(local_settings))
    }
    return () => {
      fetch_settings();

    }
  }, [])
  
  const handelChange = (e:any) => {
    console.log(e.target)

  } 
  const handelClick = async(value:any, type:any) => {
    // console.log(value)
    // console.log(type)
    setsettings({...settings, [type]: value})
    await update_settings(details.settings_id, settings);

  } 
 
  // console.log(settings)
  return (
    <div>
      {settings_data.map((item) => <FormToggle key={item.id} name={item.name} values={settings}  type={item.type} handleClick={handelClick} />)}
      
    </div>
  )
}

export default NotificationSettings