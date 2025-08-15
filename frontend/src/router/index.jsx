import CardsPage from "../pages/CardsPage"
import CategoriesPage from "../pages/CategoriesPage"

export const routes = [
    {
        path: '/cards',
        element: <CardsPage />,
    }, 
    {
        path: '/categories',
        element: <CategoriesPage />
    }
]