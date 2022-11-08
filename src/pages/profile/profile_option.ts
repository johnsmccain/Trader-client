import { BsBell, BsCheck, BsEye, BsFileLock, BsHeadphones, BsPenFill, BsPeople, BsPerson, BsSpeaker, BsTerminal, BsWallet } from 'react-icons/bs';
export const profileOptionList = (id:any = 0) => [
    {
        id: 1,
        icon: BsPerson,
        name: "Edit Profile",
        link_to: `/profile/${id}`
    },
    {
        id: 2,
        icon: BsBell,
        name: "Notification",
        link_to: "/notification"
    },
    {
        id: 3,
        icon: BsWallet,
        name: "Payment",
        link_to: "payment"
    },
    {
        id: 4,
        icon: BsCheck,
        name: "Security",
        link_to: "security"
    },
    {
        id: 5,
        icon: BsSpeaker,
        name: "Language",
        link_to: "language"
    },
    {
        id: 6,
        icon: BsEye,
        name: "Dark mode",
        // link_to: ""
    },
    {
        id: 7,
        icon: BsFileLock,
        name: "Privacy Policy",
        link_to: "privacy"
    },
    {
        id: 8,
        icon: BsHeadphones,
        name: "Help Center",
        link_to: "center"
    },
    {
        id: 9,
        icon: BsPeople,
        name: "Invite Friends",
        link_to: "invite"
    },
    {
        id: 10,
        icon: BsTerminal,
        name: "Logout",  
    },
]