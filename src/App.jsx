import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Shop from "./pages/Shop";
import Error404 from "./components/Error404";
import About from "./pages/About";
let router = createBrowserRouter(
  createRoutesFromChildren(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
      <Route path="*" element={<Error404 />}></Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
