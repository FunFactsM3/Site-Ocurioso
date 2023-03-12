import axios from "axios";

const Axios = axios.create({
     baseURL: "https://site-ocurioso.onrender.com/",
     timeout: 5000,
})

export default Axios;