import { Navigate } from "react-router-dom";

export function AuthGuard({ children, module }) {
    const modules = ['dashboard', 'products' , 'guest' ];

    if(!modules.includes(module))return <Navigate to={'/login'}/>
    return children
}