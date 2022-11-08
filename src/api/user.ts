import { API } from ".";

export const getUser = (userId:any) => API.get(`/users/${userId}`);
export const getUsers = () => API.get(`/users`);
export const updateUser = (formData:any, userId:any) => API.post(`/users/${userId}`, formData);