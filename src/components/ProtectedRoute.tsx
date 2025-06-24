import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../hooks/useAppSelector';

interface ProtectedRouteProps {
  children: ReactNode;
  roles: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, roles }) => {
  const userRoles = useAppSelector(state => state.auth.roles);
  const location = useLocation();

  const hasAccess = roles.some(role => userRoles.includes(role));

  return hasAccess ? (
    <>{children}</>
  ) : (
    <Navigate to="/no-permission" state={{ from: location }} replace />
  );
};