import { Button } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';



const Btn = ({color, variant, width, text, required, linktopassword}:any) => {
  const styles = {width: `${width}%`, borderRadius: 5, padding: '12px 0', fontSize: 'capitalize', cursor: "pointer" }
  return (
    <Button 
      type='submit' 
      color={color} 
      variant={variant} 
      sx={styles} 
      
    >
      { linktopassword &&<Link to={linktopassword}>
        {text}
      </Link>}
      {
        !linktopassword && text
      }
    </Button>
  )
}

export default Btn