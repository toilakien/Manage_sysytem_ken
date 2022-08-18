import SidebarLayout from 'src/layouts/SidebarLayout';
import AuthGuard from 'src/utils/auth-guard/AuthGuard';
import GuestGuard from 'src/utils/auth-guard/GuestGuard';
import OverView from 'src/views/OverView';
import Department from 'src/views/pages/department';

const MainRouter = {
  path: '/',
  element: (
    <AuthGuard>
      <SidebarLayout />
    </AuthGuard>
  ),
  children: [
    {
      path:'/overview',
      element:<OverView/>
    },
    {
      path: '/department',
      element: <Department />
    }
  ]
};
export default MainRouter;
