import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Btn from '../../button/Btn'
import './card.scss'
const Card = ({pix, desc, last, id}:any) => {
    const [wid, setWid] = useState(340)


  return (
    <div className='carousel-card' >
        
        <img src={pix} alt="" />
        <Typography component='p'  variant='h4' >
          {desc}
        </Typography>

        {/* { 
          
            (last !== id )&&
            <Button  color='primary' variant='contained' sx={{width: '100%', borderRadius: 5, padding: '12px 0' }} onClick={()=> setWid(wid + wid)}>
              Next
            </Button>
        }      */}
        {
            last === id &&
            <Btn  color='primary' variant='contained' width='100' text='SignIn with pasword'/>
        }    

      </div>
  )
}

export default Card