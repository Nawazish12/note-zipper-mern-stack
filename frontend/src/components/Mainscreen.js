import React from "react";
import "./Mainscreen.css";
import { Container, Row } from "react-bootstrap";

const Mainscreen = ({ title, children }) => {
  return (
    <>
      <Container className="mainback " style={{ width: "60%" }}>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Mainscreen;
