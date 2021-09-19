import { model, Schema } from "mongoose";

const NCCSchema = new Schema({
  TenNCC: String,
  DiaChi: String,
  Email: String,
  Sdt: String,
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
});

module.exports = model("nccs", NCCSchema);
