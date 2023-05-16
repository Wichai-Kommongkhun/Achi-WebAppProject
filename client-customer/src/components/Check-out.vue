<template>
    <head>
        <title>ดำเนินการสั่งซื้อ</title>
    </head>

    <div class="container py-3">
        <div class="row py-2 mx-4" style="color: aliceblue">
            <!--  -->
            <div class="col-7">
                <div class="row">
                    <div class="row py-2">
                        <div class="col">
                            <h3>วิธีการจัดส่ง:</h3>
                        </div>
                    </div>
                    <div class="row py-3">
                        <div class="col-4">
                            <div class="form-check mx-2">
                                <input class="form-check-input py-2 px-2" type="radio" name="atstore" id="atstore"
                                    value="0" v-model="delivery_price" />
                                <label class="form-check-label mx-2" for="atstore" style="font-size: 20px !important">
                                    รับสินค้าที่ร้าน
                                </label>
                            </div>
                        </div>
                        <div class="col-4 d-flex">
                            <div class="form-check mx-2">
                                <input class="form-check-input py-2 px-2" type="radio" name="normaly" id="normaly" value="20"
                                    v-model="delivery_price" />
                                <label class="form-check-label mx-2" for="normaly" style="font-size: 20px !important">
                                    จัดส่งสินค้าแบบปกติ (5-7 วัน)
                                </label>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-check mx-2">
                                <input class="form-check-input py-2 px-2" type="radio" name="fast" id="fast" value="80"
                                    v-model="delivery_price" />
                                <label class="form-check-label mx-2" for="fast" style="font-size: 20px !important">
                                    จัดส่งสินค้าแบบพิเศษในราคา 80 บาท (1-2 วัน)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col">
                        <hr />
                        <h3>ที่อยู่จัดส่ง:</h3>
                    </div>
                </div>

                <div class="" v-show="new_address == false">
                    <div class="row py-3" v-for="(item, index) in cus_address" :key="item" :index="index">
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input py-2 px-2" type="radio" :name="index" :id="index"
                                    v-model="address_number" :value="item.address_number" />
                                <label class="form-check-label" :for="index">
                                    ชื่อ: {{ item.name }} Tel: {{ item.phone }}
                                    {{ item.address }} ตำบล {{ item.tumbon }} อำเภอ
                                    {{ item.amphur }} {{ item.provice }} {{ item.zip_code }}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row py-2">
                        <div class="col text-center">
                            <a href="#" style="color: #e3af4a" @click="new_address = true">
                                <h5>เพิ่มที่อยู่จัดส่ง</h5>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Add address -->
                <div class="row py-3" v-show="new_address">
                    <div class="col">
                        <div class="col-5 py-1">
                            <label for="exampleFormControlInput1" class="form-label">ชื่อผู้รับ *</label>
                            <input type="text" class="form-control" placeholder="" v-model="name_newAddr" required />
                        </div>
                        <div class="col-5 py-2">
                            <label for="exampleFormControlInput1" class="form-label">เบอร์โทรศัพท์ *</label>
                            <input type="text" class="form-control" placeholder="" v-model="phoe_newAddr" required />
                        </div>
                        <div class="col-8 py-2">
                            <label for="exampleFormControlInput1" class="form-label">ที่อยู่ *</label>
                            <textarea type="text" class="form-control" rows="2" placeholder="" v-model="address_new"
                                required></textarea>
                        </div>
                        <div class="row">
                            <div class="col-4 py-2">
                                <label for="inputState" class="form-label">จังหวัด</label>
                                <select id="inputState" class="form-select" v-model="provice_id">
                                    <option v-for="item in provice.RECORDS" :key="item" :value="item.id">
                                        {{ item.name_th }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-4 py-2">
                                <label for="inputState" class="form-label">อำเภอ</label>
                                <select id="inputState" class="form-select" v-model="amphur_id">
                                    <option v-for="item in amphur.RECORDS" :key="item" :value="item.id"
                                        v-show="item.province_id == provice_id">
                                        {{ item.name_th }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-4 py-2">
                                <label for="inputState" class="form-label">ตำบล</label>
                                <select id="inputState" class="form-select" v-model="tumbon_id" required>
                                    <option v-for="item in tumbon.RECORDS" :key="item" :value="item.id"
                                        v-show="item.amphure_id == amphur_id">
                                        {{ item.name_th }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-4 py-2">
                                <label for="exampleFormControlInput1" class="form-label">รหัสไปรษณีย์ *</label>
                                <input type="text" class="form-control" v-model="zipcode" disabled />
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-4 d-flex">
                                <button type="button" class="btn btn-success"
                                    @click="new_address = false;
                                    addNew_address();
                                                                                                                                                                                                                          "
                                    style="font-size: 20px">
                                    บันทึกที่อยู่
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- payment -->
                <!-- <div class="row">
                    <hr />
                    <div class="col-8">
                        <h3>ชำระเงิน</h3>
                        <div class="row py-3">
                            <div class="col-6 d-flex">
                                <div class="form-check mx-2">
                                    <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault"
                                        id="cadit" value="credit card" v-model=" pay_type " />
                                    <label class="form-check-label mx-2" for="cadit" style="font-size: 20px !important">
                                        ชำระผ่านบัตรเคดิต
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-check mx-2">
                                    <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault" id="cash"
                                        value="cash" v-model=" pay_type " />
                                    <label class="form-check-label mx-2" for="cash" style="font-size: 20px !important">
                                        เก็บเงินปลายทาง
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->

                <div class="row py-3">
                    <div class="col-8">
                        <h3>หมายเหตุคำสั่งซื้อ</h3>
                        <div class="mb-2">
                            <label for="exampleFormControlTextarea1"
                                class="form-label">บอกหมายเหตุเพิ่มเติมเพื่อให้เรารู้ถึงความต้องการของคุณ</label>
                            <textarea class="form-control" rows="3" v-model=" note "></textarea>
                        </div>
                    </div>
                </div>

                <div class="row py-2 my-1">
                    <div class="col" style="color: aliceblue">
                        <div class="row">
                            <div class="col">
                                <a href="#" style="color: aliceblue">
                                    <h4>กดดูเงื่อนไขการสั่งซื้อ</h4>
                                </a>
                            </div>
                        </div>
                        <div class="row py-3">
                            <div class="col">
                                <div class="form-check">
                                    <input class="form-check-input py-3 px-3" type="checkbox" value="1"
                                        id="flexCheckDefault" />
                                    <label class="form-check-label mx-2" for="flexCheckDefault">
                                        <h4>ยอมรับเงื่อนไขการสั่งซื้อสินค้าทั้งหมด</h4>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                             <div class="col d-flex" style="cursor: pointer"> 
                                <button class="btn btn-warning col-8 btn-lg" style="font-size: 35px" @click=" checkout() ">
                                    ดำเนินการชำระเงิน
                                </button> 
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
                        <h3>สินค้าในตระกร้า ( {{cart.length}} รายการ )</h3>
                    </div>
                </div>
                <div class="row order_flow">
                    <div class="col">
                        <table class="table" style="color: aliceblue">
                            <thead class="">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody style="" class="">
                                <tr v-for="item  in cart" :key="item">
                                    <th class="">
                                        <div class="card" style="border: none; background-color: #464646">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <img :src=" 'http://localhost:4000/uploads/' + item.image "
                                                        class="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div class="col">
                                                    <div class="card-body">
                                                        <h4 class="card-title tr_p">{{ item.brand }}</h4>
                                                        <p class="card-text">{{ item.product_name }}</p>
                                                        <p class="card-text tr_p">
                                                            รหัสสินค้า: {{ item.product_id }}
                                                        </p>
                                                        <p class="card-text tr_p">สี: {{ item.color }}</p>
                                                        <p class="card-text tr_p">
                                                            ขนาด: {{ item.size }} EUR
                                                        </p>
                                                        <p class="card-text tr_p">
                                                            ราคา: {{ item.price }} THB
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="" style="width: fit-content">
                                        <h3>x1</h3>
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
                                <h3 class="text-end">{{ price_sum }}.00 THB</h3>
                            </div>
                        </div>
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ค่าจัดส่ง:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">{{ delivery_price }}.00 THB</h3>
                            </div>
                        </div>
                        <hr />
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ราคารวม:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">
                                    {{ price_sum + Number(delivery_price) }}.00 THB
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="row py-4 my-3">
                    <div class="col" style="color:aliceblue">
                        <div class="row">
                            <div class="col">
                                <a href="#" style="color:aliceblue">
                                    <h4>กดดูเงื่อนไขการสั่งซื้อ</h4>
                                </a>
                            </div>
                        </div>
                        <div class="row py-3">
                            <div class="col">
                                <div class="form-check">
                                    <input class="form-check-input py-3 px-3" type="checkbox" value="1"
                                        id="flexCheckDefault">
                                    <label class="form-check-label mx-2" for="flexCheckDefault">
                                        <h4>ยอมรับเงื่อนไขการสั่งซื้อสินค้าทั้งหมด</h4>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col d-flex" style="cursor: pointer;">
                                <button class="btn btn-warning col-12 btn-lg" style="font-size: 35px; " @click=" checkout() ">
                                    ดำเนินการชำระเงิน
                                </button>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="row">
        </div>
    </div>
</template>

<script >

import service_cart from "@/service/service_cart";
import service_checkout from "@/service/service_checkout";
import amphur from "../assets/address/thai_amphures";
import provice from "../assets/address/thai_provinces";
import tumbon from "../assets/address/thai_tambons";

export default {
    data() {
        return {
            cart: {},
            new_address: false,
            amphur: amphur,
            provice: provice,
            tumbon: tumbon,
            provice_id: "",
            amphur_id: "",
            tumbon_id: "",
            zipcode: "",
            provice_name: "",
            amphur_name: "",
            tumbon_name: "",
            phoe_newAddr: "",
            name_newAddr: "",
            address_new: "",
            delivery_price: 0,
            pay_type: "",
            price_sum: 0,
            amount_item: 0,
            cus_address: {},
            address_number: -1,
            note: "",
            discount: 0,
        };
    },
    async created() {
        try {
            const _cart = await service_cart.request_cart();
            if (_cart.data.status == true) {
                this.cart = _cart.data.cart;
            } else {
                window.location.href = "/login";
            }
            const _address = await service_checkout.getCustomer_address();
            this.cus_address = _address;
        }catch (er) {
            console.log(er);
            alert("เกิดข้อผิดพลาด กรุณากด รีเฟช")
        }
        this.cart.forEach((item) => {
            this.price_sum += item.price * item.amount;
            this.amount_item += item.amount;
        });
    },
    watch: {
        provice_id(newval) {
            this.provice.RECORDS.forEach((el) => {
                if (el.id == newval) {
                    this.provice_name = el.name_th;
                }
            });
        },
        amphur_id(newval) {
            this.amphur.RECORDS.forEach((el) => {
                if (el.id == newval) {
                    this.amphur_name = el.name_th;
                }
            });
        },
        tumbon_id(newval) {
            this.tumbon.RECORDS.forEach((el) => {
                if (el.id == newval) {
                    this.tumbon_name = el.name_th;
                    this.zipcode = el.zip_code;
                }
            });
        },
    },
    methods: {
        async addNew_address() {
            const address = {
                name: this.name_newAddr,
                phone: this.phoe_newAddr,
                address: this.address_new,
                provices: this.provice_name,
                amphur: this.amphur_name,
                tumbon: this.tumbon_name,
                zib_code: this.zipcode,
            };
            const callApi = await service_checkout.addnew_address(address);
            if (callApi.status == true) {
                window.location.href = "/check-out";
            }
        },
        async checkout() { 
            if (this.address_number <= -1) {
                return alert("กรุณาเลือกที่อยู่");
            }
            var doc_deli = '';
            if (this.delivery_price == 0){
                doc_deli = "รับสินค้าที่ร้าน"
            }else if (this.delivery_price == 20){
                doc_deli = "จัดส่งสินค้าแบบปกติ (5-7 วัน)"
            }else if (this.delivery_price == 80){
                doc_deli = "จัดส่งสินค้าแบบพิเศษในราคา 80 บาท (1-2 วัน)"
            }

            const orde_infos = {
                price: this.price_sum + Number(this.delivery_price) - Number(this.discount),
                delivery: this.delivery_price,
                address_number: this.address_number,
                text_delivery: doc_deli,
                note: this.note,
                discount: Number(this.discount),
                cart: this.cart
            };
            const paytoken =  await service_checkout.payment(orde_infos)
            if (paytoken.data.status == false){
                window.location.href = '/login'
            }
            // service_checkout.payment(orde_info)
            window.location.href = 'http://localhost:4000/pay/?code='+ paytoken.data.payToken
            console.log(orde_infos);
        },
    },

};
</script>

<style scoped>
.order_flow {
    height: 550px !important;
    overflow-y: auto;
    overflow-x: hidden;
}
.tr_p {
    margin-top: -15px !important;
}
.s_fix {
    max-height: 1200px !important;
}
</style>