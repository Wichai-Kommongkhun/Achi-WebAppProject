import {createWebHistory, createRouter} from "vue-router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";
//import navBar from "@/components/navBar.vue";
import HomePage from "@/components/HomePage.vue";
import List_Product from "@/components/List-Product.vue";
import Login from "@/components/Login-user.vue";
import Register from "@/components/Register-user.vue";
import Cart from "@/components/Cart-Page.vue";
import ProductDetail from "@/components/Product-Detail.vue";
import User_info from "@/components/User-information.vue";
import Check_out from "@/components/Check-out.vue";
import pro_star from "@/components/product_star.vue";
import order_his from "@/components/order_hitory.vue";
import order_de from "@/components/order_detail.vue";
// saasdas
const routes = [
    {
        path: "/",
        name: "intro",
        component:HomePage
    },
    {
        path: "/product",
        name: "list_product",
        component:List_Product
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path:"/register",
        name: "register",
        component: Register
    },
    {
        path:"/cart",
        name: "cart",
        component: Cart
    },
    {
        path:"/product/:pid/:pn",
        name:"ProductDetail",
        component: ProductDetail
    },
    {
        path:"/account-information",
        name:"acc_info",
        component: User_info,
    },
    {
        path:"/check-out",
        name: "check-out",
        component: Check_out
    },
    {
        path:"/pro_star",
        name:"pro_star",
        component:pro_star
    },
    {
        path:"/order_his",
        name:"order_history",
        component:order_his
    },
    {
        path:"/order_de",
        name:"order_detail",
        component:order_de
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;