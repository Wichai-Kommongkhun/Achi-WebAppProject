<template>
    <head>
        <title>บันชีของฉัน</title>
    </head>
    <div class="container">
        <hr style="color:aliceblue">
        <div class="row py-2">
            <navUser></navUser>
            <div class="col mx-5 " style="color:aliceblue" >
                <div class="row">
                    <div class="col-10">
                        <h2>ประวัติการสั่งซื้อ</h2>
                        <hr size="20px">
                    </div>
                    <div class="col-12" style="border: 1px solid white; height: 20%;">
                        <div class="row py-2">
                            <div style="height: 2rem;" class="col">
                                <h6 style="display: inline;">รายการคำสั่งซื้อล่าสุด วันที่ {{ orders[0].date_checkout }}</h6>
                            </div>
                            <div class="col d-flex justify-content-end">
                                <!-- <a class="btn btn-danger btn" :href="'/order_de?oid='+orders[0].order_id"
                                style="display: inline; margin-left: 85%; margin-top: -2%; width: 100px; margin-bottom: 0%;">ดูคำสั่งซื้อ</a> -->
                                <a class="btn btn-danger btn  " :href="'/order_de?oid='+orders[0].order_id"
                                style="" >ดูคำสั่งซื้อ</a>
                            </div>
                        </div>

                        <h5 style="color: yellow;">เลขที่คำสั่งซื้อ: {{ orders[0].order_id }}</h5>
                        <img v-if="!orders[0].parcel_number || orders[0].parcel_number === ''" src="https://media.discordapp.net/attachments/926320361119830036/1106272902388666398/status_pic3.png?width=720&height=180"
                        style="margin-left: 25%; width: 50%; margin-bottom: 5%;" alt="">
                        <img v-if="orders[0].parcel_number && !orders[0].date_success" src="https://cdn.discordapp.com/attachments/926320361119830036/1106273356665323550/status_pic3_1.png"
                        style="margin-left: 25%; width: 50%; margin-bottom: 5%;" alt="">
                        <img v-if="orders[0].parcel_number && orders[0].date_success" src="https://cdn.discordapp.com/attachments/926320361119830036/1106274329894858822/status_pic3_2.png"
                        style="margin-left: 25%; width: 50%; margin-bottom: 5%;" alt="">
                    </div>
                    
                    <div class="row">
                        <div class="col-12" style="margin-top: 5%;">
                            <table class="table">
                                <thead style="background-color: #505050; color: aliceblue;">
                                    <tr>
                                        <th>เลขที่คำสั่งซื้อ</th>
                                        <th>วันที่สั่งซื้อ</th>
                                        <th>ราคารวม</th>
                                        <th>การชำระเงิน</th>
                                        <th>เลขติดตามพัสดุ</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody style="background-color: #222222; color: aliceblue;">
                                    <tr class="size_tr" v-for="order in orders" :key="order.order_id">
                                        <td>{{ order.order_id }}</td>
                                        <td>{{ order.date_checkout }}</td>
                                        <td>{{ order.price }} Bath</td>
                                        <td>{{ order.payment_status == 1 ? "ชำระเงินแล้ว":"ยังไม่ได้ชำระเงิน"}}</td>
                                        <td>{{ order.parcel_number }}</td>
                                        <td><a :href="'/order_de?oid='+ order.order_id" style="color: aliceblue;">รายละเอียด</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import navUser from './Nav-user.vue';
import service_order from '../service/service_order'
export default {
    components:{
        navUser:navUser
    },
    data() {
        return {
            edit_active: false,
            orders: {}
        }
    },
   async created(){
        this.orders = await service_order.getMyOrder();
    },
    methods:{
        
    }
};
</script>

<style>
.fix_data {
    color: rgb(255, 255, 255);
    text-decoration: none;
    border: 1px solid #fff;
    padding: 2px;
    border-radius: .2rem;
};

.fix_data:hover {
    color: rgb(231, 170, 15);
    cursor: pointer;
};

</style>