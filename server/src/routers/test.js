import express from "express";
const router = express.Router();

import NCC from "../models/NCC";
import NSX from "../models/NSX";
import TheLoai from "../models/TheLoai";

router.post("/ncc", async (req, res) => {
  const { Sdt, Email, DiaChi, TenNCC } = req.body;
  const newNCC = new NCC({
    Sdt,
    Email,
    DiaChi,
    TenNCC,
  });
  await newNCC.save();

  return res.json({
    success: true,
    message: "Insert thành công",
    values: {
      NCC: newNCC,
    },
  });
});

router.get("/ncc/get", async (req, res) => {
  const ncc = await NCC.find();
  if (ncc) {
    return res.json({
      success: true,
      message: "get ncc thành công",
      values: {
        NCC: ncc,
      },
    });
  }
});

router.post("/nsx", async (req, res) => {
  const { Sdt, Email, DiaChi, TenNCC } = req.body;
  const newNSX = new NSX({
    Sdt,
    Email,
    DiaChi,
    TenNCC,
  });
  await newNSX.save();

  return res.json({
    success: true,
    message: "Insert thành công",
    values: {
      NSX: newNSX,
    },
  });
});

router.get("/nsx/get", async (req, res) => {
  const nsx = await NSX.find();
  if (nsx) {
    return res.json({
      success: true,
      message: "get nsx thành công",
      values: {
        NSX: nsx,
      },
    });
  }
});

router.post("/theloai", async (req, res) => {
  const { TenLoai } = req.body;
  const newTL = new TheLoai({
    TenLoai,
  });
  await newTL.save();

  return res.json({
    success: true,
    message: "Insert thành công",
    values: {
      TheLoai: newTL,
    },
  });
});

router.get("/theloai/get", async (req, res) => {
  const theloai = await TheLoai.find();
  if (theloai) {
    return res.json({
      success: true,
      message: "get theloai thành công",
      values: {
        TheLoai: theloai,
      },
    });
  }
});

module.exports = router;
