import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { UserApi } from "../API/USERApi/UserApi";
import { useNavigate } from "react-router-dom";
import { Link as Linkrouter } from "react-router-dom";
import axios from "axios";
const FormSignUp = () => {
  const navigate = useNavigate();
  const onSignUp = async (params) => {
    try {
      let res = await axios.post(
        "http://localhost:3000/api/auth/register",
        params
      );
      navigate("/");
    } catch (error) {
      console.log("loi~");
    }
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    onSignUp(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Row>
        <Col span={8}></Col>
        <Col
          span={8}
          style={{
            marginTop: 200,
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
              label="name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
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
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
};
export default FormSignUp;
