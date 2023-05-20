<template>
    <head>
        <title>AchiFootBall</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>

    <div class="container-fluid mx-4" style="color: aliceblue;">
        <div class="row">
            <div class="col-2 border-end">
                <div class="d-flex py-2">
                    <a href="/employeeSelect" style="color:#FFB546; text-decoration: none;">
                        <h3>หน้าหลัก</h3>
                    </a>
                    <img src="logo.png" alt="">
                </div>
                <div class="d-flex py-2">
                    <a href="/emSelecttrue " style="color:#FFB546; text-decoration: none;">
                        <h3>แสดงสินค้าในคลัง</h3>
                    </a>
                    <img src="logo.png" alt="">
                </div>
                <div class="d-flex py-2">
                    <a href="/emChangePro" style="color:#FFB546; text-decoration: none;">
                        <h3>เพิ่ม/ลบ สินค้นในคลัง</h3>
                    </a>
                </div>
                <div class="d-flex py-2">
                    <a href="#" @click="logout()" style="color: aliceblue;">
                        <h3>ออกจากระบบ</h3>
                    </a>
                    <img src="logo.png" alt="">
                </div>
            </div>

            <div class="col-8 mx-3">
                <div class="row" style="color:aliceblue;">
                    <div class="col-3">
                        <h4>รหัสพนักงาน {{ id}}</h4>
                        <h5>จัดการข้อมูลสินค้า</h5>
                    </div>
                </div>

                <div class="row py-2" style="color: aliceblue;">
                    <div class="col d-flex py-2">
                        <label for="">
                            <h4>ค้นหาสินค้า :</h4>
                        </label>
                        <div class="col-3 mx-2 input-group-sm">
                            <input type="text" placeholder="ระบุรหัสสินค้า" class="form-control" v-model="search">
                        </div>
                    </div>
                </div>
                <div class="row py-3">
                    <div class="col-4">
                        <a href="/emAddPro"><button class="btn btn-warning btn-lg rounded-3">เพิ่มสินค้าใหม่</button></a>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col-3 d-flex py-2">
                        <h4>จำนวนสินค้าทุกขนาด {{sum}} ชิ้น</h4>
                    </div>
                    <div class="col-8 d-flex py-2">
                        <!-- <div class="form-group col-8 mx-4" style="display: inline;"> -->
                        <h5>ขนาด :</h5>
                        <div class="col-2 mx-2">
                            <select class="form-select form-select-sm" v-model="find_size">
                                <option value=-1 selected>All size</option>
                                <option value=40>40</option>
                                <option value=41>41</option>
                                <option value=42>42</option>
                            </select>
                        </div>
                        <h5 class="mx-2">สี :</h5>
                        <div class="col-3 mx-2">
                            <select class="form-select form-select-sm" v-model="color">
                                <option value="all" selected>All color</option>
                                <option value="red">red</option>
                                <option value="blue">blue</option>
                                <option value="green">green</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <table class="table " style="color: aliceblue;">
                            <thead style="font-size: 30px; background-color: #505050; ">
                                <th>รหัสสินค้า</th>
                                <th>ชื่อสินค้า</th>
                                <th class="text-center">ขนาด</th>
                                <th>สี</th>
                                <th>จำนวน</th>
                            </thead>
                            <tbody style="background-color: #222222; font-size: 20px; display: block;" class="order_flow">
                                <tr v-for="(item, index) in products" :key="item" :index="index" 
                                    v-show="item.product_id.toString().includes(search) && (find_size == -1 ? true : item.size == find_size ? true: false) 
                                    && (color === 'all' ? true: item.color.toLowerCase().includes(color.toLowerCase()) ? true:false)"
                                    @click="look(item.product_id, item.product_name, item.detail, item.price, item.amount); e_index = index;" class="hv"
                                >   
                                    <td>{{ item.product_id }}</td>
                                    <td >{{ item.product_name }}</td>
                                    <td class="text-center"> &nbsp;{{ item.size }} EUR</td>
                                    <td>{{ item.color }}</td>
                                    <td class="" style="max-width: 60px !important;">
                                        <div class="row g-0">
                                            <div class="col-8 d-flex">
                                                <button class="btn btn-primary mx-2" @click="add(index,item.product_id,item.size) ; products[index].amount += 1">เพิ่ม</button>
                                                <h3 class="mx-2"> {{ item.amount }} </h3>
                                                <button class="btn btn-warning mx-2" @click="reduct(index,item.product_id,item.size) ; products[index].amount -= 1">ลด</button>
                                                <!-- <button type="button" class="btn btn-outline-secondary">-</button>
                                                    <button type="button" class="btn btn-outline-secondary">+</button> -->
                                                <a class="av" 
                                                    @click="del(item.product_name,item.product_id, item.size, item.color, index) ">
                                                    <img src="@/assets/icons/trash-can-64.png" alt="" width="35" class="mx-2">
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br>
                <div class="row py-3">
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <h5>รหัสสินค้า : {{ e_id }}</h5>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-6 d-flex ">
                                <h5 style="display: inline">ชื่อสินค้า : </h5>
                                <div class="col-10 mx-2">
                                    <input type="text" placeholder="" class="form-control" v-model="e_name">
                                </div>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-6 d-flex">
                                <h5 style="display: inline">ราคา :</h5>
                                <div class="col-4 mx-2">
                                    <input type="text" placeholder="" class="form-control" v-model="e_price">
                                </div>
                            </div>
                        </div>
                        <div class="row py-2">
                            <div class="col-4 d-flex">
                                <h5 style="display: inline">รายละเอียดสินค้า :</h5>
                                <div class="col-4 mx-2">
                                    <!-- <input type="text" placeholder="" class="form-control" v-model="e_detail"> -->
                                    <textarea name="" id="" cols="100" rows="4" v-model="e_detail"></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row py-3">
                            <div class="col">
                                <button type="button" class="btn-lg btn-success" @click="record()">บันทึก</button>
                            </div>
                        </div>

                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col">
                        <div class="row">
                            <div class="col d-flex">
                                <h4>เพิ่มข้อมูลใหม่ให้ รหัสสินค้า : {{ e_id }}</h4>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 d-flex py-2">
                                <h5>ขนาด :</h5>
                                <div class="col-4 mx-2">
                                    <input type="text" class="form-control" v-model="e_size">
                                </div>
                                <h5 style="color: yellow;">หมายเหตุ* หน่วยเป็น EU</h5>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-6 d-flex py-2">
                                <h5>จำนวน :</h5>
                                <div class="col-4 mx-2">
                                    <input type="number" class="form-control" v-model="e_count">
                                </div>
                            </div>
                        </div>
                        <div class="row py-3">
                            <div class="col">
                                <button type="button" class="btn-lg btn-warning" @click="send()">เพิ่มสินค้า</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            
        </div>
        
    </div>

    <div style="color: aliceblue;">{{ products }}</div>

    
</template>
    
<script>
import axios from 'axios';
import product from '../data_json/product.js'
export default {
    data() {
        return {
            product_info: product,
            search:'',
            find_size: -1,
            color: 'all',
            e_id:"",
            e_name:"",
            e_brand: '',
            e_price: 0,
            e_amount: 0,
            e_index: -1,
            id:localStorage.getItem("idEm"),
            products:[],
            sum:0,
            e_de:'',
            e_size:'',
            e_count:'',
            check:'',
            e_detail:''
        }
    },
    
    async created(){
        // this.product_info = JSON.parse(localStorage.getItem("product_key"));
        const rub = await axios.get("http://localhost:4000/emChangePro");

        this.products = rub.data.product;

        this.products.forEach(rr => {
            this.sum += rr.amount
        })



    },
    methods:{
        look(id, name, detail, price, amo){
            this.e_id = id;
            this.e_name = name;
            this.e_detail = detail ;
            this.e_price = price;
            this.e_amount = amo
        },
        async del(name,id, size, color, index){
            console.log(index);
            var conF = confirm(`จะลบ ${name} \n ขนาด: ${size} สี: ${color}`);
            console.log("conF "+ conF);
            if (conF){
                console.log("delete " + name);
                console.log(index);
                this.products.splice(index, 1);
                console.log(this.product_info);
            }else{
                console.log("No del");
            }

            const product ={
                del_id:id,
                del_size:size
            }
            await axios.delete("http://localhost:4000/emChangePro/"+ product.del_id+"/"+product.del_size);



        },
        async add(index,id,size){
            console.log(index);
            console.log(this.product_info[index].amount)
            console.log(id);
            console.log(size);
            this.product_info[index].amount = this.product_info[index].amount +1;

            const product = {
                add_id:id,
                add_size:size
            }
            await axios.put("http://localhost:4000/emChangePro", product)
        },
        async reduct(index,id,size){
            console.log(index);
            console.log(this.product_info[index].amount)
            if (this.product_info[index].amount > 1){
                this.product_info[index].amount = this.product_info[index].amount -1
            }
            const product = {
                de_id:id,
                de_size:size
            }
            await axios.put("http://localhost:4000/emChangePro", product)
        },
        async record(){
            if (!this.e_id){
                return null;
            }
            // this.products.forEach(el => {
            //     if (el.product_id == this.e_id){
            //         if (confirm("ยืนยันการบันทึก")){
            //             el.product_name = this.e_name;
            //             el.brand = this.e_brand;
            //             el.price = this.e_price;
            //             el.amount = this.e_amount;
            //             el.detail = this.e_de;                        
            //         }

            //     }
            // });
            for(let i = 0;i<this.products.length;i++){
                if (this.products[i].product_id == this.e_id){
                    if (confirm("ยืนยันการบันทึก")){
                        this.products[i].product_name = this.e_name;
                        this.products[i].brand = this.e_brand;
                        this.products[i].price = this.e_price;
                        this.products[i].amount = this.e_amount;
                        this.products[i].detail = this.e_de; 
                        
                        const product = {
                        id:this.e_id,
                        name:this.e_name,
                        price:this.e_price,
                        detail:this.e_detail
                            }
                            await axios.put("http://localhost:4000/emChangePro", product)
                            window.location.href = "/"
                    }
                    return null
                }
            }
            
        },
        logout(){
            localStorage.removeItem('Is_login');
            localStorage.removeItem('employee_id');
            window.location.href = '/login';
        },
        async send(){

            for(let i = 0;i<this.products.length;i++){
                if (this.products[i].product_id == this.e_id){
                    if (confirm("ยืนยันการบันทึก")){
                        this.products[i].product_name = this.e_name;
                        this.products[i].brand = this.e_brand;
                        this.products[i].price = this.e_price;
                        this.products[i].amount = this.e_amount;
                        this.products[i].detail = this.e_de; 
                        
                    }
                    break
                }

            }
            const product = {
                id:this.e_id,
                size:this.e_size,
                amount:this.e_count
            }

            await axios.post("http://localhost:4000/emChangePro", product)

            const rub = axios.get("http://localhost:4000/emChangePro")

            await rub.then(err => {
                this.check = err.data.error;
            })

            console.log(rub);

        },
    }
}
</script>

<style scoped>
.for-fu{
    height: 150px !important;
}

.order_flow {
    max-height: 500px !important;
    overflow: auto;
    overflow-x: hidden;
}

thead, tbody tr {
    display:table;
    width:100%;
    table-layout:fixed;
}

*::-webkit-scrollbar {
  width: 25px;
}

*::-webkit-scrollbar-track {
  background: rgb(63, 63, 63);
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(140, 105, 0);
}

.hv:hover{

    background-color: #464646 !important;
}

.av:hover{
    padding: 3px;
    cursor: pointer;
}

</style>