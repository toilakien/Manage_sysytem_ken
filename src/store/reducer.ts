import { combineReducers } from "redux";
import departmentReducer from '../store/slice/department';
import snackbarReducer from "./slice/snackbar";
const rootReducer=combineReducers({
    department:departmentReducer,
    snackbar:snackbarReducer
})
export default rootReducer;