import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../layouts/Layout";
import Courses from "../pages/Courses";
import Home from "../pages/Home";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
