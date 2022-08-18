import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';

ReactDOM.render(
  <Provider store={store}>
    <SidebarProvider>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </SidebarProvider>
  </Provider>,
  document.getElementById('root')
);

