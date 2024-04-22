import React, { useState, useRef } from "react";
import { Nav, Navbar, Container, Modal, Button, Spinner } from "react-bootstrap";

function NavbarSection() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const loginEmailRef = useRef(null);
  const loginPasswordRef = useRef(null);
  const signupEmailRef = useRef(null);

  const handleLoginModalClose = () => setShowLoginModal(false);
  const handleSignUpModalClose = () => setShowSignUpModal(false);
  const handleSignUpModalOpen = () => {
    setShowLoginModal(false);
    setShowSignUpModal(true);
  };

  const handleLogin = () => {
    const email = loginEmailRef.current.value;
    const password = loginPasswordRef.current.value;

    // Validasi input
    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }

    setLoading(true);
    // Simulasi penundaan autentikasi
    setTimeout(() => {
      setLoading(false);
      setLoginSuccess(true);
      setTimeout(() => setLoginSuccess(false), 3000); // Tutup pop-up success setelah 3 detik
      setShowLoginModal(false); // Kembali ke Home setelah login sukses
    }, 2000); 
  };

  const handleSignUp = () => {
    const email = signupEmailRef.current.value;

    // Validasi input
    if (!email) {
      alert("Email is required.");
      return;
    }

    setLoading(true);
    // Simulasi penundaan autentikasi
    setTimeout(() => {
      setLoading(false);
      setSignupSuccess(true);
      setTimeout(() => setSignupSuccess(false), 3000); // Tutup pop-up success setelah 3 detik
      setShowSignUpModal(false); // Kembali ke Home setelah sign up sukses
    }, 2000); 
  };

  return (
    <>
      <Navbar bg="white" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://tbnindonesia.org/images/logo-tbnindonesia.svg"
              alt="logo"
              width="75px"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Event</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link
                onClick={() => setShowLoginModal(true)}
                style={{ backgroundColor: "#c9e34a" }}
                className="btn text-black"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleLoginModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                ref={loginEmailRef}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                ref={loginPasswordRef}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSignUpModalOpen}>
            Sign Up
          </Button>
          <Button variant="primary" onClick={handleLogin} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Login"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUpModal} onHide={handleSignUpModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="signupEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="signupEmail"
                ref={signupEmailRef}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLoginModal(true)}>
            Back
          </Button>
          <Button variant="primary" onClick={handleSignUp} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Sign Up"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Login Success Modal */}
      <Modal show={loginSuccess} onHide={() => setLoginSuccess(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfully logged in.</Modal.Body>
      </Modal>

      {/* Sign Up Success Modal */}
      <Modal show={signupSuccess} onHide={() => setSignupSuccess(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You have successfully signed up. Please check your email!</Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarSection;
