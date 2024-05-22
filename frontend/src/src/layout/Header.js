import React, { useCallback, useEffect, useState } from "react";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);

  const correctNavigation = () => {
    try {
      const userAuthData = JSON.parse(localStorage.getItem("userauth"));
      setUser(userAuthData?.user);
      setName(userAuthData?.user?.name);     
    } catch (error) {
      return;
    }
  }

  useEffect(() => {
    correctNavigation();
  }, []); 

  const toggle = () => setIsOpen(!isOpen);

  const handleSignout = () => {
    localStorage.removeItem("userauth");
    setUser(null);
    setName(null);
  };
  return (
    <Navbar light color="info" expand="md">
      <NavbarBrand tag={Link} to="/" className="text-success fw-bold text-decoration-none">
        Magnet Brains
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto text-white" style={{ marginLeft: "auto" }}>
          {!user ? (
            <>
              <li>
                <Link 
                  to="/signup"
                  className="text-white text-decoration-none fw-bold mx-2"
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link 
                  to="/signin"
                  className="text-white text-decoration-none fw-bold mx-2"
                >
                  Signin
                </Link>
              </li>
            </>
          ) : (
            <li className="d-flex align-items-center">
              <span className="text-white d-flex align-items-center flex-column mx-5 text-decoration-none fw-bold mx-2">
                <i className="bi bi-person-circle"></i>{" "}
                <span className="text-success fw-bold text-capitalize">
                  {name}
                </span>
              </span>
              <Link 
                onClick={handleSignout}
                to="/signin"
                className="text-danger btn text-decoration-none fw-bold mx-2"
              >
                <i className="bi bi-box-arrow-right"></i>
              </Link>
            </li>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
