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

const ChatBox = ({chat ,currentUser, setsendMessage, receivedMessage}:any) => {
  const imageRef = useRef();
  const scrollRef = useRef();
  const [newMessage, setnewMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [workerDetails, setworkerDetails] = useState()
  const userId = useSelector(e => e.user.user.details._id);
  // console.log(userId)
  const worker = useParams()
  const handleChange = (e:any) => {
    // e.preventDefault();
    setnewMessage(e);
  }
  // let timer = 0;
  // setInterval(()=>{
  //   timer += 1
  // },1000);
  // console.log(chat)
  // Fetch data for header
  useEffect(() => {
    const fetch = async () => {
      if (worker.id){
        const res = await getUser(worker?.id);
        setworkerDetails(res.data)
      }else{
        {
          const res = await getUser(currentUser);
          setworkerDetails(res.data)
        }
      }
    }
    if (chat) fetch();
  }, [chat, currentUser]);

  // Fetch Messages
  useEffect(() => {
    const getMessages =async () => {
      const res = await getMessage(chat?._id);
      setMessages(res.data);
      // console.log(res)
    }
    if (chat !== null) getMessages();
  }, [chat])
  
  // Receive message from Parent component

  useEffect(() => {
    setMessages((prev:any )=> [...prev, receivedMessage])
    // console.log(receivedMessage)
  }, [receivedMessage])
  
  // console.log(chat)
  // console.log()
  // console.log(newMessage)
// timeago//
  // send message
  const handleSend = async(e:any) => {
    e.preventDefault();
    const message ={
      senderId: currentUser,
      text: newMessage,
      chatId: chat?._id
    }
    // console.log(message)
    // console.log(chat?.members)
    const rcId =  chat?.members.filter((id:any )=> id !== userId)
    //  send to sokect server
    setsendMessage({...message, receiverId:rcId[0]});
    //  send to database
    try {
      const {data} =  await addMessage(message)
      console.log(data)
      setMessages([...messages, data])
      setnewMessage("");
    } catch (error) {
      console.log(error)
    }


  }
// console.log(messages[0]?.userId)
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
      <div className="chat-body">
        {messages.map((m, id) => (
          
            <div
              ref={scrollRef} 
              className={`message ${(m?.senderId === userId ) && "own"}`} 
              key={id}>
              <span>{m?.text}</span>
              <span>{format(m?.createdAt)}</span>
            </div>
          
        ))}
      </div>

      {/* chat sender */}
      <div className="chat-sender">
        <div onClick={() => imageRef?.current?.click()}>+</div>
        <InputEmoji className="input" onChange={handleChange} value={newMessage}/>
        <input
          type="file" name="" id=""
          style={{ display: "none" }}
          ref={imageRef}
        />
        <div className="send-btn btn" onClick={handleSend}>Send </div>
      </div>
    </div>
  )
}

export default ChatBox
