import React, { useState } from "react";
import { Nav, Form, Button, Modal } from "react-bootstrap";

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
      <Button
        variant="link"
        onClick={handleModalOpen}
        className="position-absolute top-0 end-0 m-5 p-0 text-dark"
      >
        <i className="bi bi-person-circle fs-2"></i>
      </Button>

      <Modal show={showModal} onHide={handleModalClose} centered>
        <Nav
          variant="tabs"
          activeKey={activeTab}
          onSelect={(key) => handleTabChange(key as "login" | "signup")}
          className="mb-3"
        >
          <Nav.Link eventKey="login">ログイン</Nav.Link>
          <Nav.Link eventKey="signup">サインアップ</Nav.Link>
        </Nav>
        <Modal.Body>
          {activeTab === "login" ? (
            <div>
              <Form className="p-2">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>パスワード</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRememberMe">
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
              <Form className="p-4">
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

                <div className="d-flex justify-content-end mt-3">
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
    </div>
  );
};

export default LoginModal;
