import React, { useState } from 'react'
import { BsCalendar, BsMailbox2, BsPen } from 'react-icons/bs'
import { Btn, INPUT } from '../../../components'
import './profileForm.scss'
import social from '../../../assets/socialA.png'
import { useDispatch, useSelector } from 'react-redux'
import { InputData } from './profileInput'
import FormInput from '../../../components/form/FormInput'
import { updateUser } from '../../../api/user'
import { upload } from '../../../api/upload'
import { BaseURI } from '../../../api'
import { authFailure, authStart, authSuccess } from '../../../redux/user'
const ProfileForm = () => {
    const [userPix, setUserPix ]:any = useState("");
    const {user, loading, error} = useSelector(state => state?.user);
    const dispatch = useDispatch()
    const {details} = user
    // console.log(details)
    const [userForm, setUserForm] = useState({
        picture: details?.picture,
        fullname: `${details?.firstname } ${details?.lastname}`,
        nickname: details?.username,
        dob: details?.dob,
        email: details?.email,
        phone: details?.phone,
        address: details?.address,
        country: details?.country,
        about: details?.about
    });
    // console.log(userForm)
    // console.log(userPix)
    const handleChange = (data:any)=>{
        // console.log(data.target.value)
        setUserForm(prev=>({...prev, [data.target.name]: data.target.value}) )
        // console.log(`change form ${data.value}`)
        // console.log([data.name])
        // console.log(URL.createObjectURL(data.target.files[0]))

    }
//  console.log(userForm)
//  console.log(details?.dob.slice(0, 10))
    const handleSubmit = async(e:any) => {
        e.preventDefault();
        
        // console.log(userForm)
        let updatedData = {...userForm}
        if (userPix){
            const data = new FormData();
            const filename = `${userForm.nickname}_${Date.now()}_${userPix.name}`
            data.append("name", filename);
            data.append("file", userPix);
            updatedData = {...updatedData, picture: filename}
            try {
                await upload(data);
                // console.log("first")
            } catch (error) {
                console.log(error)
            }
        }
        try {
            dispatch(authStart())
            const res = await updateUser(updatedData, details._id);
            dispatch(authSuccess({details:res.data, isAdmin: res.data.isAdmin}));
        } catch (error) {
            console.log(error)
            dispatch(authFailure());
        }
        
    }
  return (
    <div className='profile'>
        <form className="profile-form" onSubmit={handleSubmit}>
            <div className="profile-form-pic">
                <div className='profile-form-pic-wrapper'>

                    <img src={
                        userPix ?
                           URL.createObjectURL(userPix): 
                        details.picture ? 
                            `${BaseURI}images/${details.picture}` 
                        : 
                            social 
                        } 
                        alt="profile" 
                    />
                    {/* <input type="file" id='profile-pic' name='picture' accept='image/*' onChange={handleChange}/> */}
                    <input type="file" id='profile-pic' accept='image/*' onChange={(e:any)=> setUserPix(e.target.files[0])}/>
                    {/* <input type="image" src={social}alt="" /> */}
                    <label htmlFor="profile-pic"><BsPen/></label>
                </div>
            </div>
            {/* {
                InputData(userForm).map((data, index) =><INPUT placeholder={data.placeholder} key={index} value={data.value} name={data.name} id={data.name} type={data.type} handleChange={handleChange}/> )
            } */}
            {InputData(userForm).map((option, id)=>

                <FormInput
                    key={id}
                    {...option}
                    onChange={handleChange}
                    // label={icons[option.id - 1]}
                />
                )
            }
            <textarea 
                name="about" 
                id="about" 
                // cols="30" 
                // rows="10"
                placeholder='Tell your story...'
                onChange={handleChange}
                value={userForm?.about}
            />
                
            {/* </textarea> */}
          
            <Btn 
                color={`${loading ? "secondary" : 'primary'}`} 
                variant="contained" 
                width="100" 
                text={`${loading ? "loading ": "Continue"}`} 
                loading={loading}
            />
        </form>
    </div>
  )
}

export default ProfileForm