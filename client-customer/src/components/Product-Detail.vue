<template>
    <head>
        <title>{{ product[0].product_name }}</title>
    </head>
    <div class="container py-4">
        <div class="row">
            <div class="col" style="color:aliceblue">
                <h2>{{ product[0].product_name }}</h2>
            </div>
        </div>
        <div class="row py-1">
            <div class="col-6">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <!-- <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div> -->
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="'http://localhost:4000/uploads/' + product[0].image" class="d-block w-100"
                                height="600">
                        </div>
                        <!-- <div class="carousel-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqPHrei_knEZ4ePQibKPc1BiMF250zuC-YbMLGyJEUmcviwQkULVrSrO5BT77svcd-DB4&usqp=CAU"
                                class="d-block w-100" height="600">
                        </div>
                        <div class="carousel-item">
                            <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/730916bf-eeb5-4f30-a4f0-dde6a9c54467/zoom-mercurial-vapor-15-elite-ag-pro-football-boots-sQFdvG.png"
                                class="d-block w-100" height="600">
                        </div> -->
                    </div>
                    <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button> -->
                </div>
                <div class="row py-4 " style="color:aliceblue">
                    <div class="col">
                        <h2>รายละเอียด</h2>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col">
                            <p>
                                {{ product[0].detail }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ProductDail -->
            <div class="col-6" style="color: aliceblue;">
                <div class="row">
                    <div class="col">
                        <h1>{{ product[0].brand }}</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h2>{{ product[0].product_name }}</h2>
                        <h3>รหัสสินค้า: {{ product[0].product_id }}</h3>
                        <h3>สี: {{ product[0].color }}</h3>
                        <h3 style="color:#ce4910">จำนวนสินค้าในคลัง: {{ amount_store }}</h3>
                    </div>
                </div>
                <!-- <div class="row py-4">
                    <div class="col d-flex">
                        <h3>ขนาด: </h3>
                        <div class="mx-4">
                            <div class="col">
                                <select id="inputState" class="form-select"
                                    style="background-color: #1a1818; color: aliceblue;">
                                    <option selected>EUR</option>
                                    <option>US</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="row">
                    <!-- <div class="col-2 py-2 mx-0 form-check" v-for=" item in size" :key="item">
                        <input type="radio" class="btn-check form-check-input" name="options" :id="'size-'+item" autocomplete="off">
                        <label class="btn bg-chekbox btn-lg" :for="'size-'+item">{{ item }} {{ unit }}</label>
                    </div> -->
                    <div class="col-2 py-2 mx-0 form-check" v-for=" (item, index) in size" :key="item" :index="index">
                        <input type="radio" class="btn-check" name="options-outlined" :id="'size' + item" autocomplete="off"
                            @click="select_size(index); item_amo = 1;" :disabled="product[index].amount < 1 ? true : false">
                        <label class="btn btn-outline-warning" :for="'size' + item">{{ item }} {{ unit }}</label>
                    </div>
                </div>
                <div class="row py-4">
                    <div class="col d-flex">
                        <h2>จำนวน:</h2>
                        <div class="btn-group mx-4" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-light"
                                @click="item_amo > 1 ? item_amo-- : false">-</button>
                            <input type="text" class="form-control text-center ele-num"
                                style="color: aliceblue; background-color: #1a1818;" v-model="item_amo">
                            <button type="button" class="btn btn-outline-light" @click="item_amo < amount_store ? item_amo++: null">+</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h2>ราคา: {{ product.price }} THB</h2>
                    </div>
                </div>
                <div class="row py-3">
                    <div class="col d-flex">
                        <button type="button" class="btn btn-primary col-6 btn-lg" style="font-size: 35px;"
                            @click="addCart">เพิ่มใส่ตะกร้า</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import service_product from '@/service/service_product';
import service_cart from '@/service/service_cart';
// function select_size(){
// }
export default {
    data() {
        return {
            title: "",
            size: [],
            unit: "EUR",
            item_amo: 1,
            product: [],
            amount_store: '',
            size_store: 0
        }
    },
    async created() {
        const pid = this.$route.params.pid;
        // console.log('pid find',pid);
        const produc_ = await service_product.getProduct_detali(pid);
        this.product = produc_.data;
        var ready_sale = 0;
        this.product.forEach(item => {
            ready_sale += item.amount;
            this.size.push(item.size)
        })

        if (ready_sale == 0) {
            this.amount_store = 'สินค้าหมดชั่วคราว'
        }
    },
    methods: {
        select_size(index) {
            this.size_store = this.product[index].size;
            this.amount_store = this.product[index].amount;
        },
        async addCart() {
            if (this.size_store != 0) {
                await service_cart.addCart({
                    amount: this.item_amo,
                    size: this.size_store,
                    product_id: this.product[0].product_id
                });
                alert("Save in cart")
            }else{
                alert("SELECT SIZE ?")
            }
        }
    }
}
</script>

<style scoped>
.bg-chekbox {
    background-color: rgb(49, 49, 49);
    color: aliceblue;
}
</style>