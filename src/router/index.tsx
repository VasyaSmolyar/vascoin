import Landing from "pages/landing";
import { mainRoute } from "./constants";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: mainRoute,
      element: <Landing />,
    },
]);
