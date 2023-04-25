import axios from "axios";

const createRequest = axios.create({
    baseURL: 'http://localhost:4000',
})

createRequest.interceptors.request.use(
    (config)=>{
        const token = document.cookie
        if (token){

            config.headers["Authorization"] = token.split('token_login=')[1].trim();
        }
        return config;
    },
    (err)=>{
        return Promise.reject(err);
    }
);

export default ()=>{
    console.log('Create axios !');
    return createRequest
}