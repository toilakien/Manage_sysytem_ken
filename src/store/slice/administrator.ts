import { AdministratorStateProps } from './../../types/administrator';
import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { dispatch } from '..';

export const administrator_URL = {
  getAll: `${process.env.REACT_APP_API_URL}/v1/administrator`,
  postAdministrator: `${process.env.REACT_APP_API_URL}/v1/administrator`,
  putAdministrator: (id: any) =>
    `${process.env.REACT_APP_API_URL}/v1/administrator/${id}`,
  delAdministrator: (id: any) =>
    `${process.env.REACT_APP_API_URL}/v1/administrator/${id}`
};

const initialState: AdministratorStateProps = {
  pageCount: 0,
  currentPage: 1,
  administrator: [],
  error: []
};

const slice = createSlice({
  name: 'administrator',
  initialState,
  reducers: {
    getAdministratorListSuccess(state, action) {
      state.administrator = action.payload.administrator;
    },
    postAdministratorSuccess(state, action) {
      state.administrator.unshift(action.payload);
    },
    deleteAdministratorSuccess(state, action) {
      state.administrator = state.administrator.filter(
        (e) => e._id != action.payload._id
      );
    },
    putadministratorSuccess(state, action) {
      state.administrator = state.administrator.map((e) => {
        if (e._id == action.payload._id) {
          return action.payload;
        }
        return e;
      });
    }
  }
});
export default slice.reducer;
export const {
  getAdministratorListSuccess,
  postAdministratorSuccess,
  deleteAdministratorSuccess
} = slice.actions;

export function getadministratorList() {
  return async () => {
    try {
      const resp = await axios.get(`${administrator_URL.getAll}`);

      dispatch(slice.actions.getAdministratorListSuccess(resp.data));
    } catch (error) {}
  };
}
export function postadministratorList(params: any) {
  return async () => {
    try {
      const resp = await axios.post(
        `${administrator_URL.postAdministrator}`,
        params
      );

      dispatch(
        slice.actions.postAdministratorSuccess(resp.data.administrators)
      );
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteadministratorList(id: any) {
  return async () => {
    try {
      const resp = await axios.delete(
        `${administrator_URL.delAdministrator(id)}`
      );
      dispatch(
        slice.actions.deleteAdministratorSuccess(resp.data.administrators)
      );
    } catch (error) {
      console.log(error);
    }
  };
}
export function putadministratorList({ _id, params }: any) {
  return async () => {
    const resp = await axios.put(
      `${administrator_URL.putAdministrator(_id)}`,
      params
    );

    dispatch(slice.actions.putadministratorSuccess(resp.data.administrators));
  };
}
