import { BsApple, BsFacebook, BsGoogle, BsLock, BsMailbox } from 'react-icons/bs';


type Prop = {
    username: String;
    email: String;
    birthday: String;
    password: any;
    confirmPassword: any;
}



export const inputOptions = (values:Prop, type:String) => (
    type === "Sign in" ? [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            // label: "Username",
            value: values.username,
            pattern: "^[A-Za-z0-9]{3-16}$",
            required: true
        },
       
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and should include at least 1 letter, 1 number and 1 special character!",
            // label: BsLock,
            value: values.password,
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        }
        ]
    :
        [
            {
                id: 1,
                name: "username",
                type: "text",
                placeholder: "Username",
                errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
                // label: "Username",
                pattern: `^[A-Za-z0-9]{3-16}$`,
                required: true
            },
            {
                id: 2,
                name: "email",
                type: "email",
                placeholder: "Email",
                errorMessage: "It should be a valid email address!",
                // label: BsMailbox,
                required: true
            },
            {
                id: 3,
                name: "birthday",
                type: "date",
                placeholder: "Birthday",
                // label: "Birthday",
            },
            {
                id: 4,
                name: "password",
                type: "password",
                placeholder: "Password",
                errorMessage: "Password should be 8-20 characters and should include at least 1 letter, 1 number and 1 special character!",
                // label: BsLock,
                pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
                required: true
            },
            {
                id: 5,
                name: "confirmPassword",
                type: "password",
                placeholder: "Confirm Password",
                errorMessage: "Password dont't match!",
                // label: "Confirm Password",
                // pattern: values.password,
                required: true
            },
        ])