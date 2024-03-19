import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ShopList from "./components/ShopList";
import Home from "./components/Home";
import Shop from "./components/Shop";
export default function App() {
  let browserRouter = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/product",
      element: <ShopList />,
    },
    {
      path: "/item",
      element: <Shop />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={browserRouter}></RouterProvider>
    </div>
  );
}
