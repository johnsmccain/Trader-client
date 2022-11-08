import { API } from ".";

export const upload = (file:any) => API.post("/upload", file);
export const upload_gallery = (file:any) => API.post("/upload/gallery", file);