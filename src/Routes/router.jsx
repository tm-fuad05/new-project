import Home from "../pages/Home";
import Root from "../pages/Root";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Root></Root>
      </>
    ),
    errorElement: <div>Error Page</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
