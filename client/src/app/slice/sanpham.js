import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  list: [],
  NCC: [],
  NSX: [],
  TheLoai: [],
  isAdd: false,
  isUpdate: false,
  isDelete: false,
  filterList: [],
};

const sanpham = createSlice({
  name: "sanpham",
  initialState,
  reducers: {
    sanPhamPending: (state) => {
      state.isLoading = true;
    },
    sanPhamSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.list = payload.list;
    },
    sanPhamAddPending: (state) => {
      state.isAdd = true;
    },
    sanPhamAdd: (state, { payload }) => {
      state.isAdd = false;
      state.list.unshift(payload.data);
    },
    sanPhamDetetePending: (state) => {
      state.isDelete = true;
    },
    sanPhamDetete: (state, { payload }) => {
      state.isDelete = false;
      state.list = state.list.filter((x) => x._id !== payload._id);
    },
    sanPhamUpdatePending: (state) => {
      state.isUpdate = true;
    },
    sanPhamUpdate: (state, { payload }) => {
      state.isUpdate = false;
      const index = state.list.findIndex((x) => x._id === payload.data._id);
      state.list[index] = payload.data;
    },

    getNCC: (state, { payload }) => {
      state.NCC = payload.data;
      state.filterList = state.list.filter(
        (x) => x.NCC._id === state.NCC[0]._id
      );
    },

    getNSX: (state, { payload }) => {
      state.NSX = payload.data;
    },

    getTheLoai: (state, { payload }) => {
      state.TheLoai = payload.data;
    },

    clearFilterList: (state) => {
      state.filterList = [];
    },
    filterListSP: (state, { payload }) => {
      state.filterList = state.list.filter((x) => x.NCC._id === payload._id);
    },

    editSLPending: (state) => {},
    editSLSuccess: (state, { payload }) => {
      const index = state.list.find((x) => x._id === payload._id);
      if (index >= 0) {
        state.list[index].SoLuong += payload.SoLuong;
      }
    },
  },
});

export const {
  sanPhamAdd,
  sanPhamDetete,
  sanPhamPending,
  sanPhamSuccess,
  sanPhamUpdate,
  getNCC,
  getNSX,
  getTheLoai,
  sanPhamAddPending,
  sanPhamDetetePending,
  sanPhamUpdatePending,
  clearFilterList,
  filterListSP,
  editSLPending,
  editSLSuccess,
} = sanpham.actions;
export default sanpham.reducer;
