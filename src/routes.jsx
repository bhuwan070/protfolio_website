import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Priorities = lazy(() => import("./pages/Priorities"));
const Inmedia = lazy(() => import("./pages/Inmedia"));
const Contact = lazy(() => import("./pages/Contacts"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "priorities", element: <Priorities /> },
      { path: "inmedia", element: <Inmedia /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);


export default router;