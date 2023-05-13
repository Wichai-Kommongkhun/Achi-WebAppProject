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
    },
    async addnew_address(newaddress){
        try{
            console.log("new Address");
            const address_data = await  Api().post('/address/new/', {address: newaddress})
            return address_data.data
        }catch(er){
            console.log(er);
        }
    },
    async payment(orde_infos){
        try{
            console.log("Go to pay");
            const pay = await Api().post('/create/token/payment', {
                orde_info: orde_infos
            });
            return pay;
        }catch(er){
            console.log(er);
        }
    }
};