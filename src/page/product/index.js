import { Badge, Button, Col, Drawer, Layout, Row, theme } from "antd";
import {
  BarsOutlined,
  HomeOutlined,
  LogoutOutlined,
  MailOutlined,
  PhoneOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import "/Users/Admin/Desktop/workspace/vti/react vti/redux-toolkit/src/style/App.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../../style/App.scss";
const { Header, Content, Footer } = Layout;
const HomeLayout = ({ children }) => {
  const [change, setChange] = useState(true);
  const [btn, setbtn] = useState();
  useEffect(() => {
    changeAcc();
  }, [change]);

  const navigate = useNavigate();
  let { item } = useSelector((state) => state.cart);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const guest = JSON.parse(localStorage.getItem("guest"));
  const changeAcc = () => {
    if (user) {
      setbtn("manage");
    } else setbtn("login");
  };
  return (
    <Layout className="layout">
      <Header
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: "#4a4a48",
          zIndex: 20,
        }}
      >
        <Row style={{ marginTop: -15 }}>
          <Col
            span={4}
            style={{
              display: "flex",
              margin: "auto",
            }}
          >
            <img
              style={{ width: 150, height: 50, cursor: "pointer" }}
              onClick={() => {
                navigate("showproduct");
              }}
              src="https://bizweb.dktcdn.net/100/347/891/themes/710583/assets/logo.png?1677916253479"
            ></img>
          </Col>

          <Col span={16}>
            <div>
              <ul
                style={{
                  display: "flex",
                  color: "white",
                  justifyContent: "space-between",
                  listStyle: "none",
                }}
              >
                <li className="underline">ÁO</li>
                <li className="underline">QUẦN</li>
                <li className="underline">GIÀY</li>
                <li className="underline">LAKSTUDIOS</li>
                <li className="underline">MŨ</li>
                <li className="underline">TÚI </li>
                <li className="underline">KÍNH</li>
              </ul>
            </div>
          </Col>
          <Col
            span={4}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <LinkRouter to="cart" style={{ marginTop: 10, marginRight: 20 }}>
              <Badge count={item.length}>
                <ShoppingOutlined
                  style={{
                    color: "white",
                    fontSize: "30px",
                  }}
                ></ShoppingOutlined>
              </Badge>
            </LinkRouter>
            <UserOutlined
              onClick={showDrawer}
              style={{ color: "white", fontSize: 20 }}
            />

            <Drawer
              title="information"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <Row>
                <Col span={6}>
                  <p style={{ fontSize: 16 }}>Username:</p>
                  <p style={{ fontSize: 16 }}>Email:</p>
                </Col>
                <Col span={18}>
                  <p style={{ fontSize: 16 }}>
                    {user?.user.name ? user?.user.name : guest?.user.name}
                  </p>
                  <p style={{ fontSize: 16 }}>
                    {user?.user.email ? user?.user.email : guest?.user.email}
                  </p>
                </Col>
              </Row>
              <Button
                onClick={() => {
                  if (btn == "manage") {
                    navigate("admin/product");
                  } else {
                    navigate("/login");
                  }
                }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: 70,
                  marginTop: 20,
                }}
              >
                <p style={{ fontSize: 18 }}>{btn}</p>
              </Button>
              <Button
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/showproduct");
                  const data = {
                    user: { id: "1", name: "guest", email: "guest" },
                  };
                  localStorage.setItem("guest", JSON.stringify(data));
                  setChange(!change);
                }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: 70,
                  marginTop: 20,
                }}
              >
                <p style={{ fontSize: 18 }}>logout</p>
              </Button>
            </Drawer>
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          marginTop: 65,
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          height: 100,
          backgroundColor: "#4a4a48",
        }}
      >
        <Row>
          <Col
            span={6}
            style={{
              display: "flex",
              margin: "auto",
            }}
          >
            <img
              style={{ width: 150, height: 50, cursor: "pointer" }}
              onClick={() => {
                navigate("showproduct");
              }}
              src="https://bizweb.dktcdn.net/100/347/891/themes/710583/assets/logo.png?1677916253479"
            ></img>
          </Col>
          <Col span={6} style={{ color: "white", margin: "auto" }}>
            <HomeOutlined />
            <span> Địa chỉ: 276 Phố Huế, Hai Bà Trưng, Hà Nội</span>
          </Col>
          <Col span={6} style={{ color: "white", margin: "auto" }}>
            <MailOutlined />
            <span> Email: lakshop2012@gmail.com</span>
          </Col>
          <Col span={6} style={{ color: "white", margin: "auto" }}>
            <PhoneOutlined />
            <span> Phone: 0978879700</span>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};
export default HomeLayout;
