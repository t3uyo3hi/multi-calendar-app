import React, { useState } from "react";
import { Nav, Form, Button, Modal } from "react-bootstrap";

import { useSignUpForm } from "./../SignUpForm";
import { useLoginForm } from "./../LoginForm";
import { useLogout } from "./../LogoutTab";

const LoginModal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup" | "logout">(
    "login"
  );
  const [rememberMe, setRememberMe] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const {
    handleSubmit: handleSignUpSubmit,
    control: signUpControl,
    isSubmitting: isSignUpSubmitting,
    errors: signUpErrors,
  } = useSignUpForm();
  const {
    handleSubmit: handleLoginSubmit,
    control: loginControl,
    isSubmitting: isLoginSubmitting,
    errors: loginErrors,
  } = useLoginForm();

  const handleTabChange = (tab: "login" | "signup" | "logout") => {
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

  const handleLogout = useLogout(); // ログアウト関数を使用

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
          onSelect={(key) =>
            handleTabChange(key as "login" | "signup" | "logout")
          }
          className="mb-3"
        >
          <Nav.Link eventKey="login">ログイン</Nav.Link>
          <Nav.Link eventKey="signup">サインアップ</Nav.Link>
          <Nav.Link eventKey="logout">ログアウト</Nav.Link>
        </Nav>
        <Modal.Body>
          {activeTab === "login" ? (
            <div>
              <Form className="p-2" onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    {...loginControl.register("email")}
                    isInvalid={!!loginErrors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {loginErrors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>パスワード</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...loginControl.register("password")}
                    isInvalid={!!loginErrors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {loginErrors.password?.message}
                  </Form.Control.Feedback>
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
                    disabled={isLoginSubmitting}
                  >
                    ログイン
                  </Button>
                </div>
              </Form>
            </div>
          ) : activeTab === "signup" ? (
            <div>
              <Form className="p-4" onSubmit={handleSignUpSubmit}>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>ユーザー名</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    {...signUpControl.register("username")}
                    isInvalid={!!signUpErrors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {signUpErrors.username?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    {...signUpControl.register("email")}
                    isInvalid={!!signUpErrors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {signUpErrors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>パスワード</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...signUpControl.register("password")}
                    isInvalid={!!signUpErrors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {signUpErrors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Label>パスワードの確認</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    {...signUpControl.register("confirmPassword")}
                    isInvalid={!!signUpErrors.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    {signUpErrors.confirmPassword?.message}
                  </Form.Control.Feedback>
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
                    disabled={isSignUpSubmitting}
                  >
                    登録
                  </Button>
                </div>
              </Form>
            </div>
          ) : (
            <div>
              <p>ログアウトしますか？</p>
              <div className="d-flex justify-content-end mt-3">
                <Button
                  variant="secondary"
                  onClick={handleModalClose}
                  className="mr-3"
                  style={buttonStyle}
                >
                  キャンセル
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleLogout();
                    handleModalClose();
                  }}
                  className="ml-3"
                  style={buttonStyle}
                >
                  ログアウト
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginModal;
