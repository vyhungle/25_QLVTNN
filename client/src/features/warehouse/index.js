import React from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import TopBar from "../../components/TopBar";
import {
  editSLPending,
  filterListSP,
  sanPhamUpdatePending,
} from "../../app/slice/sanpham";
import { moneyFormat } from "../../utils/format";
import ModalSuccess from "./ModalSuccess";

export default function Index() {
  const { NCC, filterList } = useSelector((s) => s.sanpham);
  const [sl, setSl] = React.useState(0);
  const [gia, setGia] = React.useState(0);
  const [_id, setId] = React.useState(filterList[0]?._id);
  const dispatch = useDispatch();

  const [show, setShow] = React.useState(false);

  const handleShowModal = () => {
    setShow((old) => !old);
  };

  const handleChangeNCC = (event) => {
    const _id = event.target.value;
    dispatch(filterListSP({ _id }));
  };

  const handleUpdate = () => {
    console.log(_id, sl);
    if (_id !== "" && sl > 0) {
      dispatch(
        editSLPending({ SoLuong: { SoLuong: sl }, _id, handleShowModal })
      );
    }
  };
  return (
    <div>
      <TopBar />
      <ModalSuccess handleShowModal={handleShowModal} show={show} />
      <Form
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 20,
        }}
      >
        <div>
          <Form.Label>Chọn nhà cung cấp</Form.Label>
          <Form.Select
            aria-label="Default select example"
            style={{ width: 550 }}
            onChange={(event) => handleChangeNCC(event)}
          >
            {NCC.map((item) => (
              <option key={item._id} value={item._id}>
                {item.TenNCC}
              </option>
            ))}
          </Form.Select>

          <Form.Label>Chọn sản phẩm</Form.Label>
          <Form.Select
            aria-label="Default select example"
            style={{ width: 550 }}
            onChange={(event) => setId(event.target.value)}
          >
            {filterList.map((item) => (
              <option key={item._id} value={item._id}>
                {item.TenSP}
              </option>
            ))}
          </Form.Select>

          <Form.Label>Số lượng</Form.Label>
          <Form.Control
            style={{ width: 550 }}
            type="number"
            onChange={(event) => setSl(event.target.value)}
          />

          <Form.Label>Giá nhập</Form.Label>
          <Form.Control
            style={{ width: 550 }}
            type="number"
            onChange={(event) => setGia(event.target.value)}
          />

          <div>
            {sl * gia > 0 && <p>Thành tiền: {moneyFormat(sl * gia)} đ</p>}
            <Button style={{ marginTop: 15 }} onClick={() => handleUpdate()}>
              Nhập sản phẩm
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
