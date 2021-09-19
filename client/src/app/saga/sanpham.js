import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  addSPAPI,
  deleteSPAPI,
  editSLSPAPI,
  editSPAPI,
  getNCCAPI,
  getNSXAPi,
  getSP,
  getTheLoaiAPI,
} from "../../api";
import {
  editSLPending,
  editSLSuccess,
  getNCC,
  getNSX,
  getTheLoai,
  sanPhamAdd,
  sanPhamAddPending,
  sanPhamDetete,
  sanPhamDetetePending,
  sanPhamPending,
  sanPhamSuccess,
  sanPhamUpdate,
  sanPhamUpdatePending,
} from "../slice/sanpham";

function* getSanPham() {
  yield put({ type: sanPhamPending.type });

  const { data } = yield call(getSP);
  if (data.success) {
    yield put({
      type: sanPhamSuccess.type,
      payload: { list: data.values.SanPham },
    });
  }
}

function* getAllData() {
  const ncc = yield call(getNCCAPI);
  const nsx = yield call(getNSXAPi);
  const theloai = yield call(getTheLoaiAPI);

  if (ncc.data.success) {
    yield put({ type: getNCC.type, payload: { data: ncc.data.values.NCC } });
  }
  if (nsx.data.success) {
    yield put({ type: getNSX.type, payload: { data: nsx.data.values.NSX } });
  }
  if (theloai.data.success) {
    yield put({
      type: getTheLoai.type,
      payload: { data: theloai.data.values.TheLoai },
    });
  }
}

function* addSanPhamSaga(action) {
  const { payload } = action;
  const { data } = yield call(addSPAPI, payload.values);
  if (data.success) {
    yield put({
      type: sanPhamAdd.type,
      payload: { data: data.values.SanPham },
    });
  }
}

function* editSanPhamSaga(action) {
  const { payload } = action;
  const { data } = yield call(editSPAPI, payload);
  console.log(data);
  if (data.success) {
    yield put({
      type: sanPhamUpdate.type,
      payload: { data: data.values.SanPham },
    });
  }
}

function* editSLSanPhamSaga(action) {
  const { payload } = action;
  const { data } = yield call(editSLSPAPI, payload);
  console.log(payload, data);
  if (data.success) {
    yield put({
      type: editSLSuccess.type,
      payload: { SoLuong: payload.SoLuong.SoLuong, _id: payload._id },
    });
    payload.handleShowModal();
  }
}

function* deleteSanPhamSaga(action) {
  const { payload } = action;
  const { data } = yield call(deleteSPAPI, payload._id);
  if (data.success) {
    yield put({
      type: sanPhamDetete.type,
      payload: { _id: payload._id },
    });
  }
}

function* workerSanPhamSaga() {
  yield takeLatest(sanPhamAddPending.type, addSanPhamSaga);
  yield takeLatest(sanPhamUpdatePending.type, editSanPhamSaga);
  yield takeLatest(sanPhamDetetePending.type, deleteSanPhamSaga);
  yield takeLatest(editSLPending.type, editSLSanPhamSaga);
}

export default function* SanPhamSaga() {
  console.log("san pham saga active");
  yield all([getSanPham(), getAllData(), workerSanPhamSaga()]);
}
