export const  InputData = (userForm:any )=> {
    return [
    {
        name: "nickname",
        type: 'text',
        placeholder: 'Nick Name',
        value: userForm.nickname
    },
    {
        name: "fullname",
        type: 'text',
        placeholder: 'Full Name',
        value: userForm.fullname
    },
    // {
    //     name: "fullname",
    //     type: 'text',
    //     placeholder: 'Full Name',
    //     value: userForm.fullname
    // },
    {
        name: "dob",
        type: 'date',
        placeholder: 'Date of birth',
        value: userForm?.dob?.slice(0, 10)
    },
    {
        name: "email",
        type: 'email',
        placeholder: 'Email',
        value: userForm.email
    },
    {
        name: "phone",
        type: 'number',
        placeholder: 'Phone Number',
        value: userForm.phone
    },
    {
        name: "address",
        type: 'text',
        placeholder: 'Address',
        value: userForm.address
    },
    {
        name: "country",
        type: 'text',
        placeholder: 'Nationality',
        value: userForm.country
    },

]}