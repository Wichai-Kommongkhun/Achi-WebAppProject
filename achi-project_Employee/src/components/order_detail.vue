<template>
    <head>
        <title>ดำเนินการสั่งซื้อ</title>
    </head>

    <div class="container py-3">
        <div class="col-12" style="border: 1px solid white; height: 20%; margin-bottom: 3%">
            <div style="height: 2rem; margin-left: 2%">
                <h6 style="display: inline; color: aliceblue">
                    รายการคำสั่งซื้อ วันที่ {{ order.date_checkout }}
                </h6>
            </div>
            <h5 style="color: yellow; margin-left: 2%">
                เลขที่คำสั่งซื้อ: {{ oid }}
            </h5>
            <img v-if="!order.parcel_number || order.parcel_number === ''"
                src="https://media.discordapp.net/attachments/926320361119830036/1106272902388666398/status_pic3.png?width=720&height=180"
                style="margin-left: 25%; width: 50%; margin-bottom: 5%" alt="" />
            <img v-if="order.parcel_number && !order.date_success"
                src="https://cdn.discordapp.com/attachments/926320361119830036/1106273356665323550/status_pic3_1.png"
                style="margin-left: 25%; width: 50%; margin-bottom: 5%" alt="" />
            <img v-if="order.parcel_number && order.date_success"
                src="https://cdn.discordapp.com/attachments/926320361119830036/1106274329894858822/status_pic3_2.png"
                style="margin-left: 25%; width: 50%; margin-bottom: 5%" alt="" />
        </div>
        <div class="row py-2 mx-4" style="color: aliceblue">
            <!--  -->
            <div class="col-7">
                <div class="row py-1">
                    <h3>ข้อมูลการสั่งซื้อ</h3>
                </div>
                <hr style="border-width: 4px; color: white" />
                <div>
                    <div class="col-10">
                        <div class="row py-1">
                            <h5 style="display: inline">
                                จัดส่งสินค้าวันที่:
                                <span>
                                    <h5 style="display: inline; color: rgb(238, 226, 56)">
                                        {{ order.date_success }}
                                    </h5>
                                </span>
                            </h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline">
                                วิธีการชำระเงิน:
                                <span>
                                    <h5 style="display: inline; color: rgb(238, 226, 56)">
                                        {{ order.pay_type }}
                                    </h5>
                                </span>
                            </h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline">
                                วิธีการจัดส่ง:
                                <span>
                                    <h5 style="display: inline; color: rgb(238, 226, 56)">
                                        {{ order.send_type }}
                                    </h5>
                                </span>
                            </h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline">
                                สถานะการชำระเงิน:
                                <span>
                                    <h5 style="display: inline; color: rgb(238, 226, 56)">
                                        {{
                                            order.payment_status == 1 ? "ชำระเงินแล้ว" : "ยังไม่ได้ชำระเงิน"
                                        }}
                                    </h5>
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="row py-1" style="margin-top: 10%">
                    <h3>ที่อยู่จัดส่ง</h3>
                </div>
                <hr style="border-width: 4px; color: white" />

                <div>
                    <div class="col-10">
                        <div class="row py-1">
                            <h5 style="display: inline">
                                ชื่อ:
                                <span>
                                    <h5 style="display: inline; color: rgb(237, 137, 65)">
                                        {{ address.name }}
                                    </h5>
                                </span>
                            </h5>
                        </div>
                        <div class="row py-1">
                            <h5 style="display: inline">
                                เบอร์โทร:
                                <span style="color: rgb(237, 137, 65)">{{
                                    address.phone
                                }}</span>
                            </h5>
                        </div>
                        <div class="row">
                            <div class="col">
                                <h5>
                                    ที่อยู่จัดส่ง:
                                    <span style="color: #76f94e">
                                        {{ address.address }} {{ address.amphur }}
                                        {{ address.tumbon }} {{ address.provices }}
                                        {{ address.zib_code }}
                                    </span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-5 py-4 s_fix rounded-start" style="background-color: #464646">
                <div class="row">
                    <div class="col text-center">
                        <h2>สรุปคำสั่งซื้อ</h2>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col">
                        <h3>สินค้าในตระกร้า ({{ cart.length }}รายการ)</h3>
                    </div>
                </div>
                <div class="row order_flow">
                    <div class="col">
                        <table class="table" style="color: aliceblue">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in cart" :key="item">
                                    <th>
                                        <div class="card" style="border: none; background-color: #464646">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <img :src="'http://localhost:4000/uploads/' + item.image"
                                                    class="img-fluid rounded-start" />
                                                </div>
                                                <div class="col">
                                                    <div class="card-body">
                                                        <h4 class="card-title tr_p">{{ item.brand }}</h4>
                                                        <p class="card-text">{{ item.product_name }}</p>
                                                        <p class="card-text tr_p">
                                                            รหัสสินค้า: {{ item.product_id }}
                                                        </p>
                                                        <p class="card-text tr_p">สี: {{ item.color }}</p>
                                                        <p class="card-text tr_p">ขนาด: {{ item.size }}</p>
                                                        <p class="card-text tr_p">ราคา: {{ item.price }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td style="width: fit-content">
                                        <h3>X{{ item.amount }}</h3>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <hr />
                <div class="row">
                    <div class="col">
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ยอดรวม:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">
                                    {{  
                                      order.price -  Number(
                                        order.send_type === "จัดส่งสินค้าแบบปกติ (5-7 วัน)" ? 20 : 
                                        order.send_type === "จัดส่งสินค้าแบบพิเศษในราคา 80 บาท (1-2 วัน)" ? 80 : 0
                                      )
                                    }}
                                    THB
                                </h3>
                            </div>
                        </div>
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ค่าจัดส่ง:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">
                                    {{
                                        order.send_type === "จัดส่งสินค้าแบบปกติ (5-7 วัน)" ? 20 : 
                                        order.send_type === "จัดส่งสินค้าแบบพิเศษในราคา 80 บาท (1-2 วัน)" ? 80 : 0
                                    }}
                                    THB
                                </h3>
                            </div>
                        </div>
                        <hr />
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ราคารวม:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">{{ order.price }} THB</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col" style="height: 200px !important">
                <!-- for future -->
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
export default {
    data() {
        return {
            new_address: false,
            order: "",
            oid: 0,
            search: "",
            cart: [],
            address: [],
        };
    },
    async created() {
        // this.order_info = JSON.parse(localStorage.getItem("order_key"));
        const getData = new URLSearchParams(window.location.search);
        this.oid = getData.get("oid");
        const info = await axios.get("http://localhost:4000/order-detail/employee/"+this.oid+"/?admin=admin")
        console.log(info.data);
        this.order = info.data.order;
        this.cart = info.data.cart;
        this.address = info.data.address;
    },
    methods: {},
};
</script>

<style scoped>
.order_flow {
    height: 500px !important;
    overflow-y: auto;
    overflow-x: hidden;
}

.tr_p {
    margin-top: -15px !important;
}

.s_fix {
    max-height: 900px !important;
}
</style>