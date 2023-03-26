import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute() {
    const auth = JSON.parse(localStorage.getItem('token'));
    return auth ? (
        <>
            {' '}
            <div>
                <div className="content-container">
                    <Outlet />
                </div>
            </div>
        </>
    ) : (
        <Navigate to="/login1" />
    );
}

export default ProtectedRoute;
