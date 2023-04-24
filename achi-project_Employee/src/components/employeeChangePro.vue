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
                    <a href="/emSelecttrue " style="color:#FFB546; text-decoration: none;">
                        <h3>แสดงสินค้าในคลัง</h3>
                    </a>
                    <img src="logo.png" alt="">
                </div>
                <div class="d-flex py-2">
                    <a href="/emChangePro" style="color:#FFB546; text-decoration: none;">
                        <h3>เพิ่ง/ลบ สินค้นในคลัง</h3>
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
                        <h4>รหัสพนักงาน 12345</h4>
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
                        <h4>จำนวนสินค้าทุกขนาด 12 ชิ้น</h4>
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
                                <tr v-for="(item, index) in product_info" :key="item" :index="index" 
                                    v-show="item.product_id.toString().includes(search) && (find_size == -1 ? true : item.size == find_size ? true: false) 
                                    && (color === 'all' ? true: item.color.toLowerCase().includes(color.toLowerCase()) ? true:false)"
                                    @click="look(item.product_id, item.pro_name, item.brand, item.price, item.amount); e_index = index;" class="hv"
                                >   
                                    <td>{{ item.product_id }}</td>
                                    <td >{{ item.pro_name }}</td>
                                    <td class="text-center"> &nbsp;{{ item.size }} EUR</td>
                                    <td>{{ item.color }}</td>
                                    <td class="" style="max-width: 60px !important;">
                                        <div class="row g-0">
                                            <div class="col-8 d-flex">
                                                <h3 class="mx-2">{{ item.amount }} </h3>
                                                <button class="btn btn-primary mx-2" @click="add(index)">เพิ่ม</button>
                                                <button class="btn btn-warning mx-2" @click="reduct(index)">ลด</button>
                                                <!-- <button type="button" class="btn btn-outline-secondary">-</button>
                                                    <button type="button" class="btn btn-outline-secondary">+</button> -->
                                                <a class="av" 
                                                    @click.stop="del(item.pro_name, item.size, item.color, index)">
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
                                <h5 style="display: inline">แบรนด์ :</h5>
                                <div class="col-4 mx-2">
                                    <input type="text" class="form-control"  v-model="e_brand">
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
                                <h5 style="display: inline">จำนวน :</h5>
                                <div class="col-4 mx-2">
                                    <input type="number" placeholder="" class="form-control" v-model="e_amount">
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
                                    <input type="text" class="form-control">
                                </div>
                                <h5 style="color: yellow;">หมายเหตุ* หน่วยเป็น EU</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 d-flex py-2">
                                <h5>สี :</h5>
                                <div class="col-4 mx-2">
                                    <input type="text" class="form-control">
                                </div>
                                <h5 style="color: yellow;">ตัวอย่าง Red/blue/pink</h5>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-6 d-flex py-2">
                                <h5>จำนวน :</h5>
                                <div class="col-4 mx-2">
                                    <input type="number" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="row py-3">
                            <div class="col">
                                <button type="button" class="btn-lg btn-warning">เพิ่มสินค้า</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col for-fu">
                    {{ product_info }}
                </div>
            </div>
        </div>
        
    </div>
</template>
    
<script>
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
            e_index: -1
        }
    },
    created(){
        // this.product_info = JSON.parse(localStorage.getItem("product_key"));
    },
    methods:{
        look(id, name, brad, price, amo){
            this.e_id = id;
            this.e_name = name;
            this.e_brand = brad;
            this.e_price = price;
            this.e_amount = amo
        },
        del(name, size, color, index){
            console.log(index);
            var conF = confirm(`จะลบ ${name} \n ขนาด: ${size} สี: ${color}`);
            console.log("conF "+ conF);
            if (conF){
                console.log("delete " + name);
                console.log(index);
                this.product_info.splice(index, 1);
                console.log(this.product_info);
            }else{
                console.log("No del");
            }
        },

        add(index){
            console.log(index);
            console.log(this.product_info[index].amount)
            this.product_info[index].amount = this.product_info[index].amount +1
        },
        reduct(index){
            console.log(index);
            console.log(this.product_info[index].amount)
            if (this.product_info[index].amount > 1){
                this.product_info[index].amount = this.product_info[index].amount -1
            }
        },
        record(){
            if (!this.e_id){
                return null;
            }
            this.product_info.forEach(el => {
                if (el.product_id == this.e_id){
                    if (confirm("ยืนยันการบันทึก")){
                        el.pro_name = this.e_name;
                        el.brand = this.e_brand;
                        el.price = this.e_price;
                        el.amount = this.e_amount;
                    }
                }
            });
        },
        logout(){
            localStorage.removeItem('Is_login');
            localStorage.removeItem('employee_id');
            window.location.href = '/login';
        }
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