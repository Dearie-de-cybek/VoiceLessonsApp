import { useParams } from "react-router-dom";
import styled from "styled-components";

import { HiOutlineClock } from "react-icons/hi2";

import Text from "../../ui/Text";
import CourseModules from "./CourseModules";

// FOR TESTS
import { course } from "../../data/data-courses";
import { courseModels } from "../../data/courseModels";
import "../../index.css";

const Row = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-ash-800);
`;




function CourseOutline() {
  const { courseId } = useParams();

  // FOR TESTING PURPOSE
  const audio = course[courseId].audio[0];

  return (
    <div className="grid gap-8 p-[5%] md:p-0">
      <Text size="bold">Course Outline</Text>
      <div className="w-full h-auto overflow-hidden rounded-[2rem]">
        <img
          className="w-full h-[20rem] object-cover"
          src={audio.img}
          alt={audio.alt}
        />
      </div>
      <div className="flex items-center justify-between px-4 flex-col sm:flex-row gap-2 lg:gap-0">
        <Text size="small" className="self-start">
          {audio.section}: {audio.currentVideo}
        </Text>
        <Row className="gap-4 self-start">
          <Row className="gap-2">
            <HiOutlineClock />
          </Row>

          
        </Row>
      </div>
      <CourseModules courseModels={courseModels[0]} />
    </div>
  );
}

export default CourseOutline;
