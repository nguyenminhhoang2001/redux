import React from "react";
import {
  HomeOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const Menu111 = () => {
  return (
    <>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <UserOutlined />
          <span>List User</span>
          <Link to="user" />
        </Menu.Item>
        <Menu.Item key="2">
          <UploadOutlined />
          <span>List Product</span>
          <Link to="product" />
        </Menu.Item>
        <Menu.Item key="3">
          <HomeOutlined />
          <span>Home Page</span>
          <Link to="/showproduct" />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Menu111;
