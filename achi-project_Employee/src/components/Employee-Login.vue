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
        <div class="row py-1" style="color: aliceblue;">
            <div class="col-6">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">รหัสพนักงาน</label>
                    <input type="text" class="form-control" placeholder="กรอกหรัสพนักงาน" v-model="em_id" required>
                </div>
            </div>
        </div>
        <div class="row py-1" style="color: aliceblue;">
            <div class="col-6">
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">รหัสผ่าน</label>
                    <input type="password" class="form-control" placeholder="กรอกรหัสผ่าน" v-model="password" required>
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
    </div>
</template>

<script>


export default {
    data(){
        return{
            
        }
    },
}
</script>

<style>

</style>