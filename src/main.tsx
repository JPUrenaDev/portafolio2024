import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Root } from "./root/Root.jsx";
import { NotesProject } from "./pages/NotesProject.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },

  {
    path: "*",
    element: <h1>Not found</h1>,
  },

  {
    path: "NoteApp",
    element: <NotesProject />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
