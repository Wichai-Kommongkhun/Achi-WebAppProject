const express = require("express");
const path = require("path")
const app = express();
const conn = require('../config/config');
const { log } = require("console");
const { router } = require("./employee");
const XLSX = require('xlsx');
// const orderController = require('../controllers/business/order-controller');
// const multer = require('multer');

// const upload = multer({dest:'./static/uploads'})

router = express.Router();

// router.get("/export" , (req,res) => {
//     const data = [
//         { ชื่อ: 'นายจอห์น โด', อายุ: 30, อีเมล: 'john.doe@example.com' },
//         { ชื่อ: 'นางสาวเจน สมิธ', อายุ: 28, อีเมล: 'jane.smith@example.com' },
//         { ชื่อ: 'นายบ็อบ จอห์นสัน', อายุ: 35, อีเมล: 'bob.johnson@example.com' }
//       ];
    
//       // สร้าง workbook และ worksheet ใหม่
//       const workbook = XLSX.utils.book_new();
//       const worksheet = XLSX.utils.json_to_sheet(data);
    
//       // เพิ่ม worksheet เข้าสู่ workbook
//       XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    
//       // สร้างไฟล์ Excel ในหน่วยความจำ
//       const excelFile = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });
    
//       // ตั้งค่าส่วนหัวของการตอบกลับสำหรับการดาวน์โหลดไฟล์
//       res.setHeader('Content-Disposition', 'attachment; filename=export.xlsx');
//       res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    
//       // ส่งไฟล์ Excel เป็นการตอบกลับ
//       res.send(excelFile);
//     });


exports.router = router;
