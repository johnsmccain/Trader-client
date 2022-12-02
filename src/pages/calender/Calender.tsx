import EmojiPicker from 'emoji-picker-react'
import React from 'react'

const Calender = () => {
  return (
    <div>
        <EmojiPicker
          width="100%"
          height={500}
          onEmojiClick={(e)=> console.log(e?.emoji)}
        />
    </div>
  )
}

export default Calender