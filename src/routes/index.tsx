import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        { path: "*", element: <p>There is no page</p> },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_APP_BASE_NAME,
  }
);
