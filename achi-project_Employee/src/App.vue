<template>

  <div class="container-fluid py-3 v_bg">
    <div class="row">
      <div class="col d-flex justify-content-center">
        <a href="/employeeSelect" @click="go()"><img src="@/assets/logo.png" alt="" width="120"></a>
      </div>
    </div>
    <!-- <router-view v-if="login"></router-view>
    <Login v-else></Login> -->
    <router-view></router-view>
  </div>

  <!-- <Product v-if="fales">
  </Product> -->
  
  <!-- <Admin v-if="fales">
  </Admin> -->
</template>

<script>



export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      // product_info: JSON.parse(localStorage.getItem("product_key")), 
      // admin_info: JSON.parse(localStorage.getItem("admin_key"))
    }
  },
  created() {
   
  },

  methods:{
      go(){
      let re = localStorage.getItem("product_key");
      let ke = localStorage.getItem("admin_key");
      console.log(123);
      console.log(JSON.parse(re));
      console.log(JSON.parse(ke));
    }
    
  }
}
</script>

<style>
  .v_bg{
    background-color: #2C2C2C;
  }
</style>
