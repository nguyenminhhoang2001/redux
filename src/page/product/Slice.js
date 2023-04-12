import { SettingOutlined } from "@ant-design/icons";
import { Carousel, Col, Layout, Menu, Row } from "antd";
import { Card } from "antd";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React, { useState, useEffect } from "react";

const Slice = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div className="box">
          <div className="img1" style={{ cursor: "pointer" }}>
            <b className="img-des">ÁO/TOP</b>
          </div>
        </div>
        <div className="box">
          <div className="img2" style={{ cursor: "pointer" }}>
            <b className="img-des">LAK STUDIOS</b>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 50,
        }}
      >
        <div className="box">
          <div className="img3" style={{ cursor: "pointer" }}>
            <b className="img-des">PHỤ KIỆN/ACCESSORIES</b>
          </div>
        </div>
        <div className="box">
          <div className="img4" style={{ cursor: "pointer" }}>
            <b className="img-des">GIÀY/SHOES</b>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 50,
        }}
      >
        <div className="box">
          <div className="img5" style={{ cursor: "pointer" }}>
            <b className="img-des">QUẦN</b>
          </div>
        </div>
        <div className="box">
          <div className="img6" style={{ cursor: "pointer" }}></div>
        </div>
      </div>
    </>
  );
};
export default Slice;
