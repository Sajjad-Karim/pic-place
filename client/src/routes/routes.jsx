import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import SellerDashboard from "../pages/seller-dashboard/SellerDashboard";
import BuyerDashboard from "../pages/buyer-dashboead/BuyerDashboard";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/seller/profile",
        element: <SellerDashboard />,
      },
      {
        path: "/buyer/dashboard",
        element: <BuyerDashboard />,
      },
    ],
  },
]);
