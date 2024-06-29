import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const TodoModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow}>
                <i className="bi bi-plus-circle fs-4"></i>
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mt-3">
                        <Form.Control
                            type="text"
                            className="fs-5"
                            placeholder="Todoタイトル"
                            autoComplete="off"
                            name="title"
                        />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Select className="fs-5" autoComplete="off" name="title"></Form.Select>
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <Form.Select name="startTime"></Form.Select>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        閉じる
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        追加
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TodoModal;
