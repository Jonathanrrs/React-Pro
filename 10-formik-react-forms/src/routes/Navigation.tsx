import { BrowserRouter} from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';

import logo from '../logo.svg';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={({isActive}) => isActive ? 'nav-active' : ''}>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/users" className={({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="formik-basic" element={<FormikBasicPage />} />
                    <Route path="formik-yup" element={<FormikYupPage />} />
                    <Route path="users" element={<h1>Users</h1>} />
                    <Route path="register" element={<RegisterPage />} />

                    <Route path="/*" element={<Navigate to="/register" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}