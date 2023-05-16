<template>
  <head>
    <title>AchiFootBall</title>
  </head>
  <div class="container py-3">
    <div class="row">
      <div class="col-3 border-end">
        <div class="d-flex py-2">
          <a href="/employeeSelect" style="color:aliceblue; text-decoration: none;">
            <h3>รายการคำสั่งซื้อ</h3>
          </a>
        </div>
        <div class="d-flex py-2">
          <a href="/emCon" style="color:aliceblue; text-decoration: none;">
            <h3>ส่งเลขติดตามพัศดุ</h3>
          </a>
        </div>

        <div class="d-flex py-2">
          <a href="/emSelecttrue" style="color:aliceblue; text-decoration: none;">
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
        <div class="row" style="color:aliceblue;">
          <div class="col">
            <h3>รหัสพนักงาน {{ id }}</h3>
            <h5>รายการคำสั่งซื้อ</h5>
          </div>
        </div>
        <div class="row py-2" style="color: aliceblue;">
          <div class="col-2">
            <h6>แสดงรายการ : </h6>
          </div>
          <div class="col-4">
            <div class="form-check mx-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                ที่ชำระเงินสำเร็จ
              </label>
            </div>
            <div class="form-check mx-2">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                ที่ยังไม่ได้รับเลขติดตามพัสดุ
              </label>
            </div>
          </div>
          <div class="col-4">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                แสดงคำสั่งซื้อทั้งหมด
              </label>
            </div>
            <div class="form-check ">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                ที่ยังไม่ชำระเงิน
              </label>
            </div>
          </div>
        </div>

        <div class="row py-4" style="color: aliceblue;">
          <div class="col-12 d-flex">
            <label for="">ค้นหาคำสั่งซื้อ :</label>
            <div class="col-2 mx-3 input-group-sm">
              <input type="text" placeholder="ระบุเลขที่คำสั่งซื้อ" class="form-control" v-model="search">
            </div>
            <label for="">แสดงคำสั่งซื้อวันที่ :</label>
            <div class="col-2 mx-3 input-group-sm">
              <input type="date" placeholder="ระบุเลขที่คำสั่งซื้อ" class="form-control">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <table class="table" id="tblData">
              <thead style="background-color: #505050; color: aliceblue;">
                <tr>
                  <th>เลขที่คำสั่งซื้อ</th>
                  <th>วันที่สั่งซื้อ</th>
                  <th>ราคาคารวม</th>
                  <th>การชำระเงิน</th>
                  <th>เลขติดตามพัสดุ</th>
                  <th></th>
                </tr>
              </thead>
              <tbody style="background-color: #222222; color: aliceblue;" >
                <tr class="size_tr" v-for="(item) in orders" :key="item" v-show="item.order_number.toString().includes(search)">
                  <td>{{ item.order_number}}</td>
                  <td>{{ item.date_sales }}</td>
                  <td>{{ sumPrice(item.chart) }}</td>
                  <td>{{ item.pay_success }}</td>
                  <td>{{ item.tag_number }}</td>
                  <td><a :href="'/order-detail?oid='+item.order_number" style="color: aliceblue;">รายละเอียด</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row py-4">
          <div class="col">
            <button type="button" class="btn btn-success">พิมพ์รายการสั่งซื้อ</button>
            <br>
            <p style="color: aliceblue;" class="py-2">หมายเหตุ *: พิมพ์ข้อมูลคำสั่งตามที่แสดงในตาราง</p>
            <br>
            <br>
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


    // function exportTableToExcel(tableID, filename = ''){
    //   var downloadLink;
    //   var dataType = 'application/vnd.ms-excel';
    //   var tableSelect = document.getElementById(tableID);
    //   var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    //   // Specify file name
    //   filename = filename?filename+'.xls':'excel_data.xls';
      
    //   // Create download link element
    //   downloadLink = document.createElement("a");
      
    //   document.body.appendChild(downloadLink);
      
    //   if(navigator.msSaveOrOpenBlob){
    //       var blob = new Blob(['\ufeff', tableHTML], {
    //           type: dataType
    //       });
    //       navigator.msSaveOrOpenBlob( blob, filename);
    //   }else{
    //       // Create a link to the file
    //       downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    //       // Setting the file name
    //       downloadLink.download = filename;
    //       //triggering the function
    //       downloadLink.click();
    //   }   
    // }

 
  export default {
    data() {
      return {
        employee_ID: localStorage.getItem('employee_id'),
        orders: order,
        search: '',
        id:'',
 
      }
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
      html_to_ex(){
        window.print()
      },

    },
    created() {
      console.log(order);
      this.id = localStorage.getItem("idEm");
      // this.allorder = res.data.status;

    }
  }
</script>
  
<style>
.size_tr {
  font-size: 16px !important;
}
</style>