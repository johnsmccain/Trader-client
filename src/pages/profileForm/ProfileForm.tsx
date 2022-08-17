import React, { useState } from 'react'
import { BsCalendar, BsMailbox2, BsPen } from 'react-icons/bs'
import { Btn, INPUT } from '../../components'
import './profileForm.scss'
import social from '../../assets/socialA.png'
const ProfileForm = () => {
    const [userPix, setUserPix ]:any = useState(social)
    const [userForm, setUserForm] = useState({

        pix: social,
        fullname: '',
        nickname: '',
        dob: null,
        email: '',
        phone: 12334439,
        address: ''
    });
    console.log(userForm)
    console.log(userPix)
    const handleChange = (data:any)=>{
        console.log(data.name)
        console.log(data.value)
        setUserForm(prev=>({...prev, [data.name]: data.value}) )

        // switch (data.placeholder) {
        //     case "Full Name":
        //         setUserForm({...userForm, fullName: data.value})
        //         break;
        //     case "Nickname":
        //         setUserForm({...userForm, nickName: data.value})    
        //         break;
        //     case "DoB":
        //         setUserForm({...userForm, dob: data.value})    
                    
        //         break;
        //     case "Email":
        //         setUserForm({...userForm, email: data.value})    
                        
        //         break;
        //     case "Phone Number":
        //         setUserForm({...userForm, phone: data.value})    
                
        //         break;
        //     case "Address":
        //         setUserForm({...userForm, address: data.value})    
                
        //         break;
        
        //     default:
        //         break;
        // }
    }
    const InputData = [
        {
            name: "fullname",
            type: 'text',
            placeholder: 'Full Name'
        },
        {
            name: "nickname",
            type: 'text',
            placeholder: 'Nick Name'
        },
        {
            name: "dob",
            type: 'date',
            placeholder: 'Date of birth'
        },
        {
            name: "email",
            type: 'email',
            placeholder: 'Email'
        },
        {
            name: "phone",
            type: 'number',
            placeholder: 'Phone Number'
        },
        {
            name: "address",
            type: 'text',
            placeholder: 'Address'
        }
    ]
  return (
    <div className='profile'>
        <form className="profile-form">
            <div className="profile-form-pic">
                <div className='profile-form-pic-wrapper'>

                    <img src={userPix} alt="profile" />
                    <input type="file" id='profile-pic' onChange={(e:any)=> setUserPix(e.target.files[0])}/>
                    {/* <input type="image" src={social}alt="" /> */}
                    <label htmlFor="profile-pic"><BsPen/></label>
                </div>
            </div>
            {
                InputData.map((data, index) =><INPUT placeholder={data.placeholder} key={index} name={data.name} id={data.name} type={data.type} handleChange={handleChange}/> )
            }
            {/* <INPUT placeholder='Full Name' name='fullname' id='fullname'  type="text" handleChange={handleChange}/>
            <INPUT placeholder='Nickname' name='nickname'  type="text" handleChange={handleChange}/>
            <INPUT placeholder='DoB' name='dob' type="date" handleChange={handleChange} />
            <INPUT placeholder='Email' name='email'  endIcon={<BsMailbox2/>} handleChange={handleChange} type="email"/>
            <INPUT placeholder='Phone Number'  name='phone' type="tel" handleChange={handleChange}/>
            <INPUT placeholder='Address' name='address'  type="text" handleChange={handleChange}/> */}
            <Btn color='primary' variant="contained" width="100" text="Continue"/>
        </form>
    </div>
  )
}

export default ProfileForm