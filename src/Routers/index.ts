import { useRoutes } from 'react-router-dom';
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';
export default function useThemes() {
  return useRoutes([MainRouter, AuthRouter]);
}
