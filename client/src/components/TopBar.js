import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function TopBar() {
  return (
    <Navbar>
      <Navbar.Brand href="/"><h3>Admin</h3></Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/" active={true}>
          Quản lý sản phẩm
        </Nav.Link>
        <Nav.Link href="/Warehouse">Nhập kho</Nav.Link>
      </Nav>
    </Navbar>
  );
}
