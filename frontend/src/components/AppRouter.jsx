import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import CardsPage from '../pages/CardsPage'
import CategoriesPage from '../pages/CategoriesPage'
import HomePage from '../pages/HomePage'
import CardByIdPage from '../pages/CardByIdPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import PrivateRoute from '../router/privateRoute'
import PublicRoute from '../router/PublicRoute'

const AppRouter = () => (
  <Routes>
    {/* публичные роуты (доступны всем) */}
    <Route path="/" element={<HomePage />} />
    <Route path="/categories" element={<CategoriesPage />} />
    
    {/* роуты только для незалогиненных */}
    <Route path="/login" element={<PublicRoute />}>
      <Route index element={<LoginPage />} />
    </Route>
    <Route path="/register" element={<PublicRoute />}>
      <Route index element={<RegisterPage />} />
    </Route>
    
    {/* приватные роуты (только для залогиненных) */}
    <Route path="/cards" element={<PrivateRoute />}>
      <Route index element={<CardsPage />} />
      <Route path=":id" element={<CardByIdPage />} />
    </Route>
    
    {/* редирект */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
)

export default AppRouter;
