import { dispatch } from 'src/store';
import { createSlice } from '@reduxjs/toolkit';


interface SnackbarType{
    severity?:null|string,
    actions?:boolean,
} 

const initialState: SnackbarType = {
  severity:null,
  actions:false
};

const slice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackbarSuccess(state,action){
        state.severity=action.payload.severity;
        state.actions=action.payload.actions;
    }
  }
});
export default slice.reducer;
export const openSnackbar=()=>{
    const Payload={
        severity:"Success",
        actions:true,
    } 
   dispatch(slice.actions.openSnackbarSuccess(Payload))
}