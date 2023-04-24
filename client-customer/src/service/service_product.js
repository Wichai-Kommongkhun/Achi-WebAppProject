import Api from './api';


export default {
    async getProduct(){
        try{
            const product = await Api().get('http://localhost:4000/get-product/all');
            return product;
        }catch(er){
            console.log(er);
        }
    },
    async getProduct_detali(pid){
        try{
            // console.log("API = ",pid);
            const product = await Api().get('http://localhost:4000/get-product/'+pid);
            return product;
        }catch(er){
            console.log(er);
        }
    }
};