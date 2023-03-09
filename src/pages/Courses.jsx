import { redirect, useLoaderData } from "react-router-dom";
import CoursesContent from "../components/Courses/CoursesContent";

export const loaderCourses = (params) => {
  const { searchParams } = new URL(params.request.url);
  const category = searchParams.get("category");
  if (!category) return redirect(`${params.request.url}?category=all`);
  return {
    category,
  };
};

const Courses = () => {
  const { category } = useLoaderData();
  return (
    <main className="main">
      <CoursesContent category={category} />
    </main>
  );
};

export default Courses;
