import React from "react";
import { OverlayTrigger, Popover, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

import ModalEdit from "./ModalEdit";
import { sanPhamDetetePending } from "../../app/slice/sanpham";

export default function Menu({ item }) {
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const handleShow = () => {
    setShow((show) => !show);
  };

  const [showMenu, setShowMenu] = React.useState(false);

  const handleDelete = (_id) => {
    dispatch(sanPhamDetetePending({ _id }));
    setShowMenu((old) => !old);
  };

  const handleOpenPopup = () => {
    handleShow();
    setShowMenu((old) => !old);
  };

  return (
    <div>
      <ModalEdit item={item} show={show} handleShow={handleShow} />
      <OverlayTrigger
        show={showMenu}
        // trigger="click"
        key="left"
        placement="left"
        overlay={
          <Popover id={`popover-positioned-left`}>
            <Popover.Header as="h3">Chức năng</Popover.Header>
            <Popover.Body>
              <Button
                variant="primary"
                onClick={() => handleOpenPopup()}
                style={{ marginRight: 10 }}
              >
                Chỉnh sửa
              </Button>
              <Button variant="danger" onClick={() => handleDelete(item._id)}>
                Xóa
              </Button>
            </Popover.Body>
          </Popover>
        }
      >
        <Button variant="primary" onClick={() => setShowMenu((old) => !old)}>
          ...
        </Button>
      </OverlayTrigger>
    </div>
  );
}
