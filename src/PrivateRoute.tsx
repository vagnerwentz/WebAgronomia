import { Navigate } from 'react-router-dom';
import { useAuth } from './hook/AuthContext';

export function PrivateRoute({ children }: { children: JSX.Element }) {
    const { isAuthenticated } = useAuth();
    const token = localStorage.getItem('authToken');
    
    console.log("!token" + !token);
    console.log("isAuthenticated" + isAuthenticated());

    if (!token) {
        return <Navigate to="/login" />;
    }

    return children;
}
