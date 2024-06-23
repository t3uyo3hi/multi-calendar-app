import React, { useState } from "react";
import { Navbar, Nav, Form, Button, Container, Modal } from "react-bootstrap";

const LoginModal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [rememberMe, setRememberMe] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleTabChange = (tab: "login" | "signup") => {
    setActiveTab(tab);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const buttonStyle = {
    margin: "5px",
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>

      <Container className="my-5">
        <Button variant="primary" onClick={handleModalOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ffffff"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </Button>

        <Modal show={showModal} onHide={handleModalClose}>
          <Nav
            variant="tabs"
            activeKey={activeTab}
            onSelect={(key) => handleTabChange(key as "login" | "signup")}
          >
            <Nav.Link eventKey="login">ログイン</Nav.Link>
            <Nav.Link eventKey="signup">サインアップ</Nav.Link>
          </Nav>
          <Modal.Body>
            {activeTab === "login" ? (
              <div>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>パスワード</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group controlId="formBasicRememberMe">
                    <Form.Check
                      type="checkbox"
                      label="状態の保存"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-end align-items-center mb-3">
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={handleModalClose}
                      className="mr-3"
                      style={buttonStyle}
                    >
                      取り消し
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      className="ml-3"
                      style={buttonStyle}
                    >
                      ログイン
                    </Button>
                  </div>
                </Form>
              </div>
            ) : (
              <div>
                <Form>
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>ユーザー名</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>パスワード</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>パスワードの確認</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-end align-items-center mb-3">
                    <Button
                      variant="secondary"
                      type="button"
                      onClick={handleModalClose}
                      className="mr-3"
                      style={buttonStyle}
                    >
                      取り消し
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      className="ml-3"
                      style={buttonStyle}
                    >
                      登録
                    </Button>
                  </div>
                </Form>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default LoginModal;
