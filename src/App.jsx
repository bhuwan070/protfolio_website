import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
      <ToastContainer />
    </Suspense>
  );
}
