import Api from './api';


export default {
    async getMyOrder(){
        try{
            const orders = await Api().get('/orders/get/customer')
            return orders.data;
        }catch(error){
            console.log(error);
            alert("เกิดข้อมผิดพลาด")
        }
    },
    async getMyOrderDetail(oid){
        try{
            const order = await Api().get('/order/get/'+oid)
            console.log(order.data);
            return order.data;
        }catch(error){
        console.log(error)
        }
    }

}