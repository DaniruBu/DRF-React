import React from 'react'
import CardsPage from "../pages/CardsPage"
import CategoriesPage from "../pages/CategoriesPage"
import HomePage from "../pages/HomePage"
import CardByIdPage from "../pages/CardByIdPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

export const routes = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/cards',
        element: <CardsPage />,
    }, 
    {
        path: '/categories',
        element: <CategoriesPage />
    },
    {
        path: '/cards/:id',
        element: <CardByIdPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    }
]