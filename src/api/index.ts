import axios from "axios";
export const BaseURI = "http://localhost:7000/"
export const API = axios.create({baseURL: `${BaseURI}api`});
