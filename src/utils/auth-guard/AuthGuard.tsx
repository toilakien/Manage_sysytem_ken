// THIRD-PARTY
import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import useAuth from 'src/hooks/useAuth';

const AuthGuard = ({ children }: any) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return children;
};

export default AuthGuard;
