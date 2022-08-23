import { combineReducers } from "redux";
import departmentReducer from '../store/slice/department';
import questionReducer from "./slice/question";
const rootReducer=combineReducers({
    department:departmentReducer,
    question:questionReducer
})
export default rootReducer;