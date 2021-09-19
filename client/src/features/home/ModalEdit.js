import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field } from "formik";

import { sanPhamUpdatePending } from "../../app/slice/sanpham";

export default function ModalAdd({ item, show, handleShow }) {
  const { NCC, NSX, TheLoai } = useSelector((s) => s.sanpham);
  const dispatch = useDispatch();
  return (
    <Modal show={show} onHide={handleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm sản phẩm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={{
            TenSP: item.TenSP,
            DonGia: item.DonGia,
            SoLuong: item.SoLuong,
            NSX: item.NSX._id,
            NCC: item.NCC._id,
            TheLoai: item.TheLoai._id,
          }}
          onSubmit={(values) => {
            dispatch(sanPhamUpdatePending({ values, _id: item._id }));
            handleShow();
          }}
        >
          {(formProps) => (
            <Form>
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                onChange={formProps.handleChange("TenSP")}
                value={formProps.values.TenSP}
              />
              <Form.Label>Đơn giá</Form.Label>
              <Form.Control
                type="number"
                onChange={formProps.handleChange("DonGia")}
                value={formProps.values.DonGia}
              />

              <Form.Label>Thể loại</Form.Label>
              <Form.Select
                value={item.TheLoai._id}
                onChange={formProps.handleChange("TheLoai")}
              >
                {TheLoai.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.TenLoai}
                  </option>
                ))}
              </Form.Select>

              <Form.Label>Nhà sản xuất</Form.Label>
              <Form.Select
                value={item.NSX._id}
                onChange={formProps.handleChange("NSX")}
              >
                {NSX.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.TenNSX}
                  </option>
                ))}
              </Form.Select>

              <Form.Label>Nhà cung cấp</Form.Label>
              <Form.Select
                value={item.NCC._id}
                onChange={formProps.handleChange("NCC")}
              >
                {NCC.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.TenNCC}
                  </option>
                ))}
              </Form.Select>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                <Button onClick={() => formProps.handleSubmit()}>
                  Chỉnh sửa
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
}
