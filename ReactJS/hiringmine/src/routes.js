import { createBrowserRouter } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import Theme from "./Pages/Theme";
import UserComponent from "./Pages/UserComponent";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/dashboard",
      Component: Dashboard,
      children: [
        { path: "settings", Component: Settings },
        { path: "theme", Component: Theme },
      ],
    },
    {
      path: "/user/:userName",
      element: <UserComponent />
    }
  ]);