import {
    HiOutlineBookmark,
    HiOutlineClock,
    HiOutlinePlay,
    HiOutlineStar,
  } from "react-icons/hi2";
  import Text from "../../ui/Text";
  import styled from "styled-components";
  import Button from "../../ui/Button";
  import { useNavigate, useParams } from "react-router-dom";
  import { course as courseData } from "../../data/data-courses";
  import "../../index.css";
  
  const Row = styled.div`
    display: flex;
    align-items: center;
    color: var(--color-ash-800);
  
    .course_overview,
    .course_author {
      padding: 2rem;
      align-self: flex-start;
      background-color: var(--color-white);
      border-radius: var(--border-radius-lg);
  
      & > p:last-child {
        color: var(--color-ash-600);
      }
  
      @media (max-width: 900px) {
        background-color: var(--color-pink-300);
      }
    }
  `;
  
  const Icon = styled.span`
    & svg {
      color: var(--color-purple-200);
      fill: var(--color-purple-200);
    }
  `;
  
  function CourseDetail() {
    const navigate = useNavigate();
    const { courseId } = useParams();
  
   
    const course = courseData[courseId];
  
    return (
      <>
        {console.log(courseId)}
        <div className="grid gap-8 p-[5%] md:p-0">
          <Text size="bold">Course Details</Text>
          <img src={course.img} alt={course.alt} />
  
          <div className="flex flex-col gap-4">
            <Text size="medium">{course.title}</Text>
            <Row className="gap-8">
              <Row className="gap-2">
                <HiOutlineClock />
                <Text size="small">{course.duration}hr course</Text>
              </Row>
  
              <Row className="gap-2">
                <Icon>
                  <HiOutlineStar />
                </Icon>
                <Text size="small">{course.rating} rating</Text>
              </Row>
            </Row>
  
            <Row className="gap-8">
              <Button
                size="small"
                variation="outline"
                onClick={() => navigate(`/courses/${course.id}/learning-outline`)}
              >
                <Icon>
                  <HiOutlineBookmark />
                </Icon>
                <span>Course outline</span>
              </Button>
  
              <Button size="small" variation="outline">
                <Icon>
                  <HiOutlinePlay />
                </Icon>
                <span>Continue course</span>
              </Button>
            </Row>
          </div>
  
          <Row className="gap-5 sm:gap-20 flex-col sm:flex-row">
            <div className="grid gap-4 course_overview">
              <Text size="regular">Course Overview</Text>
              <Text size="small">{course.overview}</Text>
            </div>
            <div className="grid gap-4 course_author">
              <div className="flex items-center gap-4">
                <img
                  className="h-20 w-20 rounded-[50%]"
                  src={course.author.img}
                  alt="course tutor"
                />
                <Text size="small" className="flex flex-col justify-between">
                  <span>course tutor</span>
                  <span>{course.author.name}</span>
                </Text>
              </div>
              <Text size="small">{course.author.biography}</Text>
            </div>
          </Row>
        </div>
      </>
    );
  }
  
  export default CourseDetail;
  