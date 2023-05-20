<template>
    <head>
        <title>AchiFootBall</title>
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


            <div class="col-8">
                <div class="row" style="color:aliceblue;">
                    <div class="col-3">
                        <h4>รหัสพนักงาน {{id}}</h4>
                        <h5>เพิ่มสินค้าใหม่</h5>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <br>
                        <h3>รหัสสินค้า : {{ max_pro[0].m_id }}</h3>
                    </div>
                </div>

                <div class="row py-2">
                    <div class="col-7 d-flex ">
                        <h5>ชื่อสินค้า :</h5>
                        <div class="col mx-2">
                            <input type="text" class="form-control" v-model="p_name">
                        </div>
                    </div>
                    <div class="col-4 d-flex">
                        <h5>แบรนด์ :</h5>
                        <div class="col mx-2">
                            <input type="text" class="form-control" v-model="brand">
                        </div>
                    </div>
                </div>

                <div class="row py-2">
                    <div class="col-4 d-flex ">
                        <h5>ราคา :</h5>
                        <div class="col mx-2">
                            <input type="text" class="form-control" v-model="price">
                        </div>
                    </div>
                    <div class="col-4 d-flex">
                        <h5>ขนาด :</h5>
                        <div class="col mx-2">
                            <input type="number" class="form-control" v-model="size">
                        </div>
                        <h6 style="color: yellow;" class="mt-2">หมายเหตุ* หน่วยเป็น EU</h6>
                    </div>
                    <div class="col-4 d-flex">
                        <h5>สี :</h5>
                        <div class="col mx-2">
                            <input type="text" class="form-control" v-model="color">
                        </div>
                        <h6 style="color: yellow;" class="mt-2">ตัวอย่าง Red/blue/pink</h6>
                    </div>
                </div>

                <div class="row py-2">
                    <div class="col-3 d-flex ">
                        <h5>จำนวน :</h5>
                        <div class="col mx-2">
                            <input type="number" class="form-control" v-model="amount">
                        </div>
                    </div>
                    <div class="col-6 d-flex mx-4">
                        <h5>อัพโหลดรูปภาพ :</h5>
                        <div class="col mx-2">
                            <input type="file" class="form-control" multiple @change="picture" >
                        </div>
                    </div>
                </div>
                
                <div class="row py-2">
                    <div class="col-4 d-flex py-2">
                        <button  class="btn btn-lg btn-success mx-2 py-3" @click="add_pro">เพิ่มสินค้า</button>
                        <!-- <button type="button" class="btn btn-lg btn-danger mx-2">ล้างข้อมูล</button> -->
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col h_max">

                </div>
            </div>
        </div>

    </div>
</template>
    
<script>
import axios from 'axios';
export default {
    data() {
        return {
            p_id: 0,
            p_name: '',
            brand: '',
            size: 0,
            color: '',
            amount: '',
            img: '',
            id:'',
            max_pro:0,
            pictures: []
        }
    },
    methods: {
        async add_pro() {
            alert(`Add Product complete \n
                     Product_id: ${this.max_pro[0].m_id} \n
                     Brand: ${this.brand}\n
                     Name: ${this.p_name} \n
                     Color: ${this.color}\n
                     Size: ${this.size} \n
                     Amount: ${this.amount}`);
            // window.location.reload

            // const new_product = {
            //     id:this.max_pro[0].m_id,
            //     brand:this.brand,
            //     name:this.name,
            //     color:this.color,
            //     size:this.size,
            //     amount:this.size,
            //     picture:this.pictures
            // }
                console.log(this.pictures);
                let formData = new FormData();
                formData.append("id", this.max_pro[0].m_id);
                formData.append("brand", this.brand);
                formData.append("name", this.name);
                formData.append("color", this.color);
                formData.append("size", this.size);
                formData.append("amount", this.amount);
                for (let i = 0;i<this.pictures.length;i++){
                    formData.append("picture", this.pictures[i])
                }
                // console.log(formData);
                // console.log(this.pictures);
            await axios.post("http://localhost:4000/emAddPro",formData)
        },
        logout(){
            localStorage.removeItem('Is_login');
            localStorage.removeItem('employee_id');
            window.location.href = '/login';
        },
        picture(event){
            this.pictures = event.target.files;
            console.log(this.pictures[0]);
        }
    },
    created() {
        this.p_id = Math.floor(Math.random() * (19999999 - 10000016 + 1)) + 10000016;
        this.id = localStorage.getItem("idEm");

        const rub = axios.get("http://localhost:4000/emAddPro");

        rub.then(res => {
            this.max_pro = res.data.pro_id_max;
        })


    },
}
</script>
    
<style scoped></style>