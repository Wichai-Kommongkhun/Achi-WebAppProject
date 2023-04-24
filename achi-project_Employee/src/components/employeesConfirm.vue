<template>
  <head>
    <title>AchiFootBall</title>
  </head>

  <div class="container py-3" style="color: aliceblue">
    <div class="row">
      <div class="col-3 border-end">
        <div class="d-flex py-2">
          <a href="/emInfo" style="color: aliceblue; text-decoration: none">
            <h3>บัญชีของฉัน</h3>
          </a>
          <img src="logo.png" alt="" />
        </div>
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
            <h3>รหัสพนักงาน {{ employee_ID }}</h3>
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
              <input type="date" placeholder="ระบุเลขที่คำสั่งซื้อ" class="form-control" />
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
                <tr class="size_tr" v-for="item in order" :key="item"
                 v-show="item.order_number.toString().includes(search) && (!item.tag_number == true ? true: false)"
                 >
                  <td>{{ item.order_number }}</td>
                  <td>{{ item.date_sales }}</td>
                  <td>{{ sumPrice(item.chart) }} THB</td>
                  <td>{{ item.pay_success }}</td>
                  <td>
                    <input type="text" class="form-control input-group-sm form-cc" v-model="send" />
                  </td>
                  <td>
                    <button type="button" class="btn btn-sm btn-warning" @click="sendTag()">
                      ยืนยัน
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row py-2">
          <div class="col">
            <button type="button" class="btn btn-success">
              พิมพ์ข้อมูลการสั่งซื้อ
            </button>
            <br />
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
</template>
  
<script>
import order from '../data_json/orders.js';
export default {
  data() {
    return {
      employee_ID: localStorage.getItem("employee_id"),
      order: order,
      send: '',
      search: '',
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
    sendTag(){
      alert("ส่งเลข " + this.send)
    }
  }
};
</script>
  
<style scoped>
.form-cc {
  background-color: #2c2c2c !important;
  color: aliceblue;
}
</style>