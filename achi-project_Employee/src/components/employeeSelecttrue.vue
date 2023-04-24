<template>
    <head>
        <title>AchiFootBall</title>
    </head>


    <div class="container-fluid mx-4 py-4" style="color: aliceblue;">
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


            <div class="col-9 mx-3">
                <div class="row" style="color:aliceblue;">
                    <div class="col">
                        <h4>รหัสพนักงาน {{ employee_ID }}</h4>
                        <h5>แสดงสินค้าในคลัง</h5>
                    </div>
                </div>

                <div class="row py-4" style="color: aliceblue;">
                    <div class="col d-flex">
                        <label for="">ค้นหาสินค้า :</label>
                        <div class="col-2 mx-3 input-group-sm">
                            <input type="text" placeholder="ระบุข้อมูลสินค้า" class="form-control" v-model="search">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <table class="table" style="color: aliceblue;">
                            <thead style="background-color: #505050;">
                                <tr>
                                    <th>รหัสสินค้า</th>
                                    <th>ชื่อสินค้า</th>
                                    <th>แบรนด์</th>
                                    <th>ราคา</th>
                                    <th class="text-center"> จำนวนสินค้าทุกขนาด</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody style="background-color: #222222; font-size: 20px; display: block;" class="flow2">
                                <tr class="size_tr" v-for="(item, index) in product_info" :key="item" :index="index"
                                    v-show="item.product_id.toString().includes(search)">
                                    <!-- v-if="item.product_id.includes(search)" -->
                                    <td>{{ item.product_id }}</td>
                                    <td style="max-width: 200px !important;">{{ item.pro_name }}</td>
                                    <td>{{ item.brand }}</td>
                                    <td>{{ item.price }}</td>
                                    <td class="text-center">{{ item.amount }}</td>
                                    <td style="text-decoration: underline; color: yellow;">
                                        <a :href="'/emProde?pro_id=' + item.product_id"
                                            style="color: yellow;">ข้อมูลเพิ่มเติม</a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col h_max">
                    <!-- for some think in future -->
                    <!-- {{ admin_info }} -->
                    <!-- <img alt="" :src="img"> -->
                </div>
            </div>
        </div>


    </div>
</template>
    
<script>
export default {
    data() {
        return {
            employee_ID: localStorage.getItem('employee_id'),
            product_info: '',
            admin_info: '',
            search: '',

        }
    },
    created() {
        this.product_info = JSON.parse(localStorage.getItem("product_key"));
        this.admin_info = JSON.parse(localStorage.getItem("admin_key"));
        console.log(this.product_info);
        console.log(this.product_info.length);
    },
    watch: {
        search(newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('Is_login');
            localStorage.removeItem('employee_id');
            window.location.href = '/login';
        }
    }

}

</script>
    
<style scoped>
thead,
tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed;
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


.flow2 {
    max-height: 600px !important;
    overflow: auto;
    overflow-x: hidden;
}
</style>