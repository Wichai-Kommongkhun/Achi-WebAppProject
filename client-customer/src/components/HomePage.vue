<template>
  <head>
    <title>AchiFootBall</title>
  </head>
  <div class="container py-3">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://wallpaperaccess.com/full/6324752.jpg" class="d-block w-100" />
        </div>
        <div class="carousel-item">
          <img src="https://wallpaperaccess.com/full/6324752.jpg" class="d-block w-100" />
        </div>
        <div class="carousel-item">
          <img src="https://wallpaperaccess.com/full/6324752.jpg" class="d-block w-100" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="row py-3 mx-4">
      <div class="col-3 d-flex mx-4">
        <img src="@/assets/images/bus.png" alt="delivery" width="100px" />
        <div class="col py-4 mx-3" style="color: #fff">
          <h3>ส่งฟรีทั่วไทย</h3>
        </div>
      </div>
      <div class="col-4 d-flex">
        <img src="@/assets/images/cashDeli.png" alt="delivery" />
        <div class="col py-4" style="color: #fff">
          <h3>บริการเก็บเงินปลายทาง</h3>
        </div>
      </div>
      <div class="col-4 d-flex mx-4">
        <img src="@/assets/images/product_return.png" alt="delivery" />
        <div class="col py-4 mx-3" style="color: #fff">
          <h3>คืนสินค้าภายใน 14 วัน</h3>
        </div>
      </div>
    </div>
    <br /><br>
    <div class="row">
      <div class="col text-center" style="font-size: 50px; color: aliceblue;">
        <text>ยินดีต้อนรับสู่เว็บไซต์ ACHI FootBall</text>
      </div>
    </div>
    <br><br>
  </div>

  <div class="container-fluid">
    <div class="row py-4">
      <div class="col d-flex justify-content-center" style="color: #fff">
        <img src="@/assets/icons/icon_title1.svg" alt="" />
        <h2 class="mx-2">สินค้าใหม่</h2>
      </div>
    </div>

    <div class="row px-4 py-4">
      <div class="col-12 ">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-2">
                  <button class="carousel-control-prev move" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <img src="@/assets/icons/l_pre.svg" alt="">
                  </button>
                </div>
                <div class="col-2" v-for="item in product" :key="item" v-show="item.p_status === 'new' && item.type_product === 'football'">
                  <div class="card bg-dark " style="width: 18rem; height: ; ">
                    <img :src="'http://localhost:4000/uploads/' + item.image" class="" alt="..."
                      style="max-width: 300px; min-height: 300px; max-height: 300px; cursor: pointer;"   @click="go_detal(item.product_id, item.product_name)" />
                    <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                      <h5 class="card-title" >{{ item.brand }}</h5>
                      <p class="card-text" @click="go_detal(item.product_id, item.product_name)" style="cursor: pointer;" > {{ item.product_name }}</p>
                      <h3 @click="go_detal(item.product_id, item.product_name)" style="cursor: pointer;" >
                        {{ item.price }}.00 THB
                      </h3>
                      <!-- <div class="star text-end">
                        <span>
                          <i class="bi bi-star" style="font-size:24px;"></i>
                        </span>
                      </div> -->
                    </div>
                  </div>
                </div>

                <div class="col-2 move ">
                  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <img src="@/assets/icons/R_next.svg" alt="">
                  </button>
                </div>
              </div>
            </div>
            <!-- Not show now -->
            <div class="carousel-item">
              <div class="row">
                <div class="col-2">
                  <button class="carousel-control-prev move" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
                    <img src="@/assets/icons/l_pre.svg" alt="">
                  </button>
                </div>
                <div class="col-2" v-for="item in product" :key="item" v-show="item.p_status === 'new' && item.type_product === 'futsal'">
                  <div class="card bg-dark " style="width: 18rem; height: ; ">
                    <img :src="'http://localhost:4000/uploads/' + item.image" class="" alt="..."
                      style="max-width: 300px; min-height: 300px; max-height: 300px; cursor: pointer;"   @click="go_detal(item.product_id, item.product_name)" />
                    <div class="card-body text-start" style="color:#fff; width: 18rem; height: 12rem;">
                      <h5 class="card-title" >{{ item.brand }}</h5>
                      <p class="card-text" @click="go_detal(item.product_id, item.product_name)" style="cursor: pointer;" > {{ item.product_name }}</p>
                      <h3 @click="go_detal(item.product_id, item.product_name)" style="cursor: pointer;" >
                        {{ item.price }}.00 THB
                      </h3>
                      <!-- <div class="star text-end">
                        <span>
                          <i class="bi bi-star" style="font-size:24px;"></i>
                        </span>
                      </div> -->
                    </div>
                  </div>
                </div>
                <div class="col-2 move">
                  <!-- <button class="carousel-control-prev btn-lg move" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button> -->
                  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
                    <!-- <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span> -->
                    <img src="@/assets/icons/R_next.svg" alt="">
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service_product from "@/service/service_product";
export default {
  data() {
    return {
      product: '',
    };
  }, 
  methods: {
    go_detal(pid, name) {
      window.location.href = `/product/${pid}/${name}`;
    },
  },
 async created(){
    const product_ = await service_product.getProduct();
    this.product = product_.data
  }
};
</script>

<style>
.VueBg {
  background: #1a1818;
}

.move:hover {
  background-color: rgb(58, 58, 58);
}
</style>