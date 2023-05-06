import { Button, Card, Carousel, Col, Input, Pagination, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useState } from "react";
import { ProductApi } from "../../API/PRODUCTApi/ProductApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinjs from "./Spin";

const ListProduct = ({ children }) => {
  const [email, setEmail] = useState();
  const [data, setData] = useState([]);
  const { isLoading } = useSelector((state) => state.add);
  const dispatch = useDispatch();
  useEffect(() => {
    onPageChange();
  }, []);
  const navigate = useNavigate();
  const onPageChange = async (pageNumber) => {
    try {
      let res = await ProductApi.getByPage(pageNumber);
      setData(res);
    } catch (error) {}
  };
  const contentStyle = {
    height: "550px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "white",
  };
  return (
    <>
      <p
        style={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: 30,
        }}
      >
        <span style={{ borderBottom: "2px solid black" }}>ALL PRODUCT</span>
      </p>
      {isLoading && <Spinjs />}
      <Row>
        {data.map((item) => (
          <Col span={6} key={item.id}>
            <Card
              onClick={() => {
                navigate(`/subproduct/${item.id}`);
              }}
              hoverable
              style={{
                marginLeft: 15,
                width: 300,
                marginTop: "30px",
              }}
              cover={
                <img style={{ height: 450 }} alt="example" src={item.image} />
              }
            >
              <div style={{ textAlign: "center" }}>
                <Meta title={item.name} />
                <p style={{ color: "red" }}>
                  {item.price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Pagination
        defaultCurrent={1}
        total={Math.ceil((children.length / 8) * 10)}
        style={{ display: "flex", justifyContent: "flex-end", marginTop: 30 }}
        onChange={onPageChange}
      />

      <div>
        <p
          style={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: 30,
          }}
        >
          <span style={{ borderBottom: "2px solid black" }}>LOOKBOOK</span>
        </p>
        <Carousel autoplay style={{ backgroundColor: "white" }}>
          <div>
            <h3 style={contentStyle}>
              <Row>
                <Col
                  span={8}
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <div className="box">
                    <div className="hover-line">
                      <div className="animation-1">
                        <h2>
                          Lấy bối cảnh đồi cát “sa mạc“ bụi bặm<br></br> #Lak hy
                          vọng mọi người sẽ tìm được những items ưa thích trong
                          lookbook lần này để mặc trong bất kỳ dịp nào 🖤
                        </h2>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <p>LOOKBOOK LAKSHOP x PHÚ YÊN</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  span={8}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="box">
                    <div className="hover-line2">
                      <div className="animation-1">
                        <h2>
                          Bãi biển ngập nắng và gió
                          <br /> Cùng tận hưởng mùa hè qua bộ Lookbook <br />
                          đặc biệt từ #Lakshop với những items mới mẻ
                        </h2>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <p>LAKSHOP X BÌNH ĐỊNH 2021</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  span={8}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <div className="box">
                    <div className="hover-line3">
                      <div className="animation-1">
                        <h2>
                          Trời xanh - Mây trắng - Nắng vàng <br /> Cùng tận
                          hưởng mùa hè qua bộ Lookbook <br /> đặc biệt từ
                          #Lakshop
                        </h2>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <p>LAKSHOP X BÌNH ĐỊNH 2021</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Row>
                <Col
                  span={8}
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <div className="box">
                    <div className="hover-line4">
                      <div className="animation-1">
                        <h2></h2>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <p>LOOKBOOK LAKSHOP X QUY NHƠN</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  span={8}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div className="box">
                    <div className="hover-line5">
                      <div className="animation-1">
                        <h2></h2>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <p>LAKSHOP X MÙ CANG CHẢI 2020</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col
                  span={8}
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <div className="box">
                    <div className="hover-line6">
                      <div className="animation-1">
                        <h2></h2>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <p>LAKSTUDIOS X LAKSHOP X ĐỒI CHÈ YÊN BÁI 2019</p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </h3>
          </div>
        </Carousel>
      </div>
      <div style={{ marginBottom: 50 }}>
        <p
          style={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: 30,
          }}
        >
          <span style={{ borderBottom: "2px solid black" }}>
            ĐĂNG KÝ NHẬN TIN
          </span>
        </p>
        <p
          style={{
            textAlign: "center",
          }}
        >
          Nhập địa chỉ email của bạn để nhận được tin tức mới nhất
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Input
            placeholder="nhập email của bạn..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            type="email"
            style={{ width: 500, height: 40 }}
          ></Input>
          <Button
            style={{ backgroundColor: "#4a4a48", color: "white", height: 40 }}
            onClick={() => {
              console.log(email);
            }}
            type="text"
          >
            Đăng ký
          </Button>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
