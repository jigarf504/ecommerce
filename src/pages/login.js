import {Row,Col,Card,Form,Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toastr from "toastr";
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  async function loginHandler(e) {
    e.preventDefault();
    if (!email) {
      toastr.error("The email field is required");
      return false;
    }
    if (!password) {
      toastr.error("The password field is required");
      return false;
    }
    try {
      const { data, status } = await axios.post("auth/signin", {
        email,
        password,
      });
      if (status === 200 && data.status) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("user_id", data.result._id);
        dispatch({
          type: "SET_USER",
          payload: data.result,
        });
        toastr.success("Sign in successfully!");
        navigate("/user/profile");
      }
    } catch (err) {
      toastr.error(err.response.data.message);
      console.log(err);
    }
  }

  return (
    <Row>
      <Col style={{ marginTop: "70px" }}>
        <Card>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form method="post" onSubmit={(e) => loginHandler(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login