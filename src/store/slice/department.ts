import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { DepartmentStateProps, Payload } from 'src/types/department';
import { dispatch } from '..';

export const DEPARTMENT_URL = {
  getDepartmen: (page: number) =>
    `${process.env.REACT_APP_API_URL}/v1/customer/${page}`,
  getAll: `${process.env.REACT_APP_API_URL}/v1/customer`,
  postDepartment: `${process.env.REACT_APP_API_URL}/v1/customer`,
  putDepartment: (id: any) =>
    `${process.env.REACT_APP_API_URL}/v1/customer/${id}`,
  delDepartment: (id: any) =>
    `${process.env.REACT_APP_API_URL}/v1/customer/${id}`,
  getDetailDepartment: (id: string) =>
    `${process.env.REACT_APP_API_URL}/v1/customer/${id}`,
  filterDepartment: (active: any) =>
    `${process.env.REACT_APP_API_URL}/v1/customer/fil/${active}`
};

const initialState: DepartmentStateProps = {
  pageCount: 0,
  currentPage: 1,
  department: [],
  error: []
};

const slice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    getDepartmentListSuccess(state, action) {
      state.department = action.payload.customers;
      state.currentPage = action.payload.currentPage;
      state.pageCount = action.payload.pageCount;
    },
    postDepartmentSuccess(state, action) {
      state.department.unshift(action.payload);
    },
    deleteDepartmentSuccess(state, action) {
      state.department = state.department.filter(
        (e) => e._id != action.payload._id
      );
    },
    putDepartmentSuccess(state, action) {
      state.department = state.department.map((e) => {
        if (e._id == action.payload._id) {
          return action.payload;
        }
        return e;
      });
    },
    filterDepartmentListSuccess(state, action) {
      state.department = [...action.payload];
    }
  }
});
export default slice.reducer;
export const {
  getDepartmentListSuccess,
  postDepartmentSuccess,
  deleteDepartmentSuccess
} = slice.actions;

export function getDepartmentList(page: any) {
  return async () => {
    try {
      const resp = await axios.get(`${DEPARTMENT_URL.getDepartmen(page)}`);
      console.log(resp.data);

      dispatch(slice.actions.getDepartmentListSuccess(resp.data));
    } catch (error) {}
  };
}
export function postDepartmentList(params: Payload) {
  return async () => {
    try {
      const resp = await axios.post(`${DEPARTMENT_URL.postDepartment}`, params);

      dispatch(slice.actions.postDepartmentSuccess(resp.data.customers));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteDepartmentList(id: Payload) {
  return async () => {
    try {
      const resp = await axios.delete(`${DEPARTMENT_URL.delDepartment(id)}`);
      dispatch(slice.actions.deleteDepartmentSuccess(resp.data.customers));
    } catch (error) {
      console.log(error);
    }
  };
}
export function putDepartmentList({ _id, params }: Payload) {
  return async () => {
    const resp = await axios.put(
      `${DEPARTMENT_URL.putDepartment(_id)}`,
      params
    );

    dispatch(slice.actions.putDepartmentSuccess(resp.data.customers));
  };
}
export function filterDepartmentList(active: any) {
  return async () => {
    if (active !== 'all') {
      const resp = await axios.get(
        `${DEPARTMENT_URL.filterDepartment(active)}`
      );
      dispatch(slice.actions.filterDepartmentListSuccess(resp.data.customers));
    } else if (active === 'all') {
      const resp = await axios.get(`${DEPARTMENT_URL.getAll}`);
      dispatch(slice.actions.filterDepartmentListSuccess(resp.data.customers));
    }
  };
}
