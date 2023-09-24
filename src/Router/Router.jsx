import { createBrowserRouter } from "react-router-dom";
import MainLayaout from "../Layout/MainLayaout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayaout></MainLayaout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default myCreateRouter;
