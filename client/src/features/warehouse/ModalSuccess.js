import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function ModalSuccess({ show, handleShowModal }) {
  return (
    <Modal show={show} onHide={handleShowModal}>
      <Modal.Header closeButton>
        <Modal.Title>Thông báo</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Bạn đã nhập sản phẩm thành công</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Đóng</Button>
        <Button variant="primary" href="/">
          Kiểm tra
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
