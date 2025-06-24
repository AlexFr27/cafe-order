import React from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { HomePage } from '../pages/HomePage';
import { MenuPage } from '../pages/MenuPage';
import { OrdersPage } from '../pages/OrdersPage';
import { BasketPage } from '../pages/BasketPage';
import { StaffPage } from '../pages/StaffPage';
import { NoPermissionPage } from '../pages/NoPermissionPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { OrderPage } from '../pages/OrderPage';

export const AppRoutes: React.FC = () => {
  const roles = useAppSelector(state => state.auth.roles);
  const isStaff = roles.includes('staff');
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.MENU} element={<MenuPage />} />
      <Route path={ROUTES.BASKET} element={<BasketPage />} />
      <Route path={ROUTES.ORDER} element={<OrderPage />} />
      <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
      <Route path={ROUTES.STAFF} element={<ProtectedRoute roles={['staff']}> <StaffPage /> </ProtectedRoute>} />
      <Route path={ROUTES.NO_PERMISSION} element={<NoPermissionPage />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};