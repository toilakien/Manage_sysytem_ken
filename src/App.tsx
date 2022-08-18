import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import Routes from './Routers/index';
import { JWTProvider } from './contexts/JWTContext';
function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <JWTProvider>
          <Routes />
        </JWTProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
