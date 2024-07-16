import styled from "styled-components";
import CoursesCard from "./CourseCard";

const StyledCourses = styled.div`
  background-color: transparent;

  @media (max-width: 900px) {
    background-color: var(--color-white);
  }
`;

function CoursesBoard({ courses }) {
  return (
    <StyledCourses className="grid gap-8 p-[5%] md:p-0 md:gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CoursesCard course={course} key={course.id} />
        ))}
      </div>
    </StyledCourses>
  );
}

export default CoursesBoard;
