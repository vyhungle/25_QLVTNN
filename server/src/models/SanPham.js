import { model, Schema } from "mongoose";

const SanPhamSchema = new Schema({
  TenSP: String,
  DonGia: String,
  SoLuong: String,
  TheLoai: {
    type: Schema.Types.ObjectId,
    ref: "theloais",
  },
  NSX: {
    type: Schema.Types.ObjectId,
    ref: "nsxs",
  },
  NCC: {
    type: Schema.Types.ObjectId,
    ref: "nccs",
  },
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
});

module.exports = model("SanPham", SanPhamSchema);
