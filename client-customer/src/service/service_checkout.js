import Api from './api';

export default {
    async getCustomer_address(){
        try{
            console.log("get Address");
            const address_data = await  Api().get('/address/get/', {token: document.cookie})
            return address_data.data
        }catch(er){
            console.log(er);
        }
    }
};