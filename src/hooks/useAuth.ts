// THIRD-PARTY
import { useContext } from 'react';
import JWTContext from 'src/contexts/JWTContext';

// PROJECT IMPORTS

const useAuth = () => {
  const context = useContext(JWTContext);

  if (!context) throw new Error('context must be use inside provider');

  return context;
};

export default useAuth;
