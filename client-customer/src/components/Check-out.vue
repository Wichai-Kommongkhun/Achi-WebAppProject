<template>
    <head>
        <title>
            ดำเนินการสั่งซื้อ
        </title>
    </head>

    <div class="container py-3">
        <div class="row py-2 mx-4" style="color: aliceblue;">
            <!--  -->
            <div class="col-7">
                <div class="row">
                    <div class="row py-2">
                        <div class="col">
                            <h3>วิธีการจัดส่ง:</h3>
                        </div>
                    </div>
                    <div class="row py-3">
                        <div class="col-4 d-flex">
                            <div class="form-check mx-2">
                                <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label mx-2" for="flexRadioDefault1"
                                    style="font-size: 20px !important;">
                                    จัดส่งสินค้าแบบปกติ (5-7 วัน)
                                </label>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-check mx-2">
                                <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label mx-2" for="flexRadioDefault1"
                                    style="font-size: 20px !important;">
                                    จัดส่งสินค้าแบบพิเศษในราคา 80 บาท (1-2 วัน)
                                </label>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-check mx-2">
                                <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label mx-2" for="flexRadioDefault1"
                                    style="font-size: 20px !important;">
                                    รับสินค้าที่ร้าน
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col">
                        <hr>
                        <h3>ที่อยู่จัดส่ง:</h3>
                    </div>
                </div>

                <div class="" v-show="new_address == false">
                    <div class="row py-3 ">
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault"
                                    id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                    ชื่อ: Wichai KommongKhun Tel: 0802535629 เลขที่ 1 ซอย ฉลองกรุง 1 แขวง ลาดกระบัง
                                    เขตลาดกระบัง กรุงเทพมหานคร 10520
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col text-center">
                            <a href="#" style="color: #E3AF4A;" @click="new_address = true">
                                <h5>เพิ่มที่อยู่จัดส่ง</h5>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Add address -->
                <div class="row py-3" v-show="new_address">
                    <div class="col">
                        <div class="col-5 py-1">
                            <label for="exampleFormControlInput1" class="form-label">ชื่อ *</label>
                            <input type="text" class="form-control" placeholder="">
                        </div>
                        <div class="col-5 py-2">
                            <label for="exampleFormControlInput1" class="form-label">เบอร์โทรศัพท์ *</label>
                            <input type="text" class="form-control" placeholder="">
                        </div>
                        <div class="col-8 py-2">
                            <label for="exampleFormControlInput1" class="form-label">ที่อยู่ *</label>
                            <textarea type="text" class="form-control" rows="2" placeholder=""></textarea>
                        </div>
                        <div class="row">
                            <div class="col-4 py-2">
                                <label for="inputState" class="form-label">State</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-4 py-2">
                                <label for="inputState" class="form-label">State</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-4 py-2">
                                <label for="inputState" class="form-label">State</label>
                                <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="col-4 py-2">
                                <label for="exampleFormControlInput1" class="form-label">รหัสไปรษณีย์ *</label>
                                <input type="text" class="form-control" placeholder="">
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-4 d-flex">
                                <button type="button" class="btn btn-success" @click="new_address = false"
                                    style="font-size: 20px;">บันทึกที่อยู่</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- payment -->
                <div class="row">
                    <hr>
                    <div class="col-8">

                        <h3>ชำระเงิน</h3>
                        <div class="row py-3">
                            <div class="col-6 d-flex">
                                <div class="form-check mx-2">
                                    <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label mx-2" for="flexRadioDefault1"
                                        style="font-size: 20px !important;">
                                        ชำระผ่านพร้อมเพย์
                                    </label>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-check mx-2">
                                    <input class="form-check-input py-2 px-2" type="radio" name="flexRadioDefault"
                                        id="flexRadioDefault1">
                                    <label class="form-check-label mx-2" for="flexRadioDefault1"
                                        style="font-size: 20px !important;">
                                        เก็บเงินปลายทาง
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-3">
                    <div class="col-8">
                        <h3>หมายเหตุคำสั่งซื้อ</h3>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1"
                                class="form-label">บอกหมายเหตุเพิ่มเติมเพื่อให้เรารู้ถึงความต้องการของคุณ</label>
                            <textarea class="form-control" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-5 py-4 s_fix rounded-start" style="background-color: #464646;">
                <div class="row">
                    <div class="col text-center">
                        <h2>สรุปคำสั่งซื้อ</h2>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col">
                        <h3>สินค้าในตระกร้า (2รายการ)</h3>
                    </div>
                </div>
                <div class="row order_flow">
                    <div class="col">
                        <table class="table " style="color:aliceblue">
                            <thead class="">
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody style="" class="">
                                <tr v-for="index in 2" :key="index">
                                    <th class="">
                                        <div class="card" style=" border: none; background-color: #464646;">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <img src="https://www.futbolemotion.com/imagesarticulos/188051/grandes/bota-adidas-predator-accuracy-.3-fg-core-black-white-shock-pink-0.jpg"
                                                        class="img-fluid rounded-start" alt="...">
                                                </div>
                                                <div class="col">
                                                    <div class="card-body">
                                                        <h4 class="card-title tr_p">NIKE</h4>
                                                        <p class="card-text">NIKE GRIPKNIT PHANTOM GX ELITE FG - BALTIC</p>
                                                        <p class="card-text tr_p">รหัสสินค้า: 10750280</p>
                                                        <p class="card-text tr_p">สี: BLUE, PINK, WHITE</p>
                                                        <p class="card-text tr_p">ขนาด: 40 EUR</p>
                                                        <p class="card-text tr_p">ราคา: 8,500 THB</p>
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
                <hr>
                <div class="row">
                    <div class="col">
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ยอดรวม:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">6500.00 THB</h3>
                            </div>
                        </div>
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ค่าจัดส่ง:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">80.00 THB</h3>
                            </div>
                        </div>
                        <hr>
                        <div class="row py-1 mb-3">
                            <div class="col-6">
                                <h3 class="text-strat">ราคารวม:</h3>
                            </div>
                            <div class="col-6">
                                <h3 class="text-end">6580.00 THB</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row py-4 my-3">
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
                                        <input class="form-check-input py-3 px-3" type="checkbox" value=""
                                            id="flexCheckDefault">
                                        <label class="form-check-label mx-2" for="flexCheckDefault">
                                            <h4>ยอมรับเงื่อนไขการสั่งซื้อสินค้าทั้งหมด</h4>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col d-flex">
                                    <button type="button" class="btn btn-warning col-12 btn-lg"
                                        style="font-size: 35px;">ดำเนินการชำระเงิน</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
        <div class="row">
            <div class="col" style="height: 200px !important;">
                <!-- for future -->
            </div>
        </div>
    </div>

    
</template>

<script>
export default {
    data() {
        return {
            new_address: false
        }
    }
}
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