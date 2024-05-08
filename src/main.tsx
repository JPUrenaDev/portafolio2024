import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Header } from "./ui/Header.jsx";
import { createRoot } from "react-dom/client";
import { Root } from "./root/Root.jsx";
import { NotesProject } from "./pages/NotesProject.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

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
