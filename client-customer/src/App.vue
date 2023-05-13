<template>
  <div class="container-fluid">
      <navBar></navBar>
      <router-view></router-view>
      <br>
  </div>
  <Footer></Footer>
</template>


<script>

import navBar from './components/navBar.vue'
import Footer from './components/Achi-Footer.vue'
export default {
  name: 'App',
  components: {
    navBar,
    Footer,
  },
  data(){
    return{
    }
  },
  created(){
    },
}
</script>

<style>
.VueBg {
  background: #1a1818;
}

</style>