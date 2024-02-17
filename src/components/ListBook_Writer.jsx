import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";

export default function ListBook_ID() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const books = [
    {
      id: "B00001",
      title: "คู่มือการสอบรับราชการ",
      writer: "สมรักษ์ สะอาด",
      category: "วิชาการ",
      price: "299 บาท"
    },
    {
      id: "B00002",
      title: "แฮร์รี่ พอตเตอร์",
      writer: "J.K Rowling",
      category: "วรรณกรรม",
      price: "359 บาท"
    },
    {
      id: "B00003",
      title: "เย็บ ปัก ถักร้อย",
      writer: "สะอาด อิ่มสุข",
      category: "เบ็ดเตล็ด",
      price: "249 บาท"
    },
    {
      id: "B00004",
      title: "เจ้าชายน้อย",
      writer: "อ็องตวน เดอ แซ็งแต๊กซูว์ เปรี",
      category: "วรรณกรรม",
      price: "355 บาท"
    },
    {
      id: "B00005",
      title: "การเขียนโปรแกรมคอมพิวเตอร์",
      writer: "กิ่งแก้ว กลิ่นหอม",
      category: "วิชาการ",
      price: "329 บาท"
    },
  ];


  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = () => {

    const filteredBooks = books.filter((book) => book.writer === searchValue);

    setFilteredBooks(filteredBooks);
  };

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
                value={searchValue}
                onChange={handleSearchChange}
              />
              <button
                className="mx-4 bg-green-600 text-white px-4 font-medium rounded-md"
                onClick={handleSearchSubmit}
              >
                ค้นหา
              </button>
            </div>
            <h1 className="text-xl flex justify-center my-4">
              แสดงข้อมูลชื่อนักเขียน
            </h1>

            {searchValue === "" ? (

              <div className="lb-all-card-container">
                {books.map((book) => (
                  <div
                    key={book.writer}
                    className="lb-all-card flex flex-col border-[1px] bg-white shadow-xl p-2 my-4"
                  >
                    <p>รหัสหนังสือ: {book.id}</p>
                    <p>ชื่อหนังสือ: {book.title}</p>
                    <p>ผู้เขียน: {book.writer}</p>
                    <p>หมวดหมู่: {book.category}</p>
                    <p>ราคา: {book.price}</p>
                  </div>
                ))}
              </div>
            ) : filteredBooks.length > 0 ? (

              <div className="lb-all-card-container">
                {filteredBooks.map((book) => (
                  <div
                    key={book.writer}
                    className="lb-all-card flex flex-col border-[1px] bg-white shadow-xl p-2 my-4"
                  >
                    <p>รหัสหนังสือ: {book.id}</p>
                    <p>ชื่อหนังสือ: {book.title}</p>
                    <p>ผู้เขียน: {book.writer}</p>
                    <p>หมวดหมู่: {book.category}</p>
                    <p>ราคา: {book.price}</p>
                  </div>
                ))}
              </div>
            ) : (

              <div className="flex justify-center my-4">
                <div className="lb-all-card flex flex-col border-[1px] bg-white shadow-xl p-2 text-center py-14 px-8">
                  <p>ไม่พบข้อมูลที่คุณต้องการค้นหา</p>
                  <p>กรุณาลองค้นหาใหม่</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
