import { combineReducers } from 'redux';
import departmentReducer from '../store/slice/department';
import snackbarReducer from './slice/snackbar';
import categoryReducer from './slice/category';
const rootReducer = combineReducers({
  department: departmentReducer,
  snackbar: snackbarReducer,
  category: categoryReducer
});
export default rootReducer;
