import { model, Schema } from "mongoose";

const TheLoaiSchema = new Schema({
  TenLoai: String,
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
});

module.exports = model("theloais", TheLoaiSchema);
