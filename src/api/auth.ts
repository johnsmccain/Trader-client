import {API} from ".";

export const logIn = (formData:any) => API.post("/auth/login", formData);
export const register = (formData:any) => API.post("/auth/register", formData);