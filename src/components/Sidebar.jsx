import React from "react";
import "./Sidebar.scss";
import Logo from "../assets/Logo.png";
import Home from "../assets/Home.png";
import Add from "../assets/Add.png";
import Search from "../assets/Search-icon.png";
// import List from "../assets/List.png";
import StudentSidebar from "../assets/Student-sidebar.png";
import Report from "../assets/Report.png";
import Setting from "../assets/Setting.png";
// import Logout from "../assets/Logout.png";
import TopArrow from "../assets/Top-arrow-sidebar.png";
import BottomArrow from "../assets/Bottom-arrow.png";

import { BsSearch } from "react-icons/bs";

import { Link } from "react-router-dom";

export const Sidebar = () => {
  const dropdownHandler = (e) => {
    const dropdownList = e.target.parentNode.nextElementSibling;
    if (dropdownList.classList.contains("dropdown")) {
      if (dropdownList.style.display == "block") {
        dropdownList.style.display = "none";
        e.target.src = BottomArrow;
      } else {
        dropdownList.style.display = "block";
        e.target.src = TopArrow;
      }
    }
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="" />
        <h2>Edu School</h2>
      </div>
      <ul className="sidebar__menu">
        <li className="home">
          <img src={Home} alt="" />
          <Link to="/">Trang chủ</Link>
        </li>
        <li className="add">
          <img src={Add} alt="" />
          <Link to="/">Thêm</Link>
          <div onClick={(e) => dropdownHandler(e)}>
            <img src={BottomArrow} alt="" />
          </div>
          <ul className="dropdown" style={{ display: "none" }}>
            <li>
              <Link to="/add-student">Tiếp nhận học sinh</Link>
            </li>
            <li>
              <Link to="/add-class">Lập danh sách lớp</Link>
            </li>
          </ul>
        </li>
        {/* <li className="list">
          <img src={List} alt="" />
          <Link to="/">Quản lý danh sách</Link>
          <div onClick={(e) => dropdownHandler(e)}>
            <img src={BottomArrow} alt="" />
          </div>
          <ul className="dropdown" style={{ display: "none" }}>
            <li>
              <Link to="/manage-student">Học sinh</Link>
            </li>
            <li>
              <Link to="/manage-class">Lớp học</Link>
            </li>
            <li>
              <Link to="/manage-subject">Môn học</Link>
            </li>
          </ul>
        </li> */}
        <li className="manage-score">
          {/* <img src={Search} alt="" /> */}
          <i>
            <BsSearch></BsSearch>
          </i>
          <Link to="/search">Tra cứu</Link>
        </li>
        <li className="manage-score">
          <img src={StudentSidebar} alt="" />
          <Link to="/score">Tạo bảng điểm môn</Link>
        </li>
        <li className="report">
          <img src={Report} alt="" />
          <Link to="/">Báo cáo</Link>
          <div onClick={(e) => dropdownHandler(e)}>
            <img src={BottomArrow} alt="" />
          </div>
          <ul className="dropdown" style={{ display: "none" }}>
            <li>
              <Link to="/report-subject">Báo cáo môn học</Link>
            </li>
            <li>
              <Link to="/report-term">Báo cáo học kỳ</Link>
            </li>
          </ul>
        </li>
        <li className="sidebar__setting">
          <img src={Setting} alt="" />
          <Link to="/setting">Thay đổi quy định</Link>
          <div onClick={(e) => dropdownHandler(e)}>
            <img src={BottomArrow} alt="" />
          </div>
          <ul className="dropdown" style={{ display: "none" }}>
            <li>
              <Link to="/setting/setting-list">Danh sách tham số</Link>
            </li>
            <li>
              <Link to="/setting/class-list">Danh sách các lớp</Link>
            </li>
            <li>
              <Link to="/setting/subject-list">Danh sách môn học</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
