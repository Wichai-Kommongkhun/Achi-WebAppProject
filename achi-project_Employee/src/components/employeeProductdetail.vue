<template>
    <head>
        <title>AchiFootBall</title>
    </head>

    <div class="container-fluid mx-4 py-2" style="color: aliceblue;">
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


            <div class="col-8">
                <div class="row" style="color:aliceblue;">
                    <div class="col-3">
                        <h4>รหัสพนักงาน 12345</h4>
                        <h5>รายละเอียดสินค้า</h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col6">
                        <div>
                            <h5 style="display: inline">รหัสสินค้า : {{ p_id }}</h5>
                        </div>
                        <div>
                            <h5 style="display: inline">ชื่อสินค้า : {{ p_name }}</h5>
                        </div>
                        <div>
                            <h5 style="display: inline">แบรนด์ : {{ brand }}</h5>
                        </div>
                        <div>
                            <h5 style="display: inline">ราคา : {{ price }}</h5>
                        </div>
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col-3 d-flex py-2">
                        <h6>จำนวนสินค้าทุกขนาด {{ amount }} ชิ้น</h6>
                    </div>
                    <div class="col-8 d-flex py-1">
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
                        <table class="table" style="color: aliceblue;">
                            <thead style="background-color: #505050;">
                                <th>ขนาด</th>
                                <th>สี</th>
                                <th>จำนวน</th>
                            </thead>
                            <tbody style="background-color: #222222;" v-for="item in product_info" :key="item">
                                <tr class="size_tr"  
                                v-if="(item.product_id == search) && (find_size == -1 ? true : item.size == find_size ? true: false) 
                                && (color === 'all' ? true: item.color.toLowerCase().includes(color.toLowerCase()) ? true:false)">
                                    <!-- v-if="item.size != item.size" -->
                                    <td> {{item.size}} EUR</td>
                                    <td> {{item.color}} </td>
                                    <td> {{item.amount}}</td>
                                </tr>
                            </tbody> 
                        </table>
                    </div>
                </div>

            </div>
            <div class="row">
                    <div class="col h_max">
                        <!-- for future -->
                    </div>
            </div>

        </div>

    </div>
</template>
    
<script>
    
export default {
    data() {
        return {
            product_info: '',
            search: '',
            p_id:'',
            p_name:'',
            brand:'',
            price:0,
            amount:0,
            find_size: -1,
            color: 'all',
        }
    },
    created(){
        this.product_info = JSON.parse(localStorage.getItem("product_key"));
        const pro_id = new URLSearchParams(window.location.search);
        console.log(pro_id.get('pro_id'));
        this.search = pro_id.get('pro_id');

        var set_d = true;
        this.product_info.forEach(item => {
            console.log(item.product_id == this.search);
            if (item.product_id == this.search){
                if (set_d){
                    this.p_id = item.product_id;
                    this.p_name = item.pro_name;
                    this.brand = item.brand;
                    this.price = item.price;
                    set_d =false
                }
                this.amount += item.amount;
            }

        });

    },
    methods:{
        logout(){
            localStorage.removeItem('Is_login');
            localStorage.removeItem('employee_id');
            window.location.href = '/login';
        }
    }
}
</script>
    
<style>
</style>