import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

const TOKEN  = localStorage.getItem("persist:root") ? 
                  (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser ? 
                        JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken : "") : ""
                        // const TOKEN = ''
export const publicRequest = axios.create({
  baseURL: 'https://mern-atn.herokuapp.com/api/',
});


export const userRequest = axios.create({
  baseURL: 'https://mern-atn.herokuapp.com/api/',
  headers: { token: `Bearer ${TOKEN}` },
});

