<template>
    <head>
        <title>บันชีของฉัน</title>
    </head>

    <div class="container">
        <hr style="color:aliceblue">
        <div class="row py-2">
            <div class="col-3 border-end">
                <div class="d-flex py-2">
                    <a href="#" style="color: aliceblue; text-decoration: none;">
                        <h2>บันชีของฉัน</h2>
                    </a>
                    <a href=""><img src="@/assets/icons/user.svg" class="mx-2"></a>
                </div>
                <div class="d-flex py-2">
                    <a href="#" style="color: aliceblue; text-decoration: none;">
                        <h2>ประวัติการสั่งซื้อ</h2>
                    </a>
                    <a href=""><img src="@/assets/icons/user.svg" class="mx-2"></a>
                </div>
                <div class="d-flex py-2">
                    <a href="#" style="color: aliceblue; text-decoration: none;">
                        <h2>สินค้าที่สนใจ</h2>
                    </a>
                    <a href=""><img src="@/assets/icons/user.svg" class="mx-2"></a>
                </div>
                <div class="d-flex py-2">
                    <a href="#" style="color: aliceblue;">
                        <h2>ออกจากระบบ</h2>
                    </a>
                    <a href=""><img src="@/assets/icons/user.svg" class="mx-2"></a>
                </div>
            </div>

            <div class="col mx-5 " style="color:aliceblue" v-show="edit_active == false" v-for="item in 1" :key="item">
                <div class="row">
                    <div class="col-10">
                        <h2>ประวัติการสั่งซื้อ</h2>
                        <hr size="20px">
                    </div>
                    <div class="col-12" style="border: 1px solid white; height: 20%;">

                        <div style="height: 2rem;">
                            <h6 style="display: inline;">รายการคำสั่งซื้อล่าสุด วันที่ </h6>
                            <button class="btn btn-danger btn"
                                style="display: inline; margin-left: 85%; margin-top: -2%; width: 100px; margin-bottom: 0%;">ดูคำสั่งซื้อ</button>
                        </div>
                        <h5 style="color: yellow;">เลขที่คำสั่งซื้อ: </h5>
                        <img src="https://cdn.discordapp.com/attachments/954014737979564052/1080804648321040444/image.png"
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
                                    <tr class="size_tr">
                                        <td> </td>
                                        <td></td>
                                        <td> Bath</td>
                                        <td></td>
                                        <td></td>
                                        <td><a :href="'/order_de?oid='" style="color: aliceblue;" >รายละเอียด</a></td>
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
export default {
    data() {
        return {
            edit_active: false,
        }
    },
    created(){
    },
    methods:{

    }
}
</script>

<style>
.fix_data {
    color: rgb(255, 255, 255);
    text-decoration: none;
    border: 1px solid #fff;
    padding: 2px;
    border-radius: .2rem;
}

.fix_data:hover {
    color: rgb(231, 170, 15);
    cursor: pointer;
}
</style>