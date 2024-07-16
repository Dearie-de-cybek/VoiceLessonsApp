import styled from "styled-components";
import Tracker from "../../components/Tracker";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = styled.div`
  background-color: var(--color-white);
  border-radius: var(--border-radius-tiny);

  @media (max-width: 640px) {
    box-shadow: 0px 1.5px 1px 0px var(--color-ash-300);
  }
`;

const Title = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  align-self: flex-start;
  cursor: pointer;
  color: var(--color-ash-800);

  &:hover {
    text-decoration: underline;
  }
`;

const Tutor = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  color: var(--color-ash-600);
`;



function CoursesCard({ course }) {
  const navigate = useNavigate();

  return (
    <Card className="w-full h-auto sm:w-[25rem] xl:w-[36rem] overflow-hidden">
      <span>
        <img
          className="w-full h-[18.8rem] xl:h-[20.8rem] object-cover"
          src={course.img}
          alt={course.alt}
        />
      </span>
      <div className="flex flex-col gap-2 p-4 sm:gap-4">
        <Title onClick={() => navigate(`/courses/${course.id}`)}>
          {course.title}
        </Title>
        <Tutor>{course.tutor}</Tutor>
        <Tracker currtrack={course.completionRate}>
          <div className="flex flex-col gap-2">
            <Tracker.Bar />
            <span className="text-[1.2rem] font-semibold">
              <Tracker.Progress />
            </span>
          </div>
        </Tracker>
      </div>
    </Card>
  );
}

CoursesCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tutor: PropTypes.string.isRequired,
    completionRate: PropTypes.number.isRequired, 
  }).isRequired,
};

export default CoursesCard;
