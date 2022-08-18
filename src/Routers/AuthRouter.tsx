import GuestGuard from 'src/utils/auth-guard/GuestGuard';
import Login from 'src/views/pages/authentication/auth/Login';

const AuthRouter = {
  path: '/',
  element: (
    <GuestGuard>
      <Login />
    </GuestGuard>
  ),
  children: [
    {
      path: '/login',
      element: <Login />
    }
  ]
};
export default AuthRouter;
