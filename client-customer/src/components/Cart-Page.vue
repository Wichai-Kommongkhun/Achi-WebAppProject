<template>
    <head>
        <title>ตระกร้าสินเค้า</title>
    </head>
    
    <div class="container-fluid py-4 px-4">
        
        <div class="row px-4" style="padding-left: 10rem !important;">
            <hr/>
            <div class="col-8 px">
                <table class="table " style="color:aliceblue">
                    <thead class="">
                        <tr style="font-size: 24px;">
                            <th scope="col" class="text-start">สินค้า ({{ cart.length }} Item)</th>
                            <th scope="col">จำนวน</th>
                            <th scope="col">ราคา</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in cart" :key="item" :index="index">
                            <th class="">
                                <div class="card mb-1 VueBg" style="max-width: 540px; border: none;">
                                    <div class="row g-0">
                                        <div class="col-5">
                                            <img :src="'http://localhost:4000/uploads/'+item.image"
                                                class="img-fluid rounded-start" alt="...">
                                        </div>
                                        <div class="col">
                                            <div class="card-body VueBg " style="padding-top: 0px !important;" >
                                                <h4 class="card-title">{{ item.brand }}</h4> 
                                                <p class="card-text d-r">{{ item.product_name }}</p>
                                                <p class="card-text d-r">รหัสสินค้า: {{ item.product_id }}</p>
                                                <!-- <p class="card-text d-r">สี: </p> -->
                                                <p class="card-text d-r">ขนาด: {{ item.size }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </th>
                            <td class="" style="width: fit-content">
                                <div class="row g-0">
                                    <div class="col-8 d-flex">
                                        <div class="btn-group" role="group" aria-label="Basic outlined example">
                                            <button type="button" class="btn btn-outline-secondary" @click="cart[index].amount-=1; setAmount(index)">-</button>
                                            <input type="text" class="form-control text-center ele-num"
                                                style="color: aliceblue;" :value="item.amount">
                                            <button type="button" class="btn btn-outline-secondary" @click="cart[index].amount+=1; setAmount(index)" >+</button>
                                        </div>
                                        <a class="mx-3" style="cursor: pointer;" @click="del(index)"><img src="@/assets/icons/trash-can-64.png" alt=""
                                            width="35" class="mx-2"></a>
                                    </div>
                                </div>
                            </td>
                            <td class="" colspan="2">
                                <div class="row">
                                    <div class="col">
                                        <h4>{{ item.price * item.amount }}.00 THB</h4>
                                    </div>
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-3 bg-checkout py-4">
                <div class="row py-3">
                    <div class="col-6">
                        <h3 class="text-strat">จำนวนสินค้า</h3>
                    </div>
                    <div class="col-6">
                        <h3 class="text-end">{{sumAmount}} ชิ้น</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h3 class="text-strat">รวมทั้งหมด</h3>
                    </div>
                    <div class="col-6">
                        <h3 class="text-end">{{ sumPrice }} THB</h3>
                    </div>
                </div>
                <div class="row py-2 mt-2">
                    <div class="col">
                        <label for="inputEmail4" class="form-label">
                            <h3>ใส่โค้ดส่วนลด</h3>
                        </label>
                        <input type="text" class="form-control mb-2" id="" v-model="input_code">
                        <button type="button" class="btn btn-success py-2" style="font-size: 22px;">ใช้โค้ด</button>
                    </div>
                </div>
                <div class="row py-2 mt-4">
                    <div class="col-6">
                        <h3 class="text-strat">ได้รับส่วนลด</h3>
                    </div>
                    <div class="col-6">
                        <h3 class="text-end"> THB</h3>
                    </div>
                </div>
                <div class="row py-1 mb-3">
                    <div class="col-6">
                        <h3 class="text-strat">ยอดรวมสุทธิ</h3>
                    </div>
                    <div class="col-6">
                        <h3 class="text-end">{{ sumPrice-discount }} THB</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex" v-if="cart.length > 0">
                        <a type="button" href="/check-out" class="btn btn-warning col-12 btn-lg" style="font-size: 35px;"> 
                            ดำเนินการสั่งสินค้า
                        </a>
                    </div>

                    <div class="col d-flex" v-if="cart.length == 0">
                        <button type="button" @click="em()" class="btn btn-warning col-12 btn-lg" style="font-size: 35px;"> 
                            ดำเนินการสั่งสินค้า
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import service_cart from '@/service/service_cart';
export default {
    data() {
        return {
            user_id: 0,
            cart: [],
            input_code: '',
            discount: 0,
            code_promotion: "FRAME555",
            amount_item: 0,
            price_sum:0,
        }
    },
   async created(){
        try{
            const _cart = await service_cart.request_cart();
            if (_cart.data.status == true){
                this.cart = _cart.data.cart;
            }else{
                window.location.href = '/login'
            }
        }catch(er){
            console.log(er);
        }

        this.cart.forEach(item =>{
            this.price_sum += item.price*item.amount;
            this.amount_item += item.amount
        })
    },
    methods:{
        async setAmount(index){
            const cart = {
                customer_id: this.cart[index].customer_id,
                product_id: this.cart[index].product_id,
                size: this.cart[index].size,
                amount: this.cart[index].amount
            };
            const set_cart = await service_cart.setAmount(cart);
            if (this.cart[index].amount < 1){
                this.cart.splice(index, 1);
            }
            return set_cart;
        },
        async del(index){
            const cart = {
                customer_id: this.cart[index].customer_id,
                product_id: this.cart[index].product_id,
                size: this.cart[index].size,
                amount: this.cart[index].amount
            };
            const del_ = await service_cart.deleteItem(cart);
            this.cart.splice(index, 1);
            del_;
        },
        em(){
            alert('กรุณาเพิ่มสินค้าในตระกร้า');
        }
    },
    computed:{
        sumPrice(){
            var sum = 0;
            this.cart.forEach(item =>{
                sum += item.price * item.amount;
            })
            return sum
        },
        sumAmount(){
            var amount = 0;
            this.cart.forEach(item =>{
                amount += item.amount;
            })
            return amount
        }
    }
}
</script>

<style scoped>
.d-r {
    margin-bottom: 4px;
}

.ele-num {
    background-color: rgb(38, 38, 38);
}

.card-title {
    color: rgb(255, 208, 79);
}

.bg-checkout{
    background-color: #BCBCBC;
    border-radius: 1rem;
    padding: 12px !important;
}

</style>