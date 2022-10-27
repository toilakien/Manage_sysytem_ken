import SidebarLayout from 'src/layouts/SidebarLayout';
import AuthGuard from 'src/utils/auth-guard/AuthGuard';
import OverView from 'src/views/OverView';
import AccountSetting from 'src/views/pages/acountSetting';
import Department from 'src/views/pages/department';
import Product from 'src/views/pages/products';
import Categorys from 'src/views/pages/categorys';
import Feedbacks from 'src/views/pages/feedbacks';

const MainRouter = {
  path: '/',
  element: (
    <AuthGuard>
      <SidebarLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: '/overview',
      element: <OverView />
    },
    {
      path: '/department',
      element: <Department />
    },
    {
      path: '/acountSetting',
      element: <AccountSetting />
    },
    {
      path: '/product',
      element: <Product />
    },
    {
      path: '/feedbacks',
      element: <Feedbacks />
    },
    {
      path: '/categorys',
      element: <Categorys />
    },
  ]
};
export default MainRouter;
