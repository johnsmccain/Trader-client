import React, { useEffect, useRef, useState } from 'react'
import { profile_data } from '../../../dummyData';
import { useParams } from 'react-router-dom'
import '../service.scss';
import { URLSearchParams } from 'url';
import { BsPen, BsStarHalf } from 'react-icons/bs';
import Slide from '../../../components/service_detail/slide/Slide';
import Info from '../../../components/service_detail/info/Info';
import Gallery from '../../../components/service_detail/gallery/Gallery';
import { Btn, Comments, Cta } from '../../../components';
import { getUser } from '../../../api/user';
import { useSelector } from 'react-redux';
import { upload } from '../../../api/upload';
import ServiceForm from '../serviceForm/ServiceForm';

const ServiceDetail = () => {
    const {id} = useParams()
    
    // const data = profile_data[id - 1];
    const {user} = useSelector((el:any) => el?.user);
    const [userDetails, setUserDetails]:any = useState();
    const [isLoading, setIsLoading]:any = useState(false);
    const [isEditMode, setIsEditMode]:any = useState(false);
    const gallery_pic = useRef();
    const service = useRef();
    const price = useRef();
    const tag = useRef();
    const [userData, setUserData]:any = useState({
      story: "",
      tag: "",
      service_name: "",
      price: 20,
      gallery: ""
    });

    // console.log()
    useEffect(() => {
      
      const fetch_user = async () => {
        setUserDetails(await getUser(id));
      }
      fetch_user();
    }, [])
    
    const userId = userDetails?.data?._id;
    const current_userId = user?.details?._id;
    
    // console.log(userDetails?.data.story)
    const handleSubmit = async (e:any) => {
      e.preventDefault();
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)


    }

    const handelChange = async (e:any) => {
      setUserData({...userData, [e.target.name]: e.target.value})
    }
    
    const isOwner = userId === current_userId;
    const handleXBTN = () => setIsEditMode((prev:any) => !prev)


    const Detail = (<>
          <Slide data={userDetails} photo={userDetails?.data?.story} isOwner={isOwner} handleChange={handelChange}/>
          <b onClick={handleXBTN}><BsPen/></b>
          <div className="servicedetail-desc">
              <Info data={userDetails?.data} isOwner={isOwner} handleChange={handelChange}/>
              {/* <Gallery gallery={user?.gallery} isOwner={isOwner}/> */}
              <div className="servicedetail-desc-wrapper-comments">
                  
                <Comments isOwner={isOwner}/>
              </div>
              <div className="servicedetail-desc-icon"></div>
          </div>
          {isEditMode && (id === user?.details?._id) && <ServiceForm handleXBTN={handleXBTN} currentUserId={current_userId}/>}
          {
            id !== user?.details?._id
              ? (<div className="footer">
                  <Cta 
                    left="Message"  
                    right="Book Now" 
                    leftpath={`/chat/${id}`}
                    rightpath="Book Now" 
                  />
                </div>)
              : ""
            }
        </>)
    return (
    
      <div className='servicedetail' onSubmit={handleSubmit}>

        {Detail}
        

      </div>
  )
}

export default ServiceDetail


// import React, { useState } from 'react'
// import { BsCalendar, BsMailbox2, BsPen } from 'react-icons/bs'
// import { Btn, INPUT } from '../../../components'
// import './profileForm.scss'
// import social from '../../../assets/socialA.png'
// import { useDispatch, useSelector } from 'react-redux'
// import { InputData } from './profileInput'
// import FormInput from '../../../components/form/FormInput'
// import { updateUser } from '../../../api/user'
// import { upload } from '../../../api/upload'
// import { BaseURI } from '../../../api'
// import { authFailure, authStart, authSuccess } from '../../../redux/user'
// const ProfileForm = () => {
//     const [userPix, setUserPix ]:any = useState("");
//     const {user, loading, error} = useSelector(state => state?.user);
//     const dispatch = useDispatch()
//     const {details} = user
//     // console.log(details._id)
//     const [userForm, setUserForm] = useState({
//         picture: details?.picture,
//         fullname: `${details?.firstname } ${details?.lastname}`,
//         nickname: details?.username,
//         dob: details?.dob,
//         email: details?.email,
//         phone: details?.phone,
//         address: details?.address,
//         country: details?.country,
//         about: details?.about
//     });
//     // console.log(userForm)
//     // console.log(userPix)
//     const handleChange = (data:any)=>{
//         // console.log(data.target.value)
//         setUserForm(prev=>({...prev, [data.target.name]: data.target.value}) )
//         // console.log(`change form ${data.value}`)
//         // console.log([data.name])
//         // console.log(URL.createObjectURL(data.target.files[0]))

//     }
// //  console.log(userForm)
// //  console.log(details?.dob.slice(0, 10))
//     const handleSubmit = async(e:any) => {
//         e.preventDefault();
        
//         // console.log(userForm)
//         let updatedData = {...userForm}
//         if (userPix){
//             const data = new FormData();
//             const filename = `${userForm.nickname}_${Date.now()}_${userPix.name}`
//             data.append("name", filename);
//             data.append("file", userPix);
//             updatedData = {...updatedData, picture: filename}
//             try {
//                 await upload(data);
//                 // console.log("first")
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         try {
//             dispatch(authStart())
//             const res = await updateUser(updatedData, details._id);
//             dispatch(authSuccess({details:res.data, isAdmin: res.data.isAdmin}));
//         } catch (error) {
//             console.log(error)
//             dispatch(authFailure());
//         }
        
//     }
//   return (
//     <div className='profile'>
//         <form className="profile-form" onSubmit={handleSubmit}>
//             <div className="profile-form-pic">
//                 <div className='profile-form-pic-wrapper'>

//                     <img src={
//                         userPix ?
//                            URL.createObjectURL(userPix): 
//                         details.picture ? 
//                             `${BaseURI}images/${details.picture}` 
//                         : 
//                             social 
//                         } 
//                         alt="profile" 
//                     />
//                     {/* <input type="file" id='profile-pic' name='picture' accept='image/*' onChange={handleChange}/> */}
//                     <input type="file" id='profile-pic' accept='image/*' onChange={(e:any)=> setUserPix(e.target.files[0])}/>
//                     {/* <input type="image" src={social}alt="" /> */}
//                     <label htmlFor="profile-pic"><BsPen/></label>
//                 </div>
//             </div>
//             {/* {
//                 InputData(userForm).map((data, index) =><INPUT placeholder={data.placeholder} key={index} value={data.value} name={data.name} id={data.name} type={data.type} handleChange={handleChange}/> )
//             } */}
//             {InputData(userForm).map((option, id)=>

//                 <FormInput
//                     key={id}
//                     {...option}
//                     onChange={handleChange}
//                     // label={icons[option.id - 1]}
//                 />
//                 )
//             }
//             <textarea 
//                 name="about" 
//                 id="about" 
//                 // cols="30" 
//                 // rows="10"
//                 placeholder='Tell your story...'
//                 onChange={handleChange}
//                 value={userForm?.about}
//             />
                
//             {/* </textarea> */}
          
//             <Btn 
//                 color={`${loading ? "secondary" : 'primary'}`} 
//                 variant="contained" 
//                 width="100" 
//                 text={`${loading ? "loading ": "Continue"}`} 
//                 loading={loading}
//             />
//         </form>
//     </div>
//   )
// }
