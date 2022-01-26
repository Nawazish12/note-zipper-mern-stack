import React from "react";
import "./Landingpage.css";
import { Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Landingpage = () => {
  return (
    <>
      <div className="main">
        <Container>
          <Row>
            <div className="into-text">
              <div>
                <h1 className="title">Welcome to the Notes Project </h1>
                <p className="sub-title">One safe place for all your notes</p>
              </div>
              <div style={{ marginTop: "50px" }}>
                <Link to="/login">
                  <Button type="button" size="lg" className="ist-btn">
                    LOGIN
                  </Button>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/register">
                  <Button
                    type="button"
                    size="lg"
                    variant="outline-info"
                    className="sxnd-btn"
                  >
                    REGISTER
                  </Button>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Landingpage;
