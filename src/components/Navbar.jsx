import React, { useState } from "react";
import "../style/Navbar.css";
import { Link } from 'react-router-dom'


export default function Navbarx() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white shadow p-5 z-0">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
          <div><Link to="/" className="logo text-2xl font-bold">ระบบห้องสมุด</Link></div>

            {/* Toggle Menu Bar */}
            <div className="md:hidden">
              <button id="menu-toggle" onClick={toggleMenu}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  className="w-6 h-6 "
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            <ul className="hidden md:flex space-x-8 menu-items">
            <Link to="/" className=" hover:text-green-600">ทั้งหมด</Link>
                <Link to="/listbook_id" className=" hover:text-green-600">รหัสหนังสือ</Link>
                <Link to="/listbook_name" className=" hover:text-green-600">ชื่อเรื่อง</Link>
                <Link to="/listbook_writer" className=" hover:text-green-600">นักเขียน</Link>
            </ul>
          </div>
          {/* Moblie Menu */}
          {isMenuOpen ? (
            <ul className="flex-col md:flex-row menu-items md:hidden mt-4">
            <Link to="/" className="hover:text-green-600 block md:inline-block md:mr-4 text-lg text-center mb-4 ">ทั้งหมด</Link>
            <Link to="/listbook_id" className="hover:text-green-600 block md:inline-block md:mr-4 text-lg text-center mb-4 ">รหัสหนังสือ</Link>
            <Link to="/listbook_name" className="hover:text-green-600 block md:inline-block md:mr-4 text-lg text-center mb-4 ">ชื่อเรื่อง</Link>
            <Link to="/listbook_writer" className="hover:text-green-600 block md:inline-block text-lg text-center mb-4 ">นักเขียน</Link>
            
            </ul>
        
          ) : null}
        </div>
      </nav>
    </>
  );
}
