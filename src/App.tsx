import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import Routes from './Routers/index';
import { JWTProvider } from './contexts/JWTContext';
import CustomizedSnackbars from './components/Snackbar';
import { useSelector } from './store';
function App() {
  const severity=useSelector(state=>state.snackbar.severity);
  const actions=useSelector(state=>state.snackbar.actions)
  // console.log(severity,actions);
  
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <JWTProvider>
          <Routes />
        </JWTProvider>
          <CustomizedSnackbars actions={actions} severity={severity}/>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
