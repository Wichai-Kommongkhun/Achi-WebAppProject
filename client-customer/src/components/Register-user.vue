<template>
    <head>
        <title>Register-Page</title>
    </head>
    <div class="container py-4">
        <div class="row mx-4 py-4">
            <form @submit.prevent="createUser()" class="col-5" style="color: aliceblue">
                <div class="" style="color: aliceblue">
                    <h1>ลงทะเบียนเข้าใช้งานเว็บไซต์ AchiFootball</h1>
                </div><br>
                <label for="inputUsername" class="form-label">
                    <h3>username *</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="text" class="form-control col-5" maxlength="50" v-model="$v.username.$model" :class="(
                        $v.username.$model.length > 0 && ($v.username.minLength.$response == false || $v.username.maxLength.$response == false))
                        ? 'is-invalid' : ''" required />
                </div>
                <div class="error"
                    v-if="$v.username.$model.length > 0 && ($v.username.minLength.$response == false || $v.username.maxLength.$response == false)">
                    <h5 style="color:rgb(206, 11, 112)">Username ต้องมีตัวอักษรอย่างน้อย1ตัวและมีความยาว 6-50 ตัว</h5>
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>ชื่อ*</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="text" class="form-control" maxlength="100"
                        :class="($v.first_name.$model.length > 0 && ($v.first_name.alpha.$response == false || $v.first_name.maxLength.$response == false)) ? ' is-invalid' : ''"
                        v-model="$v.first_name.$model" required />
                </div>
                <div class="error"
                    v-if="($v.first_name.$model.length > 0 && ($v.first_name.alpha.$response == false || $v.first_name.maxLength.$response == false))">
                    <h5 style="color:rgb(206, 11, 112)">ไม่อนุญาติให้มีตัวเลข หรือ ตัวอักษรพิเศษ</h5>
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>นามสกุล *</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="text" class="form-control" maxlength="100"
                        :class="($v.last_name.$model.length > 0 &&
                            ($v.last_name.alpha.$response == false || $v.last_name.maxLength.$response == false)) ? ' is-invalid' : ''" v-model="$v.last_name.$model"
                        required />
                </div>
                <div class="error"
                    v-if="($v.last_name.$model.length > 0 && ($v.last_name.alpha.$response == false || $v.last_name.maxLength.$response == false))">
                    <h5 style="color:rgb(206, 11, 112)">ไม่อนุญาติให้มีตัวเลข หรือ ตัวอักษรพิเศษ</h5>
                </div>
                <div class="row py-1">
                    <div class="col-3">
                        <label for="inputPassword" class="form-label mt-3">
                            <h3>เพศ *</h3>
                        </label>
                        <select class="form-select form-select-lg mb-3" v-model="$v.gender.$model" required>
                            <option value="man">ชาย</option>
                            <option value="women">หญิง</option>
                            <option value="other">อื่นๆ</option>
                            <option value="none">ไม่ระบุ</option>
                        </select>
                    </div>
                    <div class="col-5 mx-2">
                        <label for="inputPassword" class="form-label mt-3">
                            <h3>วัน/เดือน/ปี *</h3>
                        </label>
                        <div class="input-group mb-1 ">
                            <input type="date" class="form-control form-select-lg" v-model="$v.date.$model" required />
                        </div>
                        <!-- <input type="date" id="birthday" name="birthday"> -->
                    </div>
                </div>

                <label for="inputPassword" class="form-label mt-3">
                    <h3>email *</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="text" class="form-control"
                        :class="($v.email.$model.length > 0 && $v.email.email.$response == false ? ' is-invalid' : '')"
                        v-model="$v.email.$model" required />
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>phone *</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="text" class="form-control" v-model="$v.phone.$model"
                        :class="$v.phone.$model.length > 0 && $v.phone.decimal.$response == false ? ' is-invalid' : ''"
                        minlength="10" maxlength="10" required />
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>password *</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="password" class="form-control" minlength="8" maxlength="50" v-model="$v.password.$model"
                        :class="$v.password.$model.length > 0 && ($v.password.vaildatePassword.$response == false || $v.password.minLength.$response == false) ? ' is-invalid' : ''"
                        required />
                </div>
                <div class="error"
                    v-if="$v.password.$model.length > 0 && ($v.password.vaildatePassword.$response == false || $v.password.minLength.$response == false)">
                    <h5 style="color:rgb(206, 11, 112)">รหัสผ่านประกอบด้วย ตัวอักษร 8-50 ตัว ต้องมี 0-9, a-z, A-Z
                        อย่างน้อย1ตัว</h5>
                </div>
                <label for="inputPassword" class="form-label mt-3">
                    <h3>Confirm password: *</h3>
                </label>
                <div class="input-group mb-1">
                    <input type="password" class="form-control"
                        :class="$v.confirm_password.$model.length > 0 && ($v.confirm_password.confirmPassword.$response == false) ? ' is-invalid' : ''"
                        v-model="$v.confirm_password.$model" required />
                </div>
                <div class="error"
                    v-if="$v.confirm_password.$model.length > 0 && ($v.confirm_password.confirmPassword.$response == false)">
                    <h5 style="color:rgb(206, 11, 112)">ยืนยันรหัสผ่านไม่ถูกต้อง</h5>
                </div>
                <div class="submit py-2">
                    <a href="" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                        style="color:aliceblue; font-size:22px">อ่านเงื่อนไขการยินยอมให้เปิดเผยข้อมูลส่วนตัว</a>
                    <div class="modal fade modal-xl" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered ">
                            <div class="modal-content">
                                <div class="modal-header bg-danger">
                                    <h5 class="modal-title" id="staticBackdropLabel" style="color: rgb(255, 255, 255);">
                                        เงื่อนไขการยินยอมให้เปิดเผยข้อมูลส่วนตัว
                                    </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body" style="color: #292727;">
                                    <!-- <h3>เงื่อนไขการเปลี่ยนและคืนสินค้า</h3> -->
                                    <p>นโยบายความเป็นส่วนตัวฉบับนี้ มีผลใช้บังคับกับการให้บริการของWebsiteเท่านั้น
                                        ไม่มีผลใช้บังคับ กับ แอปพลิเคชั่นและบริการหรือเว็บไซต์อื่นๆ
                                        ที่อาจมีการเชื่อมต่อ ซึ่งเป็นของบุคคลภายนอก ที่Websiteไม่มี อำนาจ ควบคุม
                                        และเป็นส่วนที่ผู้ใช้บริการต้องทำความตกลง และศึกษาเกี่ยวกับนโยบายข้อมูลส่วน
                                        บุคคล สำหรับ การใช้แอปพลิเคชั่น บริการ หรือเว็บไซต์ดังกล่าวแยกต่างหาก<br>
                                        หากผู้ใช้บริการไม่ตกลงตามเงื่อนไขของนโยบายข้อมูลส่วนบุคคลฉบับนี้ หรือฉบับแก้ไขอื่นๆ
                                        Website สงวนสิทธิที่จะห้าม หรือไม่อนุญาตให้ผู้ใช้บริการดังกล่าวใช้บริการของบริษัท
                                        เนื่องจากการประมวล ผลข้อมูลส่วนบุคคลภายใต้นโยบายฉบับนี้ มีความผลจำเป็นโดยตรงต่อ
                                        การปฏิบัติตามหน้าที่ให้ บริการโดยWebsiteแก่ ผู้ใช้บริการ ทั้งนี้
                                        การที่ผู้ใช้บริการยังคงใช้บริการของWebsiteอยู่ ผู้ใช้บริการ ดังกล่าว จะถือว่า
                                        ยอมรับนโยบายฉบับนี้เสมอ</p>
                                    <h5><b>ในการให้บริการ Websiteจะเก็บรวบรวม และประมวลผลข้อมูลส่วนบุคคล
                                            จากการที่ผู้ใช้บริการดำเนิน การผ่านระบบการให้บริการ ดังต่อไปนี้</b></h5>
                                    <ul>
                                        <li>ข้อมูลที่บ่งชี้ตัวตนโดยตรง อาทิ ชื่อ อายุ สัญชาติ วันเกิด</li>
                                        <li>
                                            ข้อมูลการติดต่อ อาทิ ที่อยู่ สถานที่ติดต่อ เบอร์โทร อีเมล
                                        </li>
                                        <li>ข้อมูลการชำระเงิน อาทิ รายละเอียดการชำระเงินและ บัญชีธนาคาร
                                        </li>
                                        <li>ข้อมูลการใช้บริการ อาทิ ชื่อบัญชีผู้ใช้ รหัสผ่าน ประวัติการทำธุรกรรมต่างๆ
                                            ที่ผู้ใช้บริการ ดำเนินการ รวมถึง ความสนใจของต่างๆของผู้ใช้บริการ</li>
                                        <li>ข้อมูลทางเทคนิคในการระบุตัวตน อาทิ หมายเลขระบุตำแหน่งคอมพิวเตอร์ (IP Address)
                                            ข้อมูลการใช้งาน การตั้งค่าและการเชื่อมต่อบราวเซอร์ของอุปกรณ์ที่ผู้ใช้บริการ
                                            ใช้ในการใช้ บริการของWebsite</li>
                                    </ul>
                                    <h5><b>วัตถุประสงค์ในการประมวลผลข้อมูล</b></h5>
                                    <ul>
                                        <li>Websiteมีความจำเป็นเก็บ รวบรวม ใช้ข้อมูลส่วนบุคคลของผู้ใช้บริการ
                                            เพื่อการให้บริการที่ กำหนดและระบุไว้สำหรับแต่ละเงื่อนไขการให้บริการของWebsite
                                            อันรวมถึง เพื่อการยืนยันตัว ตนและติดตามในการทำธุรกรรมต่างๆของผู้ใช้บริการ
                                            เพื่อการตรวจสอบเงื่อนไขการชำระเงิน ค่าบริการ
                                            เพื่อใช้ในการติดต่อสื่อสารกับผู้ใช้บริการ เป็นต้น</li>
                                        <li>Websiteมีความจำเป็นเก็บและใช้ข้อมูลส่วนบุคคลของผู้ใช้บริการ
                                            เพื่อการวิเคราะห์ความสนใจ ของผู้ใช้บริการ
                                            เพื่อให้สามารถเสนอสิทธิประโยชน์หรือบริการ ตามความสนใจของผู้ใช้ บริการได้มากขึ้น
                                            หรือ เพื่อการสร้างความสัมพันธ์ที่ดีขึ้นระหว่างWebsiteและผู้ใช้บริการ</li>
                                        <li>Websiteมีความจำเป็นจัดเก็บและใช้ข้อมูลส่วนบุคคลของผู้ใช้บริการ
                                            เพื่อวัตถุประสงค์ในการ ให้บริการสนับสนุนอื่นๆ เช่น
                                            การติดต่อสอบถามข้อมูลติชมแสดงความคิดเห็นหลังการบริการ หรือ การส่งคำร้องต่างๆ
                                        </li>
                                        <li>Websiteมีความจำเป็นจัดเก็บข้อมูลส่วนบุคคลของผู้ใช้บริการ เพื่อปฏิบัติตามข้อกฎหมาย
                                            และ ระเบียบบังคับใช้ของรัฐ เช่น การจัดทำเอกสารภาษี หัก ณ ที่จ่าย
                                            หรือการดำเนินการอื่นๆ ที่กฎหมายกำหนด</li>
                                    </ul>
                                    <p>ทั้งนี้ Websiteจะเก็บและรวบรวมข้อมูลส่วนบุคคลของผู้ใช้บริการไว้ตลอดระยะเวลา
                                        ตราบเท่าที่ผู้ใช้ บริการยังคงเป็นผู้ใช้บริการของWebsiteอยู่
                                        และWebsiteสงวนสิทธิเก็บข้อมูลไว้อีกเป็นระยะเวลา 3 ปีหลัง
                                        จากผู้ใช้บริการยกเลิกการใช้บริการ เพื่อประโยชน์ในการปกป้อง
                                        และต่อสู้สิทธิต่างๆของWebsite เว้น แต่
                                        กฎหมายที่เกี่ยวข้องกำหนดให้Websiteมีหน้าที่เก็บข้อมูลส่วนบุคคลไว้เป็นระยะเวลาอื่น
                                        Websiteอาจมี ความจำเป็นต้องเก็บข้อมูลไว้เป็นระยะเวลาที่ยาวนานกว่า 3 ปี</p>
                                    <h5><b>
                                        การเปิดเผยข้อมูลส่วนบุคคล
                                    </b></h5>
                                    <p>เพื่อการให้บริการ ตามเงื่อนไขที่ระบุไว้ บริษัทอาจมีความ จำเป็นต้องเปิดเผยข้อมูลส่วนบุคคลของผู้ ใช้บริการ ในกรณี ดังนี้</p>
                                    <ul>
                                        <li>บริษัทอาจมีความจำเป็นเปิดเผยให้แก่ผู้ให้บริการภายนอกของ Website ที่ได้รับการว่าจ้างจาก บริษัทให้ช่วยเหลือสนับสนุนการให้บริการของ Website เช่น ที่ปรึกษา ผู้รับจ้างให้บริการ ผู้รับ จ้างขนส่ง รวมถึงผู้ให้บริการภายนอกที่ให้บริการประเมินการบริการของ Website เช่น Google Analytics ทั้งนี้บริษัทจะเปิดเผยข้อมูลเฉพาะเท่าที่จำเป็นเท่านั้น</li>
                                        <li>บริษัทอาจเปิดเผยด้วยการเก็บรักษาข้อมูลส่วนบุคคลของท่านไว้ในระบบระบบคอมพิวเตอร์ ที่ใช้บริการ ได้แก่ Amazon AWS</li>
                                        <li>บริษัทอาจเปิดเผยข้อมูล ด้วยความจำเป็นเพื่อประโยชน์ในการปกป้องและต่อสู้สิทธิของ Website หรือเพื่อการป้องกันและตรวจสอบลักษณะการกระทำผิดที่เกี่ยวข้องกับการใช้บริการของ Website โดยผู้ใช้บริการ ในลักษณะต่างๆ โดยบริษัทจะดำเนินการดังกล่าวเท่าที่จำเป็น เท่านั้น</li>
                                        <li>ในกรณีที่บริษัทมีหน้าที่ตามกฎหมาย หรืออยู่ภายใต้บังคับคำพิพากษา หรือคำสั่งของ หน่วยงานราชการ บริษัทอาจมีความจำเป็นต้องเปิดเผยข้อมูลให้แก่ หน่วยงานดังกล่าว เพื่อ เป็นการปฏิบัติตามหน้าที่ที่มีตามกฎหมาย</li>
                                    </ul>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary"
                                        data-bs-dismiss="modal">เข้าใจแล้ว</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="check mt-2 mx-2">
                        <div class="form-check checkbox-xl mt-3">
                            <input class="form-check-input" type="checkbox" value="true" v-model="checkP" id="flexCheckDefault">
                            <label class="form-check-label " for="flexCheckDefault">
                                ยอมรับนโยบายข้อมูลส่วนตัว
                            </label>
                        </div>
                        <div class="form-check checkbox-xl mt-3">
                            <input class="form-check-input" type="checkbox" value="true"  v-model="checkData" id="flexCheckDefault">
                            <label class="form-check-label " for="flexCheckDefault">
                                ตรวจสอบข้อมูลเรียบร้อยแล้ว
                            </label>
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col d-flex">
                            <button class="btn btn-primary mb-3 btn-lg" :disabled="checkP == false || checkData == false || $v.$errors.length > 0"> สมัครสมาชิก</button>
                            <div class="to_login mx-3 mt-2">
                                <h4>ฉันเป็นสมาชิกแล้ว <a href="/login" style="color:aliceblue">เข้าสู่ระบบ</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </form>>
            <div class="col-6 mx-4">
                <img src="https://i.pinimg.com/originals/5b/7c/a4/5b7ca403ad99558099e8d93c9475537d.jpg"
                    class="img-fluid mx-4" alt="...">
            </div>
            <br>
        </div>
        <br />
    </div>
</template>

<script>
import service_register from '@/service/service_register';
import { useVuelidate } from '@vuelidate/core';
import { required, minLength, maxLength, alpha, email, decimal } from '@vuelidate/validators';

function vaildatePassword(val) {
    if (val.match(/[0-9]/) && val.match(/[a-z]/) && val.match(/[A-Z]/)) {
        return true
    } else {
        return false
    }
}

function validateGender(val) {
    if (val === "women" || val === "man" || val === "other" || val === "none") {
        return true;
    } else {
        return false
    }
}

function maxNumber(val) {
    if (val.length == 10) {
        return true
    } else {
        return false
    }
}

function confirmPassword(val){
    if (val === this.password){
        return true
    }else{
        return false
    }
}



export default {
    setup() {
        return { $v: useVuelidate() }
    },
    data() {
        return {
            username: '',
            first_name: '',
            last_name: '',
            gender: '',
            date: '',
            email: '',
            phone: '',
            password: '',
            confirm_password: '',
            checkP: false,
            checkData: false
        }
    },
    methods: {
        async createUser() {
            if (this.password === this.confirm_password) {
                const create_user = {
                    username: this.username,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    gender: this.gender,
                    date: this.date,
                    email: this.email,
                    phone: this.phone,
                    password: this.password,
                    confirmPassword: this.confirm_password
                }
                try {
                    const create = await service_register.register(create_user);

                    if (create.data.status == true) {
                        window.location.href = '/login';
                    } else {
                        alert('Check from !!');
                    }
                } catch (er) {
                    console.log(er);
                }
            } else {
                this.confirm_password = '';
                alert("Password confirm Wrong!")
            }
        }
    },
    validations() {
        return {
            username: {
                required: required,
                minLength: minLength(6),
                maxLength: maxLength(50)
            },
            password: {
                required: required,
                minLength: minLength(6),
                maxLength: maxLength(50),
                vaildatePassword: vaildatePassword
            },
            confirm_password: {
                required: required,
                confirmPassword: confirmPassword
            },
            first_name: {
                required: required,
                maxLength: maxLength(100),
                alpha: alpha
            },
            last_name: {
                required: required,
                maxLength: maxLength(100),
                alpha: alpha
            },
            gender: {
                required: required,
                validateGender: validateGender
            },
            date: {
                required: required,
            },
            email: {
                required: required,
                email: email
            },
            phone: {
                required: required,
                decimal: decimal,
                maxNumber: maxNumber

            }
        }
    }
}
</script>

<style>.checkbox-lg .form-check-input {
    top: .8rem;
    scale: 1.4;
    margin-right: 0.7rem;
}

.checkbox-lg .form-check-label {
    padding-top: 13px;
}

.checkbox-xl .form-check-input {
    top: 1.2rem;
    scale: 1.7;
    margin-right: 0.8rem;
}

.checkbox-xl .form-check-label {
    padding-top: 0px;
    padding-bottom: 10px;
    font-size: 20px;
}</style>