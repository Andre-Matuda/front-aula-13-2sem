import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Home from "./routes/Home/index.tsx";
import Users from "./routes/Users/index.tsx";
import Error from "./routes/Error/index.tsx";
import Produtos from "./routes/Produtos/index.tsx";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Alunos from "./routes/Alunos/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/users", element: <Users /> },
      { path: "/produtos", element: <Produtos /> },
      {path: "/alunos", element: <Alunos/>}
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
