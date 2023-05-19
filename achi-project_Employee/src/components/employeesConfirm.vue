<template>
  <head>
    <title>AchiFootBall</title>
  </head>

  <div class="container py-3" style="color: aliceblue">
    <div class="row">
      <div class="col-3 border-end">
        <div class="d-flex py-2">
          <a href="/employeeSelect" style="color: aliceblue; text-decoration: none">
            <h3>รายการคำสั่งซื้อ</h3>
          </a>
        </div>
        <div class="d-flex py-2">
          <a href="/emCon" style="color: aliceblue; text-decoration: none">
            <h3>ส่งเลขติดตามพัศดุ</h3>
          </a>
        </div>

        <div class="d-flex py-2">
          <a href="/emSelecttrue" style="color: aliceblue; text-decoration: none">
            <h3>จัดการสินค้าในคลัง</h3>
          </a>
        </div>
        <div class="d-flex py-2">
          <a href="#" @click="logout()" style="color: aliceblue;">
            <h3>ออกจากระบบ</h3>
          </a>
          <img src="logo.png" alt="">
        </div>
      </div>

      <div class="col-8 mx-3">
        <div class="row" style="color: aliceblue">
          <div class="col">
            <h3>รหัสพนักงาน {{ id }}</h3>
            <h5>ส่งเลขติดตามพัศดุ</h5>
          </div>
        </div>
        <div class="row py-4" style="color: aliceblue">
          <div class="col-12 d-flex">
            <label for="">ค้นหาคำสั่งซื้อ :</label>
            <div class="col-2 mx-3 input-group-sm">
              <input type="text" placeholder="ระบุเลขที่คำสั่งซื้อ" class="form-control" v-model="search" />
            </div>
            <label for="">แสดงคำสั่งซื้อวันที่ :</label>
            <div class="col-2 mx-3 input-group-sm">
              <input type="date" placeholder="ระบุเลขที่คำสั่งซื้อ" class="form-control"  v-model="search_date"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <table class="table">
              <thead style="background-color: #505050; color: aliceblue">
                <tr>
                  <th>เลขที่คำสั่งซื้อ</th>
                  <th>วันที่สั่งซื้อ</th>
                  <th>ราคารวม</th>
                  <th>การชำระเงิน</th>
                  <th>เลขติดตามพัสดุ</th>
                  <th></th>
                </tr>
              </thead>
              <!-- v-show="item.order_number.toString().includes(search)" -->
              <tbody style="background-color: #222222; color: aliceblue">
                <tr class="size_tr" v-for="item in orders" :key="item" v-show="item.order_id.toString().includes(search)  && item.date_checkout.toString().includes(search_date)">
                  <td>{{ item.order_id }}</td>
                  <td>{{ item.date_checkout }}</td>
                  <td>{{ item.price }} THB</td>
                  <td v-if="item.payment_status == 1">ชำระเงินสำเร็จ</td>
                  <td v-else>ยังไม่ได้ชำระเงิน</td>
                  <td>
                    <input type="text" class="form-control input-group-sm form-cc" v-model="send" />
                  </td>
                  <td>
                    <button type="button" class="btn btn-sm btn-warning" @click="sendTag(item.order_id)">
                      ยืนยัน
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row py-3">
          <div class="col">
            <h4>เลขติดตามพัสดุ คืออะไร?</h4>
            <p>
              เลข Tracking คือ
              สิ่งที่ยืนยันให้กับร้านค้าหรือผู้ส่งได้ว่ามีการส่งของให้ลูกค้าหรือผู้รับแล้ว
              ถ้าหากร้านค้าได้รับเลข Tracking นั่นหมายความว่า
              บริษัทขนส่งได้รับพัสดุเข้าสู่ระบบ Tracking เรียบร้อยแล้ว
              ร้านค้าหรือผู้ส่งสามารถนำเลข Tracking มาเช็คสถานะพัสดุได้เลย
              หรือส่งเลข Tracking ให้ลูกค้าเพื่อเป็นการยืนยันการจัดส่งพัสดุ
              หรือจะไว้ติดตามสถานะพัสดุ ตอนนี้ลูกค้าได้รับพัสดุแล้วหรือยัง
              นอกจากนี้เลข Tracking ยังสามารถเรียกร้องค่าเสียหาย
              ในกรณีที่พัสดุเกิดสูญหายหรือได้รับความเสียหายได้อีกด้วย
            </p>
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


  <!-- <div style="color: aliceblue;">
    {{ orders }}
  </div> -->


</template>
  
<script>
import axios from 'axios';
import order from '../data_json/orders.js';
export default {
  data() {
    return {
      employee_ID: localStorage.getItem("employee_id"),
      order: order,
      send: '',
      search: '',
      id:'',
      orders:[],
      search_date:'',
    };
  },
  methods: {
    logout() {
      localStorage.removeItem('Is_login');
      localStorage.removeItem('employee_id');
      window.location.href = '/login';
    },
    sumPrice(cart){
        var sum = 0;
        cart.forEach(el => {
          sum += el.price;
        });
        return sum;
    },
    sendTag(id){
      alert("ส่งเลข " + this.send);
      
      const user = {
        tag:this.send,
        tag_id:id
      }
      axios.put("http://localhost:4000/emCon",{
          user:user
      });

      window.location.href = "/emCon"

    },
  },
  created() {
      this.id = localStorage.getItem("idEm");

      const rub = axios.get("http://localhost:4000/emCon");

      rub.then(res => {
        this.orders = res.data.notag;
      })

    }
};
</script>
  
<style scoped>
.form-cc {
  background-color: #2c2c2c !important;
  color: aliceblue;
}
</style>