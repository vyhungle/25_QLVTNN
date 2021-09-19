import express from "express";
const router = express.Router();

import SanPham from "../models/SanPham";

router.get("/get", async (req, res) => {
  try {
    const sanPham = await SanPham.find()
      .populate("NCC")
      .populate("NSX")
      .populate("TheLoai");

    if (sanPham) {
      return res.json({
        success: true,
        message: "Lấy sản phẩm thành công",
        values: {
          SanPham: sanPham.reverse(),
        },
      });
    }
  } catch (error) {
    return res.json({
      success: false,
      message: "Lấy sản phẩm thất bại",
      error: error.message,
    });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { TenSP, DonGia, SoLuong, NSX, NCC, TheLoai } = req.body;
    const newSP = new SanPham({
      TenSP,
      DonGia,
      SoLuong,
      NSX,
      NCC,
      TheLoai,
    });
    await newSP.save();
    const sp = await SanPham.findById(newSP._id)
      .populate("NCC")
      .populate("NSX")
      .populate("TheLoai");
    return res.json({
      success: true,
      message: "Thêm sản phẩm thành công",
      values: {
        SanPham: sp,
      },
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Thêm sản phẩm thất bại",
      error: error.message,
    });
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
    const { TenSP, DonGia, SoLuong, NSX, NCC, TheLoai } = req.body;
    const SP = await SanPham.findById(req.params.id);
    SP.TenSP = TenSP;
    SP.DonGia = DonGia;
    SP.SoLuong = SoLuong;
    SP.NSX = NSX;
    SP.NCC = NCC;
    SP.TheLoai = TheLoai;

    await SP.save();

    const sp = await SanPham.findById(SP._id)
      .populate("NCC")
      .populate("NSX")
      .populate("TheLoai");
    return res.json({
      success: true,
      message: "Sửa sản phẩm thành công",
      values: {
        SanPham: sp,
      },
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Sửa sản phẩm thất bại",
      error,
    });
  }
});

router.put("/editSL/:id", async (req, res) => {
  try {
    const { SoLuong } = req.body;
    const SP = await SanPham.findById(req.params.id);
    SP.SoLuong = parseInt(SP.SoLuong, 10) + parseInt(SoLuong, 10);

    await SP.save();

    const sp = await SanPham.findById(SP._id)
      .populate("NCC")
      .populate("NSX")
      .populate("TheLoai");
    return res.json({
      success: true,
      message: "Sửa sản phẩm thành công",
      values: {
        SanPham: sp,
      },
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Sửa sản phẩm thất bại",
      error,
    });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const SP = await SanPham.findById(req.params.id);
    await SanPham.findOneAndDelete({ _id: SP._id });

    return res.json({
      success: true,
      message: "Xóa sản phẩm thành công",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Xóa sản phẩm thất bại",
      error,
    });
  }
});

module.exports = router;
