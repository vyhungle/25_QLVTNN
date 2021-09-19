import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import ModalAdd from "./ModalAdd";
import ButtonMenu from "./ButtonMenu";
import { moneyFormat } from "../../utils/format";

export default function ListProduct() {
  const { list, isLoading } = useSelector((s) => s.sanpham);
  const [show, setShow] = React.useState(false);
  const handleShow = () => {
    setShow((show) => !show);
  };
  return (
    <div style={{ padding: 10 }}>
      <ModalAdd show={show} handleShow={handleShow} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 20,
        }}
      >
        <h4>Thêm sản phẩm</h4>
        <Button style={{ marginLeft: 10 }} onClick={() => handleShow()}>
          Thêm
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thể loại</th>
            <th>Nhà sản xuất</th>
            <th>Nhà cung cấp</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.TenSP}</td>
              <td>{item.SoLuong}</td>
              <td>{moneyFormat(item.DonGia)}đ</td>
              <td>{item.TheLoai.TenLoai}</td>
              <td>{item.NSX.TenNSX}</td>
              <td>{item.NCC.TenNCC}</td>
              <td>
                <ButtonMenu handleShow={handleShow} item={item} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
