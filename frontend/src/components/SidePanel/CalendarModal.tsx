import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const CalendarModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addScheduleOption = () => {
        const options = [];
        let num = 1;

        for (let hour = 0; hour <= 24; hour++) {
            for (let minute = 0; minute < 60; minute++) {
                if (minute % 15 == 0) {
                    const time = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
                    options.push(
                        <option key={num} value={time}>
                            {time}
                        </option>
                    );
                    num++;
                }
            }
        }
        return options;
    };

    return (
        <>
            <button onClick={handleShow}>
                <i className="bi bi-plus-circle fs-4"></i>
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>予定の追加</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            className="fs-5"
                            placeholder="予定タイトル"
                            autoComplete="off"
                            name="title"
                        />
                    </Form.Group>
                    <Form.Group className="mt-3">
                        <InputGroup>
                            <Form.Select name="startTime"> {addScheduleOption()}</Form.Select>
                            <span className="p-1">–</span>
                            <Form.Select> {addScheduleOption()}</Form.Select>
                        </InputGroup>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        取り消し
                    </Button>
                    <Button variant="primary" type="submit" onClick={handleClose}>
                        追加
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default CalendarModal;
