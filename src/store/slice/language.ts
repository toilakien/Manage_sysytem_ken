import { Languages } from './../../types/language';
import { dispatch } from 'src/store';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'src/utils/axios';
import { LanguageStateProps,Payload } from 'src/types/language';
export const QUESTIONS_URL = {
  getlist: `${process.env.REACT_APP_API_URL}/v1/operator/languages`,
  postList: `${process.env.REACT_APP_API_URL}/v1/operator/languages`,
  deleteList:(id:any)=>`${process.env.REACT_APP_API_URL}/v1/operator/languages/${id}`
};

const initialState: LanguageStateProps = {
  pageCount: 0,
  currentPage: 1,
  language: [],
  error: []
};

const slice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    renderLanguageListSuccess(state, action) {
      state.language = action.payload.data;
      state.currentPage = action.payload.current_page;
    },
    postLanguageListSuccess(state, action) {
      state.language = [ action.payload,...state.language];
    },
    deleteLanguageListSuccess(state, action) {
      state.language = state.language.filter(
        (language) => language.id !== action.payload.id
      );
    }
  }
});
export default slice.reducer;
export function renderLanguageList() {
  return async () => {
    const resp = await axios.get(QUESTIONS_URL.getlist);
    if (resp.status == 200) {
      dispatch(slice.actions.renderLanguageListSuccess(resp.data.success));
    }
  };
}
export function postLanguageList(params: Languages) {
  return async () => {
    const resp = await axios.post(QUESTIONS_URL.getlist, params);
    if (resp.status == 201) {
      dispatch(slice.actions.postLanguageListSuccess(resp.data.success));
    }
  };
}
export function deleteLanguageList(id: Payload) {
  return async () => {
    const resp = await axios.delete(QUESTIONS_URL.deleteList(id));
      dispatch(slice.actions.deleteLanguageListSuccess(resp.data.success));
  };
}
