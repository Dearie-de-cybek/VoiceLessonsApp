import { useParams } from "react-router-dom";
import styled from "styled-components";

import { HiOutlineClock, HiOutlineStar } from "react-icons/hi2";

import Text from "../../ui/Text";
import CourseModules from "./CourseModules";

// FOR TESTS
import { course } from "../../data/data-courses";
import { courseModels } from "../../data/courseModels";

const Row = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-ash-800);
`;

const Icon = styled.span`
  & svg {
    color: var(--color-purple-200);
    fill: var(--color-purple-200);
  }
`;

function CourseOutline() {
  const { courseId } = useParams();

  // FOR TESTING PURPOSE
  const video = course[courseId].video[0];

  return (
    <div className="grid gap-8 p-[5%] md:p-0">
      <Text size="bold">Course Outline</Text>
      <div className="w-full h-auto overflow-hidden rounded-[2rem]">
        <img
          className="w-full h-[20rem] object-cover"
          src={video.img}
          alt={video.alt}
        />
      </div>
      <div className="flex items-center justify-between px-4 flex-col sm:flex-row gap-2 lg:gap-0">
        <Text size="small" className="self-start">
          {video.section}: {video.currentVideo}
        </Text>
        <Row className="gap-4 self-start">
          <Row className="gap-2">
            <HiOutlineClock />
            <Text size="small">{video.duration}hr video</Text>
          </Row>

          <Row className="gap-2">
            <Icon>
              <HiOutlineStar />
            </Icon>
            <Text size="small">{video.rating} rating</Text>
          </Row>

          
        </Row>
      </div>
      <CourseModules courseModels={courseModels[0]} />
    </div>
  );
}

export default CourseOutline;
