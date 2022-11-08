import { API } from ".";

export const addMessage = (data:any) => API.post("/message", data);
export const getMessage = (id:any) => API.get(`/message/${id}`);