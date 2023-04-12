import React from "react";
import "../../style/App.scss";
import { useSelector, useDispatch } from "react-redux";
import { decre, deleteProduct, incre } from "../../featre/cartSilce";
import { Button, Col, message, Row, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

const CartProduct = () => {
  const navigate = useNavigate();
  const { item, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const data = item;

  return (
    <>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid black",
          borderBottom: "1px solid black",
          listStyle: "none",
          fontSize: 20,
        }}
      >
        <li>sản phẩm</li>
        <li>số lượng </li>
        <li>giá</li>
        <li>xóa</li>
      </ul>
      {data.map((data) => (
        <>
          <Row>
            <Col span={6}>
              <div style={{ textAlign: "center", display: "flex" }}>
                <img style={{ width: 150, height: 250 }} src={data.image}></img>
                <p style={{ margin: "auto" }}>{data.name}</p>
              </div>
            </Col>
            <Col
              span={6}
              style={{
                margin: "auto",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Button
                  onClick={() => {
                    dispatch(decre(data));
                  }}
                >
                  -
                </Button>
                <p>{data.quantity}</p>
                <Button
                  onClick={() => {
                    dispatch(incre(data));
                  }}
                >
                  +
                </Button>
              </div>
            </Col>
            <Col span={6} style={{ textAlign: "center", margin: "auto" }}>
              <p>
                {data.price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </Col>
            <Col span={6} style={{ textAlign: "center", margin: "auto" }}>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  dispatch(deleteProduct(data));
                }}
              >
                <Space size="middle">
                  <DeleteOutlined style={{ fontSize: "30px" }} />
                </Space>
              </div>
            </Col>
          </Row>
        </>
      ))}
      <p style={{ display: "flex", justifyContent: "flex-end" }}>
        totalPrice:
        <span>
          {totalPrice.toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </span>
      </p>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          type="text"
          onClick={() => {
            navigate("/home/pay");
          }}
        >
          thanh toán
        </Button>
      </div>
    </>
  );
};

export default CartProduct;
