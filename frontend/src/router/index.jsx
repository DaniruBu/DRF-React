import React from 'react'
import CardsPage from "../pages/CardsPage"
import CategoriesPage from "../pages/CategoriesPage"
import HomePage from "../pages/HomePage"

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
]