import { all } from "redux-saga/effects";
import sanphamSaga from "./saga/sanpham";

export default function* rootSaga() {
  yield all([sanphamSaga()]);
}
