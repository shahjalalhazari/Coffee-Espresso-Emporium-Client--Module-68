import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./App.jsx";
import AddCoffee from "./components/addCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: () => fetch("http://localhost:8080/coffee"),
  },
  {
    path: "/add-coffee",
    element: <AddCoffee />,
  },
  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`http://localhost:8080/coffee/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
