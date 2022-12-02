import React, { useEffect, useRef, useState } from 'react'
import InputEmoji from "react-input-emoji";
import "./chatbox.scss";
import brand from "../../assets/brand.png";
import { msg } from './msgData';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../../api/user';
import { getMessage, addMessage } from '../../api/message';
import {format} from 'timeago.js' 
import EmojiPicker from "emoji-picker-react"

const ChatBox = ({chat ,currentUser, setsendMessage, receivedMessage}:any) => {

  // console.log(chat)
  // console.log(currentUser)
  // console.log(receivedMessage)

  const imageRef = useRef();
  const scrollRef = useRef();
  const [newMessage, setnewMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [workerDetails, setworkerDetails] = useState()
  const [isEmoji, setIsEmoji] = useState(false)
  const userId = useSelector(e => e.user.user.details._id);
  // console.log(userId, currentUser)
  const worker = useParams()
  const handleChange = (e:any) => {
    // e.preventDefault();
    if (e?.target){
      setnewMessage( e.target.value);
    }else{
      setnewMessage((prev)=> prev + e?.emoji)
    }
  }
  console.log(newMessage);
  // Fetch data for header
  useEffect(() => {
    const fetch = async () => {

      const chatId = chat?.members?.find((c:any) => c !== userId )
      console.log(chatId)
          const res = await getUser(chatId);
          setworkerDetails(res.data)
      //   
      
    }
    if (chat) fetch();
  }, [chat, currentUser]);


  // Fetch Messages
  useEffect(() => {
    const getMessages =async () => {
      const res = await getMessage(chat?._id);
      setMessages(res.data);
    }
    if (chat !== null) getMessages();
  }, [chat])
  
  // Receive message from Parent component
  useEffect(() => {
    setMessages((prev:any )=> [...prev, receivedMessage])
  }, [receivedMessage])
  

  // send message
  const handleSend = async(e:any) => {
    e.preventDefault();
    const message ={
      senderId: currentUser,
      text: newMessage,
      chatId: chat?._id
    }

    // filtering receiver id from users
    const rcId =  chat?.members.filter((id:any )=> id !== userId);

    //  send to sokect server
    setsendMessage({...message, receiverId:rcId[0]});

    //  send to database
    try {
      const {data} =  await addMessage(message)
      setMessages([...messages, data])
      setnewMessage("");
    } catch (error) {
      console.log(error)
    }

    // setnewMessage('');
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: "smooth"})
  }, [messages])
  
  return (
    <div className='chat-box'>
      {/* chat header */}
      <div className="chat-header">
        <div className="follower">
          <div>
            {/* <img src={brand} alt="" 
              style={{ width: "50px", height: "50px" }}/> */}
              <div className="name">
                <h1>{`${workerDetails?.firstname} ${workerDetails?.lastname}`}</h1>
              </div>
          </div>
        </div>
        <hr 
          style={{
            width: "95",border: "0.1px solid #ececec", marginTop: "20px",
        }}/>
      </div>

      {/* chat body */}
      <div className="chat-body" onClick={() => setIsEmoji(false)} >
        {messages.map((m, id) => (
          
            <div
              ref={scrollRef} 
              className={`message ${(m?.senderId === userId ) && "own"}`} 
              key={id}>
              <span>{m?.text}</span>
              <span>{format(m?.createdAt)}</span>
            </div>
          
        ))}
        <div className={`emoji ${!isEmoji && "hide"}`}>
            <EmojiPicker
              width="100%"
              height={700}
              onEmojiClick={handleChange}
              />
          </div>
      </div>

      {/* chat sender */}
      <div className="chat-sender">
        <div onClick={() => imageRef?.current?.click()}>+</div>
        {/* <InputEmoji className="input" onChange={handleChange} value={newMessage}/> */}
        <div>
          
          <textarea 
            name="chat" 
            id="chat"
            onChange={handleChange}
            value={newMessage}
          />
        </div>
        <div className='icon'  onClick={() => setIsEmoji(!isEmoji)}>EM</div>
        <input
          type="file" name="" id=""
          style={{ display: "none" }}
          ref={imageRef}
        />
        <div className="send-btn btn" onClick={handleSend}>Send</div>
      </div>
    </div>
  )
}

export default ChatBox