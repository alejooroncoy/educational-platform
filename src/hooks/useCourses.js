import { useState } from "react";

export default function useCourses(
  url = `https://apimocha.com/education-platform/courses/all`
) {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const getCourses = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setCourses(data);
    setLoading(false);
  };
  return {
    courses,
    loading,
    getCourses,
  };
}
