<template>
  <head>
    <title>
      {{ title }}
    </title>
  </head>
  <div class="container py-4 VueBg">
    <div class="row">
      <!-- select to Show -->
      <div class="col-2 border-end">
        <!-- Brand -->
        <div class="row" style="color: #fff">
          <div class="col">
            <h4>ยี่ห้อสินค้า</h4>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="s_nike" id="flexCheckDefault" />
              <label class="form-check-label"> NIKE </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="s_adi" id="flexCheckDefault" />
              <label class="form-check-label"> ADIDAS </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="s_puma" id="flexCheckDefault" />
              <label class="form-check-label"> PUMA </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="s_mizu" id="flexCheckDefault" />
              <label class="form-check-label"> MIZUNO </label>
            </div>
            <hr />
          </div>
        </div>
        <!-- <div class="row" style="color: #fff">
          <div class="col">
            <div class="size_title d-flex">
              <h4>ไซต์</h4>
            </div>
            <div class="checksize">
              <div class="form-check" v-for="(item, index) in size" :key="index">
                <input class="form-check-input" type="checkbox" :value="item" id="flexCheckDefault" @click="select_size(index)"/>
                <label class="form-check-label" >
                  {{ item }}
                </label>
              </div>
            </div>

            <hr />
          </div>
        </div> -->
        <!-- <div class="row" style="color: #fff">
          <div class="col">
            <h4>สี</h4>
            <div class="form-check" v-for="(item, index) in color" :key="index">
              <input class="form-check-input" type="checkbox" :value="item" id="flexCheckDefault" @click="select_color(index)" />
              <label class="form-check-label">
                {{ item }}
              </label>
            </div>
            <hr />
          </div>
        </div> -->
        <div class="row" style="color: #fff">
          <div class="col">
            <h4>ราคา</h4>
            <div class="py-1">
              <label for="customRange3" class="form-label">ราคาต่ำสุด {{ min_price }}
              </label>
              <input type="range" class="form-range" min="0" max="30000" step="100" v-model="min_price" />
            </div>
            <div class="py-1">
              <label for="customRange3" class="form-label">ราคาสูงสุดสุด {{ max_price }}</label>
              <input type="range" class="form-range" min="0" max="30000" step="100" id="customRange3"
                v-model="max_price" />
            </div>
          </div>
        </div>
      </div>

      <!-- show product -->
      <div class="col-10">
        <!-- Header show product -->
        <div class="row" style="color: #fff">
          <div class="col d-flex">
            <h1>{{ title }} ({{ numPro }} item)</h1>
            <!-- <div class="sort mt-2 mx-4">
              <h2>เรียงตาม :</h2>
            </div> -->
            <!-- <div class="select_sort mt-2">
              <select name="" id="" class="form-select">
                <option selected value="A_Z">เรียงตามชื่อ A-z</option>
                <option value="z-A">เรียงตามชื่อ Z-A</option>
                <option value="min_to_max">เรียงตามราคา น้อย-มาก</option>
                <option value="max_to_min">เรียงตามราคา มาก-น้อย</option>
              </select>
            </div> -->
          </div>
        </div>

        <div class="d-flex justify-content-center py-4 mt-4" v-if="load_state == false">
          <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-secondary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-danger" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-warning" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="spinner-grow text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <div class="row py-2 position-relative" v-if="load_state == true">
          <div class="col-3 mx-3 py-3" v-for="item in product" :key="item" 
            v-show="(type_product === item.type_product) && ((search_all ? true : false) ||
            (s_nike && item.brand.toUpperCase() === 'NIKE' ? true : false) ||
            (s_adi && item.brand.toUpperCase() === 'ADIDAS' ? true : false) ||
            (s_puma && item.brand.toUpperCase() === 'PUMA' ? true : false) ||
            (s_mizu && item.brand.toUpperCase() === 'MIZUNO' ? true : false)) &&
             Number(min_price)<=Number(item.price) &&  Number(max_price)>=Number(item.price)">

            <div class="card bg-dark" style="width: 18rem; height: ">
              <img :src="'http://localhost:4000/uploads/' + item.image" class="" style=" max-width: 300px; min-height: 300px; 
                max-height: 300px; cursor: pointer;" @click="go_detal(item.product_id, item.product_name)" />

              <div class="card-body text-start" style="color: #fff; width: 18rem; height: 12rem">
                <h5 class="card-title">{{ item.brand }}</h5>
                <p class="card-text" @click="go_detal(item.product_id, item.product_name)" style="cursor: pointer">
                  {{ item.product_name }}
                </p>
                <h3 style="cursor: pointer" @click="go_detal(item.product_id, item.product_name)">
                  {{ item.price }}.00 THB
                </h3>
                <!-- <div class="star text-end position-absolute bottom-0 end-0 mx-2">
                  <span class="star">
                    <i class="bi bi-star" style="font-size: 24px"></i>
                  </span>
                </div> -->
              </div>
            </div>
          </div>
        </div>
<!-- <div>{{ product }}</div> -->
        <!-- <div class="row d-flex justify-content-center">
          <div class="d-grid col-6 mx-aut">
            <button type="button" class="btn btn-warning mb-4 btn-lg">
              ดูสินค้าเพิ่มเติม
            </button>
          </div>
        </div> -->

      </div>
    </div>
  </div>
</template>

<script>
import service_product from "@/service/service_product";

export default {
  data() {
    return {
      url: window.location.search,
      title: "",
      brand: ["NIKE", "ADIDAS", "PUMA", "MIZUNO"],
      size: [],
      color: ["red", "white", "blue", "pink", "orange", "green", "grey"],
      max_price: 50000,
      min_price: 0,
      search_all: true,
      s_nike: false,
      s_puma: false,
      s_adi: false,
      s_mizu: false,
      product: [],
      list_num: 9,
      now_list: 0,
      load_state: false,
      type_product: '',
      s_color:'',
      numPro: 0
    };
  },
  async created() {
    for (let i = 32; i < 45.5; i += 0.5) {
      this.size.push(i);
    }
    if (this.url === "?p=football") {
      this.title = "FootBall - Boot";
      this.type_product = 'football'
    }
    if (this.url == "?p=futsal") {
      this.title = "FutSal - Boot";
      this.type_product = 'futsal'
    }

    const product_ = await service_product.getProduct();
    console.log(document.readyState, document.readyState === "complete");
    if (document.readyState === "complete") {
      this.load_state = true;
    }
    this.product = product_.data;

    this.product.forEach(el => {
      if (el.type_product === this.type_product){
        this.numPro += 1
      }
    });
  },
  watch: {
    s_nike(n) {
      if (!n) {
        this.search_all = true;
      } else {
        this.search_all = false;
      }
    },
    s_adi(n) {
      if (!n) {
        this.search_all = true;
      } else {
        this.search_all = false;
      }
    },
    s_puma(n) {
      if (!n) {
        this.search_all = true;
      } else {
        this.search_all = false;
      }
    },
    s_mizu(n) {
      if (!n) {
        this.search_all = true;
      } else {
        this.search_all = false;
      }
    },
  },
  methods: {
    go_detal(pid, name) {
      window.location.href = `/product/${pid}/${name}`;
    },
    async addStar(index) {
      console.log(index, 121);
    },
    select_size(index){
      if (!index){
        this.s_size = this.size
      }
      else{
        this.s_size = this.size[index]
      }
      console.log(this.s_size);
    },
    select_color(index){
      console.log(index);
      console.log(this.color[index]);
      if (!index && index != 0){
        this.s_color = this.color
      }
      else{
        this.s_color = this.color[index]
        console.log(this.s_color);
      }

    }
  },
};
</script>

<style scoped>
.checksize {
  height: 12rem;
  overflow: scroll;
  overflow-x: hidden;
  -webkit-scrollbar-track: yellowgreen;
}

.star {
  cursor: pointer;
}

.star:hover {
  color: rgb(236, 209, 0);
}
</style>