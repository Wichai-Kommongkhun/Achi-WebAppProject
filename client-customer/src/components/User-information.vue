<template>
    <head>
        <title>บันชีของฉัน</title>
    </head>

    <div class="container">
        <hr style="color:aliceblue">
        <div class="row py-2">
            <navUser></navUser>
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
                                <h6>{{ info.first_name }}</h6>
                            </div>
                            <div class="col-6 py-4">
                                <h5>วัน/เดือน/ปีเกิด</h5>
                                <h6>{{ info.date }}</h6>
                            </div>
                        </div>
                        <div class="row" style="background-color: #6B6B6B;">
                            <br>
                            <div class="col-6 py-4">
                                <h5>อีเมล์</h5>
                                <h6>{{ info.email }}</h6>
                            </div>
                            <div class="col-6 py-4">
                                <h5>เบอร์มือถือ</h5>
                                <h6>{{ info.phone }}</h6>
                            </div>
                        </div>
                        <div class="row" style="background-color: #6B6B6B;">
                            <br>
                            <div class="col-6 py-4">
                                <h5>username</h5>
                                <h6>{{ info.username }}</h6>
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
                        <h4>ชื่อ</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control col-5" v-model="user_edit.first_name"
                                required />
                        </div>
                    </div>
                    <div class="col-5">
                        <h4>นามสกุล</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control col-5" v-model="user_edit.last_name"
                                required />
                        </div>
                    </div>
                    <!-- <div class="col-3 mx-0">
                        <h4>เพศ</h4>
                        <select class="form-select form-select-lg mb-2" aria-label=".form-select-lg example">
                            <option value="man">ชาย</option>
                            <option value="woman">หญิง</option>
                            <option value="other">อื่นๆ</option>
                            <option value="none">ไม่ระบุ</option>
                        </select>
                    </div> -->
                </div>
                <div class="row mx-4">
                    <div class="col-5">
                        <h4>วัน/เดือน/ปีเกิด</h4>
                        <div class="input-group mb-3">
                            <input type="date" class="form-control col-5" v-model="user_edit.date"
                                required />
                        </div>
                    </div>
                </div>

                <div class="row mx-4 py-2">
                    <div class="col-6">
                        <h4>email:</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control col-5" v-model="user_edit.email"
                                required />
                        </div>
                    </div>
                </div>

                <div class="row mx-4 py-2">
                    <div class="col-6">
                        <h4>phone:</h4>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control col-5" v-model="user_edit.phone"
                                required />
                        </div>
                    </div>
                </div>
                <div class="row mx-4 py-2">
                    <div class="col-4">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="true" v-model="newPassword" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                เปลี่ยนรหัสผ่าน
                            </label>
                        </div>
                    </div>
                </div>
                <div class="row mx-4 py-2" v-show="newPassword == true">
                    <div class="col-6">
                        <h4> New-password:</h4>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control col-5" 
                                required />
                        </div>
                    </div>
                </div>

                <div class="row mx-4 py-2">
                    <div class="col-6">
                        <h4>Confirm Password:</h4>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control col-5" v-model="user_edit.confirm_password"
                                required />
                        </div>
                    </div>
                </div>
                <div class="row mx-4">
                    <div class="col">
                        <div class="form-check checkbox-xl mt-1">
                            <input class="form-check-input" type="checkbox" value="true" v-model="check_info" id="flexCheckDefault">
                            <label class="form-check-label " for="flexCheckDefault">
                                <h4>ตรวจสอบข้อมูลเรียบร้อยแล้ว</h4>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="row mx-4">
                    <div class="col-6 d-flex">
                        <button @click="edit()" class="btn btn-success btn-lg">บันทึก</button>
                        <button type="submit" class="btn btn-danger btn-lg mx-3"
                            @click="edit_active = false;">ยกเลิก</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import navUser from './Nav-user.vue'
import service_account from '../service/service_account'
export default {
    components: {
        navUser
    },
    data() {
        return {
            edit_active: false,
            info: {},
            newPassword: false,
            check_info:false,
            user_edit: {}
        }
    },
    async created() {
        const c_info = await service_account.getAccount();
        this.info = c_info.data;
        this.user_edit = {
                first_name: c_info.data.first_name,
                last_name: c_info.data.last_name,
                date: c_info.data.date,
                email: c_info.data.email,
                phone: c_info.data.phone,
                password: '',
                confirm_password:''
            }
    },
    watch:{
        user_edit(nowVal, oldVal){
            console.log(nowVal, oldVal);
        }
    },
    methods:{
        async edit(){
            if(this.user_edit.confirm_password){
                const update_ = await service_account.updateInformation(this.user_edit);
                console.log(update_);
                window.location.href = '/account-information';
            }else{
                alert('Enter confirm_password ?')
            }
        }
    }
}
</script>

<style>
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