import { createBrowserRouter } from "react-router-dom";
import MainLayaout from "../Layout/MainLayaout";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayaout></MainLayaout>,
  },
]);

export default myCreateRouter;
