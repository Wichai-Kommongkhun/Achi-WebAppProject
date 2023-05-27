<template>
    <head>
        <title>Login-Page</title>
    </head>
    <div class="container py-4">
        <div class="row mx-4 py-4 d-flex">
            <div class="col-6 d-flex" v-if="load_state == false">
                <div class="spinner-border " style="width: 3rem; height: 3rem; color: #FFF;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <h1 class="px-2" style="color: #FFF;"> Loading.....</h1>
            </div>
            <form class="col-6" style="color: aliceblue" @submit.prevent="Login()" v-if="load_state == true">
                <div class="" style="color: aliceblue">
                    <h1>ยินดีต้อนรับสู่ AchiFootball</h1>
                </div><br>
                <label for="inputUsername" class="form-label">
                    <h3>Username/Email *</h3>
                </label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control col-5"  minlength="6" maxlength="50"
                    :class="($v.username.$model.length < 6 && $v.username.$model.length > 0) 
                    || ($v.username.$model.length > 50 && $v.username.$model.length > 0)  
                    ? 'form-control is-invalid col-5':'form-control col-5'"
                    v-model="$v.username.$model" name="username" required />
                </div>
                <div class="error">
                    <h5 v-if="($v.username.$model.length < 6 && $v.username.$model.length > 0) || 
                    ($v.username.$model.length > 50 && $v.username.$model.length > 0)" 
                    style="color: rgb(215, 30, 95);"> username ต้องมีตัวอักษรตั้งแต่ 6-50 ตัว </h5>
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>Password *</h3>
                </label>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" minlength="8" maxlength="50"
                    :class="$v.password.$model.length > 0 && $v.password.vaildatePassword.$response == false ? 
                    'form-control is-invalid': 'form-control'"
                    v-model="$v.password.$model" name="password" required />
                </div>
                <div class="error">
                    <h5 style="color: rgb(215, 30, 95);" 
                        v-if="$v.password.$model.length > 0 && $v.password.vaildatePassword.$response == false 
                        || ($v.password.$model.length < 8 && $v.password.$model.length > 0)">
                        รหัสผ่านประกอบด้วย ตัวเลข 0-9 ตัวอักษร a-z และ A-Z และมีจำนวนตั้งแต่ 8 ตัวขึ้นไป
                    </h5>
                </div>
                <a href="/register" style="color:aliceblue">ฉันลืมรหัสผ่าน</a>
                <div class="col-auto mt-3">
                    <button class="btn btn-primary mb-3 btn-lg">เข้าสู่ระบบ</button>
                </div>
                <div class="row" v-show="check_err">
                    <div class="col">
                        <h4 style="color: brown;">เข้าสู่ระบบไม่สำเร็จ username หรือ password ไม่ถูกต้อง</h4>
                    </div>
                </div>
                <h5>ฉันยังไม่ได้เป็นสมาชิก <a href="/register" style="color:aliceblue">สมัครสมาชิกเลย</a></h5>
            </form>
            <div class="col-5 mx-4">
                <img src="https://www.lovellsoccer.co.uk/cms/graphics/Puma-Supercharge-Product-Page-Mobile.jpg"
                    class="img-fluid" alt="...">
            </div>
        </div>
        <br />
    </div>
</template>


<script>
import service_login from '@/service/service_login';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, maxLength} from '@vuelidate/validators';

function vaildatePassword(val){
    if (val.match(/[0-9]/) && val.match(/[a-z]/) && val.match(/[A-Z]/)){
        return true
    }else{
        return false
    }
}



export default {
    setup(){
        return { $v: useVuelidate() }   
    },
    data() {
        return {
            username: '',
            password: '',
            check_err: false,
            load_state: true
        };
    },
    methods:{
       async Login(){
            const user = {
                username: this.username,
                password: this.password,
            };
            try{
                this.load_state = false;
                const _login = await service_login.login(user);
                if (document.readyState === 'complete'){
                        this.load_state = true;
                }
                console.log(_login.data.status, _login.data.username);

                if (_login.data.status == true){
                    await service_login.set_LocalStore_Expiry('username', _login.data.username, (60*60*1) * 1000)
                    window.location.href = '/';
                    // localStorage.setItem("username",_login.data.username)
                }else{
                    this.check_err = true;
                    this.username =''; 
                    this.password = '';
                }
                
            }catch(er){
                this.check_err = true;
                console.log(er);
            }
        }
    },
    validations (){
        return{
            username:{
                required: required,
                minLength: minLength(6),
                maxLength: maxLength(50)
            },
            password: {
                required: required,
                minLength: minLength(8),
                vaildatePassword: vaildatePassword
            }
        }
    }
};
</script>


<style scoped>
</style>