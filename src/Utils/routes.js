import Dashboard from './../Pages/Dashboard'
import Users from './../Pages/users'
import Products from './../Pages/Products'
import Productdetails from './../Pages/Productdetails'
import DashboardLayout from '../Pages/dashboard-layout'

export const router = [
  {
    path: '/',
    element: (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    ),
  },
  {
    path: '/products',
    element: (
      <DashboardLayout>
        <Products />
      </DashboardLayout>
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
