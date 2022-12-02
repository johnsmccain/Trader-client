import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser, getUsers } from '../../api/user';
import { ChatBox } from '../../components';
import "./chat.scss";
import {io} from "socket.io-client";
import Conversation from '../../components/conversation/Conversation';
import { createChat, userChats } from '../../api/chat';
const Chat = () => {
  const worker = useParams()
  // console.log(id)

  const socket = useRef();
  const [sendMessage, setsendMessage] = useState("")
  const [currentChat, setCurrentChat] = useState()
  const [chatUserId, setChatUserId] = useState();
  const [receivedMessage, setReceivedMessage] = useState()
  const [chats, setChats] = useState()
  const [toggle, setToggle] = useState(true);
  const [onlineUsers, setOnlineUsers] = useState([])

  const user_detail = useSelector(e => e.user.user.details);
  const userId = user_detail?._id;

  // getting user Id from params if available.
  // useEffect(() => {
  //   if (worker?.id) setChatUserId(worker?.id)
  // }, [])
  // console.log(chatUserId, currentChat)

// // console.log(userId, chatUserId)
// get chat into chat section
  useEffect(() => {
    const getChats =async () => {
      const res = await userChats(userId)
      setChats(res.data)
      // console.log(res);
    }
    getChats();
  }, [])
  
//     // setChatUserId()
    
//   useEffect(() => {
      
//     }, [])
    
    // Connect to Sockect.io
  useEffect(() => {
      socket.current = io("ws://localhost:8000");
      socket.current.emit("add-user", userId);
      
      // socket.current.on("receive-message", (m:any) => {
      //   console.log(m)
      // })
      socket.current.on("get-users", (users:any) => {
        setOnlineUsers(users)
      })
    }, [user_detail])
//     // console.log(onlineUsers)
    // create chat into chat section
    useEffect(() => {
      const createChats = async () => {
        try {
          const res = await createChat({senderId: userId, receiverId: chatUserId});
          
          console.log(res)
        } catch (error) {
          console.log(error)
        }
        
        createChats();
        // console.log(res.data);
      }
    }, [])
    // console.log(userId, chatUserId)
    // Send message to Socket server
    useEffect(() => {
      if(sendMessage){
        socket?.current.emit("send-message", sendMessage)
      // console.log(sendMessage)
    }
    
  }, [sendMessage])

  // get message from socket server
  useEffect(() => {
    socket.current.on("receive-message", (text:any) => {
      setReceivedMessage(text)
      // console.log(text)
    })
  }, [sendMessage])
  

  
  return (
    <div className='chat'>
      <div className={`chat-left ${toggle? "" : "hide"}`}>
        <div className="chat-container">
          <h1>Chats</h1>
          <div className="chat-list" >
            {
              chats?.map(
                  (chat:any , id:any )=> (
                    <div key={id} onClick={()=>{
                        setCurrentChat(chat); 
                        setToggle(!toggle);
                        setChatUserId(chat?.members[1]);

                      } }>
                      <Conversation 
                        data={chat}
                        currentUser={chatUserId}
                      />
                    </div>
                  ))
            }
            
            
          </div>
        </div>
      </div>
      
      <div className={`chat-right ${toggle? "hide" : ""}`}>
        {
          currentChat
            ? <ChatBox 
                chat={currentChat}
                currentUser={userId}
                setsendMessage={setsendMessage}
                receivedMessage={receivedMessage}
                setToggle
              />  
            : "select user to start chatting"
        }
      </div>
    </div>
  )
}

export default Chat
