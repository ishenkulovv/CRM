import Briefcase from "../../../assets/icons/Briefcase";
import Chart from "../../../assets/icons/Chart";
import Dashboard from "../../../assets/icons/DashBoard";
import Shopping_cart from "../../../assets/icons/Shopping_cart";
import User from "../../../assets/icons/User";

export const MAIN_LIST = [
    {
        id: "dashboard",
        label: "Dashboard",
        icon: Dashboard,
    },
    {
        id: "orders",
        label: "Orders", 
    },
    {
        id: "products",
        label: "Products",
        icon: Briefcase,
    },
    {
        id: "customers",
        label: "Customers",
        icon: User,
    },
    {
        id: "analytics",
        label: "Analytics",
        icon: Chart,
    },
    {
        id: "marketing",
        label: "Marketing",
        icon: Shopping_cart,
    },
];

export const SALES_LIST = [
    {
        id: "integration",
        label: "Integrations",
    },
    {
        id: "my_store",
        label: "My Store",
    },
    {
        id: "discounts",
        label: "Discounts",
    },
];

export const OTHER_LIST = [
    {
        id: "settings",
        label: "Settings",
    },
    {
        id: "get_help",
        label: "Get Help",
    },
];
