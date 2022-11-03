import { combineReducers } from 'redux';
import departmentReducer from '../store/slice/department';
import snackbarReducer from './slice/snackbar';
import categoryReducer from './slice/category';
import administratorReducer from './slice/administrator';
const rootReducer = combineReducers({
  department: departmentReducer,
  snackbar: snackbarReducer,
  category: categoryReducer,
  administrator: administratorReducer
});
export default rootReducer;
