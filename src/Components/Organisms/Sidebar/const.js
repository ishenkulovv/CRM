import DashboardIcon from "../../../Assets/Icons/DashboardIcon"
import OrdersIcon from "../../../Assets/Icons/OrdersIcon"

export const MAIN_LIST = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    to: '/',
    icon: DashboardIcon
  },
  {
    id: 'orders',
    label: 'Orders',
    to: '/orders',
    icon: OrdersIcon
  },
  {
    id: 'products',
    label: 'Products',
    to: '/products',
    icon: DashboardIcon
  },
  {
    id: 'customers',
    label: 'Customers',
    to: '/customers',
    icon: DashboardIcon
  },
  {
    id: 'analytics',
    label: 'Analytics',
    to: '/analytics',
    icon: DashboardIcon
  },
  {
    id: 'marketing',
    label: 'Marketing',
    to: '/marketing',
    icon: DashboardIcon
  },
]

export const SALES_LIST = [
  {
    id: 'integrations',
    label: 'Integrations',
  },
  {
    id: 'my_store',
    label: 'My Store',
  },
  {
    id: 'discounts',
    label: 'Discounts',
  },
]

export const OTHER_LIST = [
  {
    id: 'settings',
    label: 'Settings',
  },
  {
    id: 'get_help',
    label: 'Get Help',
  },
]