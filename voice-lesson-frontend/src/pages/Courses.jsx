import { courses } from "../data/data-courses";
import CoursesBoard from "../features/courses/CoursesBoard";

function Courses() {
  return (
    <div>
      <CoursesBoard courses={courses} />
    </div>
  );
}

export default Courses;
