import React, { useState } from "react";
import "./css/style.css";
import "./css/media.css";

// Import ảnh từ thư mục assets/images
import img1 from "./assets/images/double4.jpg";
import img2 from "./assets/images/double5.jpg";
import img3 from "./assets/images/double2.jpg";
import img4 from "./assets/images/double3.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="Over-Main">
        <div className="Main-left_slogan">
          <h1 className="animate__animated animate__bounceInLeft">
            Chiếc túi xách không chỉ là phụ kiện, <br />
            mà là phong cách và sự tự tin của người phụ nữ.
          </h1>
          <button className="animate__animated animate__bounceInLeft">
            <a href="#">Tìm hiểu thêm</a>
          </button>
        </div>

        <div className="Main-right_imgae">
          <div className="column">
            <div className="column-1 animate__animated animate__bounceInRight">
              <img src={img1} alt="bag1" />
            </div>
            <div className="column-1 animate__animated animate__bounceInRight">
              <img src={img2} alt="bag2" />
            </div>
            <div className="column-1 animate__animated animate__bounceInRight">
              <img src={img3} alt="bag3" />
            </div>
            <div className="column-1 animate__animated animate__bounceInRight">
              <img src={img4} alt="bag4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
