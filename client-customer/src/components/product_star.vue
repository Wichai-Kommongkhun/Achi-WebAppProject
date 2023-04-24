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

            <div class="col mx-5 " style="color:aliceblue" v-show="edit_active == false">
                <div class="row">
                    <div class="col-10">
                        <h2>สินค้าที่ฉันสนใจ</h2>
                        <hr size ="20px">
                    </div>
                        <div class="card bg-dark" style="width: 18rem; margin-right: 5%; ">
                            <img src="https://lzd-img-global.slatic.net/g/p/9a761cd5dc6b4456fd80bed73d8921ea.jpg_720x720q80.jpg_.webp"
                                class="" alt="..." width="100%" height="280px" />
                            <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                                <h5 class="card-title">ADIDAS</h5>
                                <p class="card-text"> ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</p>
                                <h3>8,500.00 THB</h3>
                                <div class="star text-end">
                                    <span>
                                        <i class="bi bi-star-fill" style="font-size:24px;"></i>
                                        <!-- text-warning -->
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-dark" style="width: 18rem; height: ; ">
                            <img src="https://lzd-img-global.slatic.net/g/p/9a761cd5dc6b4456fd80bed73d8921ea.jpg_720x720q80.jpg_.webp"
                                class="" alt="..." width="100%" height="280px" />
                            <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                                <h5 class="card-title">ADIDAS</h5>
                                <p class="card-text"> ADIDAS X SPEEDPORTAL MESSI .1 FG - TMSOOR/MINRUS/CBLACK</p>
                                <h3>8,500.00 THB</h3>
                                <div class="star text-end">
                                    <span>
                                        <i class="bi bi-star-fill" style="font-size:24px;"></i>
                                        <!-- text-warning -->
                                    </span>
                                </div>
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