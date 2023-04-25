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
                    <input type="text" class="form-control col-5" v-model="username" name="username" required />
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>Password *</h3>
                </label>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" v-model="password" name="password" required />
                </div>
                <a href="" style="color:aliceblue">ฉันลืมรหัสผ่าน</a>
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
export default {
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
                    window.location.href = '/';
                    await service_login.set_LocalStore_Expiry('username', _login.data.username, (60*60*1) * 1000)
                    // localStorage.setItem("username",_login.data.username)
                }else{
                    this.check_err = true;
                    this.username =''; 
                    this.password = '';
                }
                
            }catch(er){
                console.log(er);
            }
        }
    }
};
</script>


<style scoped>
</style>