import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.jsx";
import BorrowService from "../service/BorrowService.js";

export default function ListBook_All() {
  const [borrows, setBorrows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBorrows = async () => {
      try {
        const response = await BorrowService.getAllBorrow();
        setBorrows(response.data.allBorrows);
      } catch (error) {
        console.error("Error fetching borrows:", error);
      }
    };

    fetchBorrows();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = borrows.filter((borrow) =>
      borrow.tb_book.b_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <div className="z-0">
        <Navbar />
      </div>
      <section className="lb-all z-10">
        <div className="container mx-auto mt-20">
          <div className="lb-all-all flex flex-col p-4 gap-4">
            <div className="nav-btn flex justify-center my-4">
              <form onSubmit={handleSearch}>
                <input
                  className="border-[1.5px] border-slate-400 rounded-md text-lg"
                  type="text"
                  placeholder="พิมพ์คำที่ต้องการค้นหา"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  className="mx-4 bg-green-600 text-white px-4 font-medium rounded-md"
                  type="submit"
                >
                  ค้นหา
                </button>
              </form>
            </div>
            <h1 className="text-xl flex justify-center my-4">
              แสดงข้อมูลหนังสือทั้งหมด
            </h1>
            <div className="lb-all-card-container">
              {searchResults.length > 0
                ? searchResults.map((borrow, index) => (
                    <div
                      key={`${borrow.tb_book.b_id}_${index}`}
                      className="lb-all-card flex flex-col border-[1px] bg-white shadow-xl p-2 my-4"
                    >
                      <p>รหัสหนังสือ: {borrow.tb_book.b_id}</p>
                      <p>ชื่อหนังสือ: {borrow.tb_book.b_name}</p>
                      <p>ผู้ยืม: {borrow.tb_member.m_name}</p>
                      <p>หมวดหมู่: {borrow.b_category}</p> {/* แก้เป็น borrow.b_category */}
                      <p>ราคา: {borrow.b_price}</p>
                    </div>
                  ))
                : borrows.map((borrow, index) => (
                    <div
                      key={`${borrow.tb_book.b_id}_${index}`}
                      className="lb-all-card flex flex-col border-[1px] bg-white shadow-xl p-2 my-4"
                    >
                      <p>รหัสหนังสือ: {borrow.tb_book.b_id}</p>
                      <p>ชื่อหนังสือ: {borrow.tb_book.b_name}</p>
                      <p>ผู้ยืม: {borrow.tb_member.m_name}</p>
                      <p>หมวดหมู่: {borrow.tb_book.b_category}</p>
                      <p>ราคา: {borrow.tb_book.b_price} บาท</p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
