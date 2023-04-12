import { Button, Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ProductApi } from "../../API/PRODUCTApi/ProductApi";
import { buyProduct } from "../../featre/cartSilce";
import "../../style/App.scss";
console.log("ok");
const SubProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    getProduct();
  }, []);
  console.log("ok");
  const user = JSON.parse(localStorage.getItem("user"));
  const getProduct = async () => {
    try {
      let res = await ProductApi.getById(params.id);
      setProduct(res);
    } catch (error) {}
  };
  return (
    <>
      <Row>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <Image width={500} src={product.image} />
        </Col>
        <Col span={12}>
          <b style={{ fontSize: 25, borderBottom: "1px solid black" }}>
            {product.name}
          </b>
          <br />
          <b>
            giá:
            <span style={{ color: "red", fontSize: 30 }}>
              {product.price?.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </b>
          <p>
            description:<span> {product.description}</span>
          </p>
          <div style={{ borderBottom: "1px solid #eee" }}></div>
          <p>kích thước:</p>
          <div>
            <Button type="text">M</Button>
            <Button type="text">L</Button>
            <Button type="text">XL</Button>
          </div>
          <div>
            <Button
              type="text"
              size="large "
              className="btn-addtocard"
              onClick={() => {
                if (user) {
                  dispatch(buyProduct(product));
                } else {
                  navigate("/login");
                }
              }}
            >
              add to cart
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SubProduct;
