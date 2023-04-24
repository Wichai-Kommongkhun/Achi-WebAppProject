<template>
    <head>
        <title>บันชีของฉัน</title>
    </head>

    <div class="container">
        <hr style="color:aliceblue">
        <div class="row py-2">
            <div class="col-3 border-end">
                <div class="d-flex py-2">
                    <a href="/emInfo" style="color:aliceblue; text-decoration: none;">
                        <h3>บัญชีของฉัน</h3>
                    </a>
                    <img src="logo.png" alt="">
                </div>
                <div class="d-flex py-2">
                    <a href="/employeeSelect" style="color:aliceblue; text-decoration: none;">
                        <h3>รายการคำสั่งซื้อ</h3>
                    </a>
                </div>
                <div class="d-flex py-2">
                    <a href="/emCon" style="color:aliceblue; text-decoration: none;">
                        <h3>ส่งเลขติดตามพัศดุ</h3>
                    </a>
                </div>

                <div class="d-flex py-2">
                    <a href="/emSelecttrue" style="color:aliceblue; text-decoration: none;">
                        <h3>จัดการสินค้าในคลัง</h3>
                    </a>
                </div>
                <div class="d-flex py-2">
                    <a href="#" @click="logout()" style="color:aliceblue;">
                        <h3>ออกจากระบบ</h3>
                    </a>
                    <img src="logo.png" alt="">
                </div>
            </div>

            <div class="col mx-3" style="color:aliceblue" v-show="edit_active == false">
                <div class="row">
                    <div class="col-3">
                        <h4>ข้อมูลส่วนตัว</h4>
                    </div>
                    <div class="col-9">
                        <div class="d-flex justify-content-end  mb-2">
                            <a class="fix_data" @click="edit_active = true">
                                <h4 class="">แก้ไขข้อมูล</h4>
                            </a>
                        </div>
                    </div>
                    <hr style="color:aliceblue">
                </div>
                <div class="row">
                    <div class="col">
                        <div class="row ">
                            <div class="col py-3" style="background-color: #494949;">
                                <h4>รายละเอียดข้อมูล</h4>
                            </div>
                        </div>
                        <div class="row" style="background-color: #6B6B6B;">
                            <br>
                            <div class="col-6 py-4">
                                <h5>ชื่อ-นามสกุล</h5>
                                <h6>{{ full_name }}</h6>
                            </div>
                            <div class="col-6 py-4">
                                <h5>วัน/เดือน/ปีเกิด</h5>
                                <h6>{{ date }}</h6>
                            </div>
                        </div>
                        <div class="row" style="background-color: #6B6B6B;">
                            <br>
                            <div class="col-6 py-4">
                                <h5>อีเมล์</h5>
                                <h6>{{ email }}</h6>
                            </div>
                            <div class="col-6 py-4">
                                <h5>เบอร์มือถือ</h5>
                                <h6>{{ phone }}</h6>
                            </div>
                        </div>
                        <div class="row" style="background-color: #6B6B6B;">
                            <br>
                            <div class="col-6 py-4">
                                <h5>รหัสพนักงาน</h5>
                                <h6>{{ employee_ID }}</h6>
                            </div>
                            <div class="col-6 py-4">
                                <h5>รหัสผ่าน</h5>
                                <h6>********</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- edit_information -->
            <div class="col mx-3 py-3" style="background-color: #5A5A5A; color: aliceblue;" v-show="edit_active">
                <div class="row ">
                    <div class="col">
                        <h3>ข้อมูลส่วนตัว</h3>
                    </div>
                </div>
                <div class="row py-4 mx-4">
                    <div class="col-5">
                        <h4>ชื่อ-นามสกุล</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control col-5" v-model="e_full_name"
                            required />
                        </div>
                    </div>
                    <!-- <div class="col-3 mx-3">
                        <h4>เพศ</h4>
                        <select class="form-select form-select-lg mb-2" aria-label=".form-select-lg example">
                            <option selected>-------</option>
                            <option value="1">ชาย</option>
                            <option value="2">หญิง</option>
                            <option value="3">อื่นๆ</option>
                            <option value="3">ไม่ระบุ</option>
                        </select>
                    </div> -->
                </div>
                <div class="row mx-4">
                    <div class="col-5">
                        <h4>วัน/เดือน/ปีเกิด</h4>
                        <div class="input-group mb-3">
                            <input type="date" class="form-control col-5"
                             v-model="e_date"  required />
                        </div>
                    </div>
                </div>

                <div class="row mx-4 py-2">
                    <div class="col-6">
                        <h4>email:</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control col-5"  v-model="e_email"
                            :placeholder="email"   required />
                        </div>
                    </div>
                </div>

                <div class="row mx-4 py-2">
                    <div class="col-6">
                        <h4>phone:</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control col-5" :placeholder="phone"  v-model="e_phone"  required />
                        </div>
                    </div>
                </div>

                <div class="row mx-4 py-2">
                    <div class="col-6">
                        <h4>password:</h4>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control col-5" 
                            v-model="e_password"  placeholder="***********"  required />
                        </div>
                    </div>
                </div>

                <div class="row mx-4 py-2">
                    <div class="col-6">
                        <h4>Confirm Password:</h4>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control col-5" v-model="e_password_con"
                                required />
                        </div>
                    </div>
                </div>
                <div class="row mx-4">
                    <div class="col">
                        <div class="form-check checkbox-xl mt-1">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label " for="flexCheckDefault">
                                <h4>ตรวจสอบข้อมูลเรียบร้อยแล้ว</h4>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="row mx-4">
                    <div class="col-6 d-flex">
                        <button type="button" class="btn btn-success btn-lg" @click="update()">บันทึก</button>
                        <button type="button" class="btn btn-danger btn-lg mx-3"
                            @click="edit_active = false;">ยกเลิก</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col h_max">
                    <!-- for some think in future -->
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import info from '../data_json/admin.js';
export default {

    data() {
        return {
            edit_active: false,
            employee_ID: localStorage.getItem('employee_id'),
            full_name: '',
            date:'',
            email:'',
            phone:'',
            password:'',
            e_full_name: '',
            e_date: '',
            e_email:'',
            e_phone:'',
            e_password:'',
            e_password_con: ''
        }
    },
    created(){
        info.forEach(acc => {
            if (acc.em_id == Number(this.employee_ID)){
                this.full_name = acc.full_name;
                this.date = acc.date;
                this.e_date = acc.date;
                this.email = acc.email;
                this.phone = acc.phone;
                this.password = acc.password;
                return null;
            }
        });
    },
    methods:{
        update(){
            if ((this.e_password_con.length > 0) && this.e_password_con === this.password){
                if (!this.full_name){console.log("");
                }else{this.full_name = this.e_full_name;}
                if (!this.e_date){console.log("");}else{this.date = this.e_date;}
                if(!this.e_email){console.log("");}else{this.email = this.e_email;}
                if (!this.e_phone){console.log("");}else{this.phone = this.e_phone;}
                if (!this.e_password){console.log("");}else{this.password = this.e_password;}
            }
            this.edit_active = false;
        }
        ,
        logout(){
            localStorage.removeItem('Is_login');
            localStorage.removeItem('employee_id');
            window.location.href = '/login';
        }
    }
}
</script>

<style>
.h_max {
    height: 550px !important;
}

.fix_data {
    color: rgb(255, 255, 255);
    text-decoration: none;
    border: 1px solid #fff;
    padding: 2px;
    border-radius: .2rem;
}

.fix_data:hover {
    color: rgb(231, 170, 15);
    cursor: pointer;
}
</style>