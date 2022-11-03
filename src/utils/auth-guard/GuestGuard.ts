import { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useAuth from 'src/hooks/useAuth';

const GuestGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/overview', { replace: true });
    }
  }, [isLoggedIn, navigate]);
  return children;
};
export default GuestGuard;
