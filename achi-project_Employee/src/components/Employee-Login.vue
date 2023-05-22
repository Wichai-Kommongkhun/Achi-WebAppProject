<template>
    <head>
        <title>สำหรับพนักงาน</title>
    </head>
    <div class="container py-4">
        <div class="row" style="color: aliceblue;">
            <div class="col">
                <h3>เข้าสู่ระบบ</h3>
            </div>
        </div>
        <br>
        <form action="" @submit.prevent="login()">
            <div class="row py-1" style="color: aliceblue;">
            <div class="col-6">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label" name="emid">รหัสพนักงาน</label>
                    <input type="text" class="form-control" placeholder="กรอกหรัสพนักงาน" v-model="emid" required>
                </div>
            </div>
        </div>
        <div class="row py-1" style="color: aliceblue;">
            <div class="col-6">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label" name="password">รหัสผ่าน</label>
                    <input type="password" class="form-control" placeholder="กรอกรหัสผ่าน" v-model="password" required>
                    <h5 v-if="show == 'fail'" style="color: red; margin-left: 5px; margin-top: 2px;">กรอกรหัสผิดพลาด</h5>

                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="col-12">
                    <button type="button" class="btn btn-primary" @click="login()">Sign in</button>
                </div>
            </div>
        </div>
        <div class="row py-3" v-show="log_err">
            <div class="col" style="color: rgb(200, 60, 70);">
                <h5 >เข้าสู่ระบบไม่สำเร็จ รหัสพนักงาน หรือ รหัสผ่าน ไม่ถูกต้อง</h5>
            </div>
        </div>
        </form>
    </div>
</template>

<script>

import axios from "axios";
export default {
    data(){
        return{
            emid:'',
            password:'',
            check:'',
            show:''
        }
    },
    methods: {
        login(){
            const user = {
                emid: this.emid,
                password:this.password
            }
            const rub = axios.post("http://localhost:4000/login-em",{
                user:user
            });
            rub.then(res =>{
                // var check2 = null;
                // console.log(res.data.status);
                // check2 = res.data;
                if (res.data.status == true){
                window.location.href = "/employeeSelect"
                localStorage.setItem("idEm",user.emid);

            }
                else{
                    this.show = "fail"
                    // window.location.href = "login-em"
                
            }
            });
        }

    },
    
}
</script>

<style>

</style>