import { combineReducers } from 'redux';
import departmentReducer from '../store/slice/department';
import questionReducer from './slice/question';
import snackbarReducer from './slice/snackbar';
import languageReducer from './slice/language';
const rootReducer = combineReducers({
  department: departmentReducer,
  question: questionReducer,
  snackbar: snackbarReducer,
  language: languageReducer
});
export default rootReducer;
