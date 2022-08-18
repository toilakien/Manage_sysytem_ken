import { combineReducers } from "redux";
import departmentReducer from '../store/slice/department';
const rootReducer=combineReducers({
    department:departmentReducer,
})
export default rootReducer;