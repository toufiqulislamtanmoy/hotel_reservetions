import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import HotelPayment from "../pages/hotelPayment/HotelPayment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hotel-payment",
        element: <HotelPayment />,
      },
    ],
  },
]);

export default router;
