import React from "react";
import Navbar from "./Navbar.jsx";

export default function ListBook_All() {
  return (
    <>
      <div className="z-0">
        <Navbar />
      </div>
      <section className="lb-all z-10">
        <div className="container mx-auto mt-20">
          <div className="lb-all-all flex flex-col  p-4 gap-4">
            <div className="nav-btn flex justify-center my-4">
              <input
                className="border-[1.5px] border-slate-400 rounded-md text-lg"
                type="text"
                placeholder="พิมพ์คำที่ต้องการค้นหา"
              />
              <button className=" mx-4 bg-green-600 text-white px-4 font-medium rounded-md">
                ค้นหา
              </button>
            </div>
            <h1 className="text-xl flex justify-center my-4">
              แสดงข้อมูลหนังสือทั้งหมด
            </h1>
            <div className="lb-all-card flex flex-col border-[1px] bg-white shadow-xl p-2">
              <p>รหัสหนังสือ : B00001 </p>
              <p>ชื่อหนังสือ : คู่มือการสอบรับราชการ </p>
              <p>นักเขียน : สมศักดิ์ ตั้งใจ</p>
              <p>หมวดหมู่ : วิชาการ</p>
              <p>ราคา : 299</p>
            </div>
            <div className="lb-all-card flex flex-col border-[1px] bg-white shadow-xl p-2">
              <p>รหัสหนังสือ : B00002 </p>
              <p>ชื่อหนังสือ : แฮร์รี่พอตเตอร์ </p>
              <p>นักเขียน : J.K. Rowling</p>
              <p>หมวดหมู่ : วรรณกรรม</p>
              <p>ราคา : 359</p>
            </div>
            <div className="lb-all-card flex flex-col border-[1px] bg-white shadow-xl p-2">
              <p>รหัสหนังสือ : B00003 </p>
              <p>ชื่อหนังสือ : เย็บปัก ถักร้อย</p>
              <p>นักเขียน : สะอาด อิ่มสุข</p>
              <p>หมวดหมู่ : เบ็ดเตล็ด</p>
              <p>ราคา : </p>
            </div>
            <div className="lb-all-card flex flex-col border-[1px] bg-white shadow-xl p-2">
              <p>รหัสหนังสือ : B00004 </p>
              <p>ชื่อหนังสือ : เจ้าชายน้อย</p>
              <p>นักเขียน : อ็องตวน เดอ แซ็งเต็กซูว์ เปรี</p>
              <p>หมวดหมู่ : วรรณกรรม</p>
              <p>ราคา : 355</p>
            </div>
            <div className="lb-all-card flex flex-col border-[1px] bg-white shadow-xl p-2">
              <p>รหัสหนังสือ : B00005 </p>
              <p>ชื่อหนังสือ : การเขียนโปรแกรมคอมพิวเตอร์</p>
              <p>นักเขียน : กิ่งแก้ว กลิ่นหอม</p>
              <p>หมวดหมู่ : วิชาการ</p>
              <p>ราคา : 329</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
