import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import { dispatch } from '..';
import { CategoryStateProps } from 'src/types/category';

export const CATEGORY_URL = {
  getAll: `${process.env.REACT_APP_API_URL}/v1/category`,
  postCategory: `${process.env.REACT_APP_API_URL}/v1/category`,
  putCategory: (id: any) =>
    `${process.env.REACT_APP_API_URL}/v1/category/${id}`,
  delCategory: (id: any) =>
    `${process.env.REACT_APP_API_URL}/v1/category/${id}`,
  getDetailCategory: (id: string) =>
    `${process.env.REACT_APP_API_URL}/v1/category/${id}`,
  filterCategory: (active: any) =>
    `${process.env.REACT_APP_API_URL}/v1/category/fil/${active}`
};

const initialState: CategoryStateProps = {
  pageCount: 0,
  currentPage: 1,
  category: [],
  error: []
};

const slice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getCategoryListSuccess(state, action) {
      state.category = action.payload;
    },
    postCategorySuccess(state, action) {
      state.category.unshift(action.payload);
    },
    deleteCategorySuccess(state, action) {
      state.category = state.category.filter(
        (e) => e._id != action.payload._id
      );
    },
    putCategorySuccess(state, action) {
      state.category = state.category.map((e) => {
        if (e._id == action.payload._id) {
          return action.payload;
        }
        return e;
      });
    },
    filterCategoryListSuccess(state, action) {
      state.category = [...action.payload];
    }
  }
});
export default slice.reducer;
export const {
  getCategoryListSuccess,
  postCategorySuccess,
  deleteCategorySuccess
} = slice.actions;

export function getcategoryList() {
  return async () => {
    try {
      const resp = await axios.get(`${CATEGORY_URL.getAll}`);

      dispatch(slice.actions.getCategoryListSuccess(resp.data.categorys));
    } catch (error) {}
  };
}
export function postcategoryList(params: any) {
  return async () => {
    try {
      const resp = await axios.post(`${CATEGORY_URL.postCategory}`, params);

      dispatch(slice.actions.postCategorySuccess(resp.data.categorys));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deletecategoryList(id: any) {
  return async () => {
    try {
      const resp = await axios.delete(`${CATEGORY_URL.delCategory(id)}`);
      dispatch(slice.actions.deleteCategorySuccess(resp.data.categorys));
    } catch (error) {
      console.log(error);
    }
  };
}
export function putcategoryList({ _id, params }: any) {
  return async () => {
    const resp = await axios.put(`${CATEGORY_URL.putCategory(_id)}`, params);

    dispatch(slice.actions.putCategorySuccess(resp.data.categorys));
  };
}
export function filtercategoryList(active: any) {
  return async () => {
    if (active !== 'all') {
      const resp = await axios.get(`${CATEGORY_URL.filterCategory(active)}`);
      dispatch(slice.actions.filterCategoryListSuccess(resp.data.categorys));
    } else if (active === 'all') {
      const resp = await axios.get(`${CATEGORY_URL.getAll}`);
      dispatch(slice.actions.filterCategoryListSuccess(resp.data.categorys));
    }
  };
}
