import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CourseAnnouncement from "../components/Course/CourseAnnouncement";
import CourseFaq from "../components/Course/CourseFaq";
import CourseReviews from "../components/Course/CourseReviews";
import Layout from "../layouts/Layout";
import Course, { loaderCourse } from "../pages/Course";
import Courses, { loaderCourses } from "../pages/Courses";
import Home from "../pages/Home";
import CourseOverview from "../components/Course/CourseOverview";
import CourseCurriculum from "../components/Course/CourseCurriculum";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route loader={loaderCourses} path="courses" element={<Courses />} />
        <Route loader={loaderCourse} path="course/:id" element={<Course />}>
          <Route path="overview" element={<CourseOverview />} />
          <Route path="curriculum" element={<CourseCurriculum />} />
          <Route path="faq" element={<CourseFaq />} />
          <Route path="announcement" element={<CourseAnnouncement />} />
          <Route path="reviews" element={<CourseReviews />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
