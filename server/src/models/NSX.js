import { model, Schema } from "mongoose";

const NSXSchema = new Schema({
  TenNSX: String,
  DiaChi: String,
  Email: String,
  Sdt: String,
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
});

module.exports = model("nsxs", NSXSchema);
