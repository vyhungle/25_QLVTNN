import express from "express";
import cors from "cors";
import http from "http";

import { ConnectionMongoDB } from "./config/mongodb";
import SanPhamRouter from "./routers/sanPham";
import testRouter from './routers/test'

require("dotenv").config();
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.set("json spaces", 2);

//Router
app.use("/api/sanpham", SanPhamRouter);
app.use("/api/test", testRouter);

//Connect db
ConnectionMongoDB();

server.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});
