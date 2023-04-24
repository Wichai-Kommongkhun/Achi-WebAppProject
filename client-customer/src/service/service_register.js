import Api from './api';


export default {
    async register(newUser){
        try{
            const create_user = await Api().post('http://localhost:4000/register-post', newUser);
            return create_user;
        }catch(er){
            console.log(er);
        }
    }
}