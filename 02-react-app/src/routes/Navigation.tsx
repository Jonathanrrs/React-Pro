import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from './routes';
import logo from '../logo.svg';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        {
                            routes.map(route => (
                                <li key={route.to}>
                                    <NavLink to={route.to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{route.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map(route => (
                            <Route key={route.to} path={route.path} element={<route.Component />} />
                        ))
                    }
                    {/* para que tome una ruta ya establecida */}
                    <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}
