import { useEffect } from "react";
import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { Link as Linkrouter } from "react-router-dom";
import axios from "axios";
const FormLogin = () => {
  const runAcc = () => {
    const token = localStorage.getItem("user");
    if (token) {
      navigate("/showproduct");
    }
  };

  useEffect(() => {
    runAcc();
  }, []);
  const navigate = useNavigate();
  const onLogin = async (params) => {
    try {
      let res = await axios.post(
        "http://localhost:3000/api/auth/login",
        params
      );
      navigate("/showproduct");
      localStorage.setItem("user", JSON.stringify(res.data));
      localStorage.removeItem("guest");
    } catch (error) {
      console.log("loi~");
    }
  };
  const onFinish = (values) => {
    onLogin(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row>
        <Col span={12}>
          <div style={{ height: "100vh" }}>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://bizweb.dktcdn.net/100/347/891/files/105-jpeg.jpg?v=1658931825688"
            ></img>
          </div>
        </Col>
        <Col span={12}>
          <div style={{ marginTop: 200 }}>
            <div style={{ textAlign: "center" }}>
              <p>login</p>
            </div>
            <div
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
                  maxWidth: 800,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
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
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                  <br />
                  <Linkrouter to={"/signup"}>
                    Already have an account?
                  </Linkrouter>
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    đăng nhập
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default FormLogin;
