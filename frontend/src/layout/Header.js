import React, { useEffect, useState } from "react";
import { Collapse, Nav, NavItem, Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    correctNavigation();
});

  const correctNavigation = () => {
    const userAuthData = JSON.parse(localStorage.getItem("userauth"));
    setUser(userAuthData?.user);
    if (user) {
      navigate("/home");
    } else {
      navigate("/signin");
    }
  }
  const toggle = () => setIsOpen(!isOpen);

const handleSignout =()=> {
  localStorage.removeItem("userauth");
  navigate("/signin");
  setUser(null)
}
  return (
    <Navbar light color="info" expand="md">
      <NavbarBrand>
        <Link to="/" className="text-success fw-bold text-decoration-none">
          Magnet Brains
        </Link>
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto text-white" navbar style={{ marginLeft: "auto" }}>
        {!user ? (
  <>
    <NavItem>
      <Link
        tag={Link}
        to="/signup"
        className="text-white text-decoration-none fw-bold mx-2"
      >
        Signup
      </Link>
    </NavItem>
    <NavItem>
      <Link
        tag={Link}
        to="/signin"
        className="text-white text-decoration-none fw-bold mx-2"
      >
        Signin
      </Link>
    </NavItem>
  </>
) : (
  <NavItem className="d-flex align-items-center">
    <span className="text-white d-flex align-items-center flex-column mx-5 text-decoration-none fw-bold mx-2">
      <i className="bi  bi-person-circle"></i>{" "}
      <span className="text-success fw-bold text-capitalize">
        {user.name}
      </span>
    </span>
    <button
      onClick={handleSignout}
      className="text-danger btn text-decoration-none fw-bold mx-2"
    >
      <i className="bi bi-box-arrow-right"></i>
    </button>
  </NavItem>
)}

        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
