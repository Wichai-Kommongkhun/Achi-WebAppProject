
import Api from './api';
//code by Wichai
export default {
    async request_cart(){
        try{
            const cart_data = await Api().post('http://localhost:4000/cart', {token: document.cookie});
            return cart_data;
        }catch(er){
            console.log(er);
        }
    },
    async setAmount(cart){
        try{
            const set = await Api().put('http://localhost:4000/set/cart/amount',cart);
            console.log(set);
        }catch(er){
            console.log(er);
        }
    },
    async addCart(newCart){
        try{
            const addCart_ = await Api().put('http://localhost:4000/create/cart/', {token: document.cookie, newCart:newCart});
            console.log(addCart_);
            return addCart_;
        }catch(er){
            console.log(er);
        }
    },
    async deleteItem(cart){
        try{
            const delete_ = await Api().delete(`http://localhost:4000/delete-cart/one/item/${cart.customer_id}/${cart.product_id}/${cart.size}`);
            return delete_
        }catch(er){
            console.log(er);
        }
    }
};