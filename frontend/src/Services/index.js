import axios from 'axios';
import {getUserToken} from "../Services/localStorage"
const api=axios.create({
    baseURL:"http://localhost:5000"
})

api.interceptors.request.use((config)=>{
    config.headers.authorization=getUserToken()
    return config
})
export {api};