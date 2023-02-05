import Dashboard from './../Pages/Dashboard'
import Users from './../Pages/users'
import Products from './../Pages/Products'
import Productdetails from './../Pages/Productdetails'
import DashboardLayout from './../Pages/dashboard-layout'
import { Signup } from '../Pages/Auth/Signup'
import { Login } from '../Pages/Auth/Login'
import { LandingPage } from '../Pages/LandingPage';
import { AuthGuard } from '../Components/auth-guard'

export const router = [
  
  { path: '/',element: ( <LandingPage />)},
  { path: '/signup', element: <Signup /> },
  { path: '/login', element: <Login /> },
 
  {
    path: '/products',
    element: (
      <AuthGuard module={'products'}>



      <DashboardLayout>
        <Products />
        </DashboardLayout>
        </AuthGuard>
    ),
  },
  {
    path: '/products/:productId',
    element: (
      <DashboardLayout>
        <Productdetails />
      </DashboardLayout>
    ),
  },

  {
    path: '/',
    element: (
      <DashboardLayout>
        <Products />
      </DashboardLayout>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    ),
  },

  {
    path: '/users',
    element: (
      <DashboardLayout>
        <Users />
      </DashboardLayout>
    ),
  },
]
