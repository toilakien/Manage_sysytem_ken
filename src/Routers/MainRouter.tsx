import SidebarLayout from 'src/layouts/SidebarLayout';
import AuthGuard from 'src/utils/auth-guard/AuthGuard';
import GuestGuard from 'src/utils/auth-guard/GuestGuard';
import OverView from 'src/views/OverView';
import AccountSetting from 'src/views/pages/acountSetting';
import Department from 'src/views/pages/department';
import QuestionPage from 'src/views/pages/question';

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
    },
    {
      path:'/acountSetting',
      element:<AccountSetting/>
    },
    {
      path:"/questions",
      element:<QuestionPage/>
    }
  ]
};
export default MainRouter;
