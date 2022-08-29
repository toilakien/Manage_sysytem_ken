import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { DepartmentStateProps, Payload } from 'src/types/department';
import { dispatch } from '..';

export const DEPARTMENT_URL = {
  getDepartmen: `${process.env.REACT_APP_API_URL}/v1/operator/department`,
  getAll: `${process.env.REACT_APP_API_URL}/v1/department/all`,
  postDepartment: `${process.env.REACT_APP_API_URL}/v1/operator/department`,
  putDepartment: (id: any) =>
    `${process.env.REACT_APP_API_URL}/v1/operator/department/${id}`,
  delDepartment: (id: any) =>
    `${process.env.REACT_APP_API_URL}/v1/operator/department/${id}`,
  getDetailDepartment: (id: string) =>
    `${process.env.REACT_APP_API_URL}/v1/operator/department/${id}`
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
      state.department = action.payload.data;
      state.pageCount = action.payload.last_page;
      state.currentPage = action.payload.current_page;
    },
    postDepartmentSuccess(state, action) {
      console.log(action.payload);
      state.department.unshift(action.payload);
    },
    deleteDepartmentSuccess(state, action) {
      state.department = state.department.filter(
        (e) => e.id != action.payload.id
      );
    },
    putDepartmentSuccess(state, action) {
      state.department = state.department.map((e) => {
        if (e.id == action.payload.id) {
          return action.payload;
        }
        return e;
      });
    },
    filterDepartmentListSuccess(state, action) {
      const newState = state.department.filter(
        (e) => e.status == action.payload
      );
      state.department = [...newState];
    }
  }
});
export default slice.reducer;
export const {
  getDepartmentListSuccess,
  postDepartmentSuccess,
  deleteDepartmentSuccess
} = slice.actions;

export function getDepartmentList() {
  return async () => {
    try {
      const resp = await axios.get(`${DEPARTMENT_URL.getDepartmen}`);
      dispatch(slice.actions.getDepartmentListSuccess(resp.data.success));
    } catch (error) {}
  };
}
export function postDepartmentList(payload: any) {
  return async () => {
    try {
      const resp = await axios.post(
        `${DEPARTMENT_URL.postDepartment}`,
        payload
      );
      dispatch(slice.actions.postDepartmentSuccess(resp.data.success));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteDepartmentList(id: any) {
  return async () => {
    try {
      const resp = await axios.delete(`${DEPARTMENT_URL.delDepartment(id)}`);

      dispatch(slice.actions.deleteDepartmentSuccess(resp.data.success));
    } catch (error) {
      console.log(error);
    }
  };
}
export function putDepartmentList({id,params}:any) {
  return async () => {
    const resp = await axios.put(`${DEPARTMENT_URL.putDepartment(id)}`, params);
    console.log("edit");
    dispatch(slice.actions.putDepartmentSuccess(resp.data.success));
  };
}
export function filterDepartmentList(status: any) {
  return async () => {
    await dispatch(slice.actions.filterDepartmentListSuccess(status));
  };
}
