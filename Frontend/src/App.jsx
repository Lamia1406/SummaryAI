import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import History from "./pages/history.jsx";
import Signup from "./pages/signup.jsx";
import Login from "./pages/login.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/summarize",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/history",
          element: <History />,
        },
      ],
    },
  ]);

  return (
    <>
    <RouterProvider router={router} />
        </>
    
  );
}
