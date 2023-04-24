import Api from './api';


export default {
   async getAccount(){
        try{
            const getUser = await Api().post('http://localhost:4000/cutomer/info', {token: document.cookie});
            return getUser;
        }catch(er){
            console.log(er);
        }
    },
    async updateInformation(newInfo){
        try{
            const updateUser = await Api().post('http://localhost:4000/customer/update/info', {
                token: document.cookie,
                info: newInfo
            });
            return updateUser
        }catch(er){
            console.log(er);
        }
    }
}