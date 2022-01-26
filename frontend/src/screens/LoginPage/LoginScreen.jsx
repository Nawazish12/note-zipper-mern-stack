import React, { useState, useEffect } from "react";
import Mainscreen from "../../components/Mainscreen";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import axios from "axios";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userAction";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLoginReducer);
  const { loading, error, userInfo } = userLogin;

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  return (
    <>
      <Mainscreen title="LOGIN">
        <div className="logincontainer">
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          <Form
            style={{ marginTop: "30px" }}
            onSubmit={submitHandler}
            method="POST"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
          <Row>
            <Col>
              New Customer ? <Link to="/register">Click Here</Link>
            </Col>
          </Row>
        </div>
      </Mainscreen>
    </>
  );
};

export default LoginScreen;
