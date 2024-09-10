import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import SliderProducto from "./Routes/SliderProducto/SliderProducto.jsx";
import WallpaperPage from "./Routes/WallpaperPage.jsx";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "blogs/:id",  
        element: <SliderProducto/>
      },
      {
        path: "Wallpaper/:id",  
        element: <WallpaperPage/>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
