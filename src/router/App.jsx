import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../layouts/Layout";
import Courses from "../pages/Courses";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="courses" element={<Courses />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
