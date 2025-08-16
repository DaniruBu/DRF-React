import React from 'react'
import { routes } from '../router/index';
import {Routes, Route, Navigate} from "react-router-dom"

const AppRouter = () => {
    return (
        <div>
            <Routes>
                {routes.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
            </Routes>
        </div>
    );
};

export default AppRouter;