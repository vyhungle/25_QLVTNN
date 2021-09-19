import axios from "axios";
const api = "http://localhost:4000/";

export const getSP = () => {
  const data = axios.get(`${api}api/sanpham/get`);
  return data;
};

export const addSPAPI = (values) => {
  const data = axios.post(`${api}api/sanpham/add`, values);
  return data;
};

export const editSPAPI = (payload) => {
  const data = axios.put(
    `${api}api/sanpham/edit/${payload._id}`,
    payload.values
  );
  return data;
};

export const editSLSPAPI = (payload) => {
  const data = axios.put(
    `${api}api/sanpham/editSL/${payload._id}`,
    payload.SoLuong
  );
  return data;
};

export const deleteSPAPI = (_id) => {
  const data = axios.delete(`${api}api/sanpham/delete/${_id}`);
  return data;
};

export const getTheLoaiAPI = () => {
  const data = axios.get(`${api}api/test/theloai/get`);
  return data;
};

export const getNCCAPI = () => {
  const data = axios.get(`${api}api/test/ncc/get`);
  return data;
};

export const getNSXAPi = () => {
  const data = axios.get(`${api}api/test/nsx/get`);
  return data;
};
