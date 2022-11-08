import { API } from ".";

export const get_settings = (setting_id:any) => API.get(`/settings/${setting_id}`);
export const update_settings = (setting_id:any, payload:any) => API.post(`/settings/${setting_id}`, payload);