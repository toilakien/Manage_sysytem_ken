import { combineReducers } from "redux";
import departmentReducer from '../store/slice/department';
import questionReducer from "./slice/question";
import snackbarReducer from "./slice/snackbar";
const rootReducer=combineReducers({
    department:departmentReducer,
    question:questionReducer,
    snackbar:snackbarReducer,
})
export default rootReducer;