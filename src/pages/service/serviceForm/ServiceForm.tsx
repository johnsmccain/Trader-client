import React, { useEffect, useState } from 'react'
import { BsCamera, BsCameraVideo, BsImage, BsX } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { upload, upload_gallery } from '../../../api/upload';
import { getUser, updateUser } from '../../../api/user';
import { Btn, Cta } from '../../../components';
import FormInput from '../../../components/form/FormInput';
import '../service.scss';


const ServiceForm = ({handleXBTN, currentUserId}:any) => {
  const [storyPic, setStoryPic] = useState()
  const [galleryPic, setGalleryPic] = useState()
  
  const state = useSelector(state => state?.user);

  const [userData, setUserData] = useState({
    fullname:'',
    service_name: "",
    tag: "",
    story: "",
    gallery:"",
    price:NaN
  });
  console.log(typeof(userData.price))
    useEffect(() => {
      // first
      setUserData({...userData, price:32})
      const user_fullname =async () => {
        const res = await (await getUser(state.user.details._id)).data
        console.log(res.lastname)
        console.log(res.firstname)
        setUserData((prev) => ({...prev, fullname: `${res.firstname} ${res.lastname}`}))

      } 
      user_fullname()
      return () => {
        // second
      }
    }, [])
    
  const handleChange = (e:any) => {
    const name = (e.target.name)
    let value:(String | Number) = (e.target.value)
    if (name === "price"){
      setUserData({...userData, [name]: Number(value)})
    }else{
      setUserData({...userData, [name]: (value)})
    }
  }
  // console.log(userData)
  const handleSubmit = async (e:any) => {
    e.preventDefault();
        // console.log(userData);/
    let user_file = {};
    if (galleryPic){
      const data = new FormData();
      const filename = (`gallery${Date.now()}${galleryPic?.name}`).split(" ").join("")
      data.append("name", filename);
      data.append("file", galleryPic)
      // console.log(filename)
      // console.log(data)
      await upload(data);
      user_file = {
        ...user_file,
        gallery: filename
      }
    }
    if (storyPic){
      const data = new FormData();
      const filename = (`story${Date.now()}${storyPic?.name}`).split(" ").join("")
    
      data.append("name", filename);
      data.append("file", storyPic)
      const res = await upload(data);
      user_file = {
        ...user_file,
        story: filename
      }
      // console.log(res)
    } 
    // console.log({...userData, ...user_file}
      // , state.user.details._id)
      const res = await updateUser(
        {...userData, ...user_file}
        , state.user.details._id
      )
      console.log(res)
  }  
    
  return (
    <form className='service-form' onSubmit={handleSubmit}>
        <div className="service-form__overlay">

            <label className='label' htmlFor="file"><BsImage/></label>
            <span>Story</span>
            <FormInput 
              name="story" 
              accept="image/*" 
              onChange={(e:any) => setStoryPic(e.target.files[0])}  
              type='file' 
              id="file" 
              style={{display: "none"}}
            />
            <label className='label' htmlFor="gallery"><BsCameraVideo/></label>
            <span>Gallery</span>
            <FormInput 
              name="gallery" 
              accept="image/*" 
              onChange={(e:any) => setGalleryPic(e.target.files[0])}  
              type="file" 
              id="gallery" 
              className="hide" 
              style={{display: "none"}}
            />
            <FormInput name="service_name"  onChange={handleChange} placeholder={"Title"}/>
            <FormInput name="price" onChange={handleChange}  type="number" placeholder="(Floor) Price"/>
            <select name="tag" id="tag" onChange={handleChange} >
                <option value="" disabled selected>Category</option>
                <option value="cleaning">Cleaning</option>
                <option value="repairing">Repairing</option>
                <option value="painting">Painting</option>
                <option value="laundry">Laundry</option>
                <option value="appliance">Appliance</option>
                <option value="plumbing">Plumbing</option>
                <option value="shifting">Shifting</option>
                <option value="beauty">Beauty</option>
                <option value="ac_repairing">AC Repairing</option>
                <option value="vehicle">Vehicle</option>
                <option value="electronics">Electronics</option>
                <option value="massage">Massage</option>
                <option value="men_salon">Men Salon</option>
            </select>
            {/* <Cta/> */}
        </div>
            {/* <Btn/> */}
        <div className="service-form__btn">

            <Btn 
                color={`${ 'primary'}`} 
                variant="contained" 
                width="100" 
                text={`${ "Continue"}`} 
                // loading={loading}
                className="service-btn"
                />
        </div>

        <span className='spanX' onClick={handleXBTN}><BsX/></span>
    </form>
  )
}

export default ServiceForm