import {API} from "."

export const createChat =  (data:any) => API.post("/chat/", data);
export const userChats = (id:any) => API.get(`/chat/${id}`)
export const findChat = (senderId:any, receiverId:any) => API.get(`/chat/find/${senderId}/${receiverId}`)