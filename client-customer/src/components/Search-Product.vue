<template>
    <head>
      <title>
        {{ title }}
      </title>
    </head>
    <div class="container py-4 VueBg">
      <div class="row">
        <div class="col-12">

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
  
          <div class="row py-2 position-relative mx-4" v-if="load_state == true">
            <div class="col-3 mx-3 py-3" v-for="item in product" :key="item"
            v-show="item.product_name.toLowerCase().includes(url.toLowerCase()) || item.brand.toLowerCase().includes(url.toLowerCase())">
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
        url: window.location.search,
        title: "",
        size: [],
        max_price: 50000,
        min_price: 0,
        search_all: true,
        product: [],
        list_num: 9,
        now_list: 0,
        load_state: false,
        type_product: '',
        s_color:'',
      };
    },
    async created() {
      const product_ = await service_product.getProduct();
      console.log(document.readyState, document.readyState === "complete");
      if (document.readyState === "complete") {
        this.load_state = true;
      }
      this.product = product_.data;
      const getData = new URLSearchParams(window.location.search);
      this.url = getData.get('find');

      if (this.url){
        this.search_all = false
      }

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