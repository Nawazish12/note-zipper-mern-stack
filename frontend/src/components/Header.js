import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";

const Header = ({ setsearch }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logOutHnadler = () => {
    dispatch(logout());
    history.push("/");
  };

  const userLogin = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLogin;
  return (
    <>
      <Navbar bg="primary" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">Notes Zipper</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 mt-1"
                  onChange={(e) => setsearch(e.target.value)}
                />
              </Form>
            </Nav>

            <Nav>
              {userInfo ? (
                <>
                  <Link to="/mynotes">
                    <Nav.Link href="/mynotes" id="mynotes">
                      My Notes
                    </Nav.Link>
                  </Link>

                  <NavDropdown
                    title={`${userInfo.name}`}
                    id="collasible-nav-dropdown"
                  >
                    <Link to="/profile">
                      <NavDropdown.Item href="/mynotes">
                        <img
                          alt=""
                          src={`${userInfo.pic}`}
                          width="25"
                          height="25"
                          style={{ marginRight: 10 }}
                        />
                        My Profile
                      </NavDropdown.Item>
                    </Link>

                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logOutHnadler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
