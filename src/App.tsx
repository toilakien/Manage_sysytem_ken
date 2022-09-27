import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import Routes from './Routers/index';
import { JWTProvider } from './contexts/JWTContext';
import CustomizedSnackbars from './components/Snackbar';
import { useSelector } from './store';

function App() {
  
  const actions = useSelector((state) => state?.snackbar?.snackbar?.actions);
  const severity = useSelector((state) => state?.snackbar?.snackbar?.severity);
  const content = useSelector((state) => state?.snackbar?.snackbar?.content);
  const color = useSelector((state) => state?.snackbar?.snackbar?.color);
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <JWTProvider>
          <Routes />
        </JWTProvider>
        
        { actions != false && severity != '' ? (
          <CustomizedSnackbars
            actions={actions}
            severity={severity}
            content={content}
            color={color}
          />
        ) : (
          ''
        )}
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
