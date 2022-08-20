import c1 from './assets/c1.png'
import c2 from './assets/c2.png'
import c3 from './assets/c3.png'
import pic1 from './assets/pic1.png'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'
import pic4 from './assets/pic4.png'
import { faAirFreshener, faBrush, faBuilding, faCar, faFaceSmile, faHandsWash, faHatCowboySide, faHeader, faPaintRoller, faPersonArrowDownToLine, faPlug, faRadio, faTools, faTowerBroadcast, faTruck, faWater } from '@fortawesome/free-solid-svg-icons';
export const intro = [
    {
        id:0,
        pic: c1,
        desc: 'We provide professional service at a friendly price'
    },
    {
        id:1,
        pic: c2,
        desc: 'The best results and your satisfaction is our top priority'
    },
    {
        id:2,
        pic: c3,
        desc: "let's make awesome changes to your home"
    },
]

export const offer_data = [
    {
      id:1,
      discount: 30,
      title: "Today's Special!",
      desc: "Get discount for every order. only valid for today",
      photo: pic1,
      bg: "#4b13a5"
    },
    {
      id:2,
      discount: 25,
      title: "Friday Special!",
      desc: "Get discount for every order. only valid for today",
      photo: pic2,
      bg: "#94057c"
    },
    {
      id:3,
      discount: 40,
      title: "New Promo!",
      desc: "Get discount for every order. only valid for today",
      photo: pic3,
      bg: "#c9960b"
    },
    {
      id:4,
      discount: 35,
      title: "Weekend Special!",
      desc: "Get discount for every order. only valid for today",
      photo: pic4,
      bg: "#009eb3"
    },
  ]

export const service_card_data = [
  {
    id: 1,
    photo: pic1,
    name: "Kylee Danford",
    service: "House Cleaning",
    price: 25,
    rating: 4.0,
    views: 8289
  },
  {
    id: 2,
    photo: pic2,
    name: "JArron Swagger",
    service: "Floor Cleaning",
    price: 20,
    rating: 4.9,
    views: 6143
  },
  {
    id: 3,
    photo: pic3,
    name: "Sarah Dons",
    service: "Washing Clothes",
    price: 22,
    rating: 4.7,
    views: 7918
  },
  {
    id: 4,
    photo: pic4,
    name: "Freda Vames",
    service: "Bathroom Cleaning",
    price: 24,
    rating: 4.9,
    views: 6543
  },
]

export const service_cat = [
  
  'All',
 
  'Cleaning', 
  'Repairing', 
  'Laundry', 
  'Appliance', 
  'Plumbing', 
  'Shifting'
] 
export const service_cat2 = [
  {
    id:1,
    title: "Cleaning",
    icon: faBrush, 
    bg: "#4b13a5",
    link: "cleaning"
  },
  {
    id:2,
    title: "Repairing",
    icon: faTools, 
    bg: "#94057c",
    link: "repairing"
  },
  {
    id:3,
    title: "Painting",
    icon: faPaintRoller, 
    bg: "#c9960b",
    link: "painting"
  },
  {
    id:4,
    title: "Laundry",
    icon: faWater, 
    bg: "#009eb3",
    link: "laundry"
  },
  {
    id:5,
    title: "Appliance",
    icon: faTowerBroadcast, 
    bg: "#4b13a5",
    link: "appliance"
  },
  {
    id:6,
    title: "Plumbing",
    icon: faTools, 
    bg: "#c9960b",
    link: "plumbing"
  },

  {
    id:7,
    title: "Shifting",
    icon: faTruck, 
    bg: "#94057c",
    link: "shifting"
  },
  {
    id:8,
    title: "Beauty",
    icon: faFaceSmile, 
    bg: "#c9960b",
    link: "beauty"
  },
  {
    id:9,
    title: "AC Repairing",
    icon: faAirFreshener, 
    bg: "#009eb3",
    link: "ac"
  },
  {
    id:10,
    title: "Vehicle",
    icon: faCar, 
    bg: "#4b13a5",
    link: "vehicle"
  },
  {
    id:11,
    title: "Elecrtonics",
    icon: faRadio, 
    bg: "#c9960b",
    link: "electronics"
  },
  {
    id:12,
    title: "Massage",
    icon: faPersonArrowDownToLine, 
    bg: "#4b13a5",
    link: "massage"
  },
  {
    id:13,
    title: "Men's Salon",
    bg: "#c9960b",
    icon: faHatCowboySide,
    link: "salon"
  },
]
