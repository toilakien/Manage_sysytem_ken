import { dispatch } from 'src/store';
import { createSlice } from '@reduxjs/toolkit';
import { QuestionStateProps } from 'src/types/question';
import axios from 'src/utils/axios';
export const QUESTIONS_URL = `${process.env.REACT_APP_API_URL}/v1/operator/questions`;

const initialState: QuestionStateProps = {
  pageCount: 0,
  currentPage: 1,
  questions: [],
  error: [],
  total: 0
};

const slice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    getQuestionListSuccess(state, action) {
      state.questions = action.payload.data;
    }
  }
});
export default slice.reducer;
export function getQuestionList() {
  return async () => {
    const resp = await axios.get(`${QUESTIONS_URL}`);
    if (resp.status == 200) {
      dispatch(slice.actions.getQuestionListSuccess(resp.data.success));
    }
  };
}
