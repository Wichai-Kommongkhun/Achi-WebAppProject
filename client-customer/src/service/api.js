import axios from "axios";


function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


const createRequest = axios.create({
    baseURL: 'http://localhost:4000',
})

createRequest.interceptors.request.use(
    (config)=>{
        const token = getCookie('token_login')
        console.log(token);
        if (token){
            config.headers["Authorization"] = token;
            // .split('token_login=')[1].trim()
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