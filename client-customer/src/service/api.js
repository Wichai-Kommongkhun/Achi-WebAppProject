import axios from "axios"

export default ()=>{
    console.log('Create axios !');
    return axios.create({
        baseURL:''
    });
}