import { dispatch } from 'src/store';
import { createSlice } from '@reduxjs/toolkit';
interface Payload {
  actions?: boolean;
  severity?: string | null;
  content?: string | null;
  color?: string | null;
}
interface StateProps {
  snackbar: Payload;
}
const initialState: StateProps = {
  snackbar: {
    actions: false,
    severity: '',
    content: ''
  }
};
const slice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    snackbarListSuccess(state, action) {
      state.snackbar = action.payload;
    },
    CloseSnackbarListSuccess(state, action) {
      state.snackbar.actions = action.payload;
    }
  }
});
export default slice.reducer;

export async function snackbarList(payload: Payload) {
  await dispatch(slice.actions.snackbarListSuccess(payload));
}
export function CloseSnackbarList(payload: any) {
  return dispatch(slice.actions.CloseSnackbarListSuccess(payload));
}
