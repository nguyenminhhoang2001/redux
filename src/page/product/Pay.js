import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import { Link as Linkrouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Pay = () => {
  const [data, setData] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [pay, setPay] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    district: "",
    wards: "",
    cuthe: "",
  });
  const onFinish = (values) => {
    setPay({
      ...pay,
      name: values.name,
      phone: values.phone,
      email: values.email,
    });
    if (values.cuthe !== undefined) {
      setPay({
        ...pay,
        cuthe: values.cuthe,
      });
    }
  };
  console.log(pay);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://provinces.open-api.vn/api/p/",
    }).then(function (res) {
      setData(res.data);
    });
  }, []);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (value) => {
    setPay({ ...pay, city: value });
    axios({
      method: "get",
      url: "https://provinces.open-api.vn/api/d/",
    }).then(function (res) {
      const d = res.data.filter((item) => item.province_code == value);
      setDistricts(d);
    });
  };
  const onChange1 = (value) => {
    setPay({ ...pay, district: value });
    axios({
      method: "get",
      url: "https://provinces.open-api.vn/api/w/",
    }).then(function (res) {
      const w = res.data.filter((item) => item.district_code == value);
      setWards(w);
    });
  };
  const onChange2 = (value) => {
    setPay({ ...pay, wards: value });
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };
  return (
    <div>
      <>
        <Row>
          <Col span={8}></Col>
          <Col
            span={8}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="full name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your full name!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <p style={{ textAlign: "center" }}>vui long chon dia chi:</p>
                <Select
                  showSearch
                  placeholder="vui long chon tinh thanh cua ban "
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={data.map((item) => ({
                    label: item.name,
                    value: item.code,
                  }))}
                />
                <Select
                  style={{ marginTop: 20 }}
                  showSearch
                  placeholder="vui long chon thanh pho cua ban"
                  optionFilterProp="children"
                  onChange={onChange1}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={districts.map((item) => ({
                    label: item.name,
                    value: item.code,
                  }))}
                />
                <Select
                  style={{ marginTop: 20 }}
                  showSearch
                  placeholder="vui long chon phuong cua ban"
                  optionFilterProp="children"
                  onChange={onChange2}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={wards.map((item) => ({
                    label: item.name,
                    value: item.code,
                  }))}
                />
                <p style={{ textAlign: "center" }}>ghi ro dia chi cu the:</p>
                <Form.Item name="cuthe">
                  <Input />
                </Form.Item>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    style={{ marginTop: 20, width: 200 }}
                    type="text"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </Col>
          <Col span={8}></Col>
        </Row>
      </>
    </div>
  );
};

export default Pay;
