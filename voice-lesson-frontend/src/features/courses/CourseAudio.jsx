import PropTypes from 'prop-types';
import { HiOutlineCheckCircle, HiOutlinePlayCircle } from "react-icons/hi2";
import styled from "styled-components";
import "../../index.css";

const StyledAudio = styled.div`
  transition: color var(--general-timing) ease,
  background-color var(--general-timing) ease;

  color: ${({ status }) =>
    status === "completed"
      ? "var(--color-green-700)"
      : "var(--color-indigo-700)"};

  color: ${({ active }) => active && "var(--color-grey-50)"};
  background-color: ${({ active }) => active && "var(--color-indigo-100)"};

  &:hover {
    color: ${({ active }) => !active && "var(--color-grey-50)"};
    background-color: ${({ active }) => !active && "var(--color-indigo-700)"};
  }
`;

function CourseAudio({ audio, onClick, active }) {
  return (
    <StyledAudio
      className="flex items-center justify-between gap-4 px-4 py-2 mb-2 cursor-pointer rounded-lg"
      status={audio.status}
      onClick={() => onClick(audio.id)}
      active={active}
    >
      <>
        {audio.status === "completed" ? (
          <HiOutlineCheckCircle />
        ) : (
          <HiOutlinePlayCircle />
        )}
      </>
      <span className="mr-auto">{audio.title}</span>
      <span>{audio.duration}</span>
    </StyledAudio>
  );
}

CourseAudio.propTypes = {
  audio: PropTypes.shape({
    id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default CourseAudio;
