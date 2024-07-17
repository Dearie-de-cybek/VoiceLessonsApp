import PropTypes from 'prop-types';
import { HiOutlineCheckCircle, HiOutlinePlayCircle } from "react-icons/hi2";
import styled from "styled-components";
import "../../index.css";

const StyledAudio = styled.div`
  transition: color var(--general-timing) ease,
    background-color var(--general-timing) ease;

  color: ${({ status }) =>
    status === "completed"
      ? "var(--color-green-500)"
      : "var(--color-purple-200)"};

  color: ${({ active }) => active && "var(--color-white)"};
  background-color: ${({ active }) => active && "var(--color-purple-300)"};

  &:hover {
    color: ${({ active }) => !active && "var(--color-white)"};
    background-color: ${({ active }) => !active && "var(--color-purple-200)"};
  }
`;

function CourseAudio({ Audio, onClick, active }) {
  return (
    <StyledAudio
      className="flex items-center justify-between gap-4 px-4 py-2 mb-2 cursor-pointer rounded-lg"
      status={Audio.status}
      onClick={() => onClick(Audio.id)}
      active={active}
    >
      <>
        {Audio.status === "completed" ? (
          <HiOutlineCheckCircle />
        ) : (
          <HiOutlinePlayCircle />
        )}
      </>
      <span className="mr-auto">{Audio.title}</span>
      <span>{Audio.duration}</span>
    </StyledAudio>
  );
}

CourseAudio.propTypes = {
  Audio: PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default CourseAudio;
