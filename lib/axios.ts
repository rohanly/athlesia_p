import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL ?? "http://35.175.214.145",
});

const AUTH_TOKEN = "";

axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

// Alter defaults after instance has been created
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export default instance;
