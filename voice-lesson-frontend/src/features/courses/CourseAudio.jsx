import { HiOutlineCheckCircle, HiOutlinePlayCircle } from "react-icons/hi2";
import styled from "styled-components";

const StyledVideo = styled.div`
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

function CourseVideo({ video, onClick, active }) {
  return (
    <StyledVideo
      className="flex items-center justify-between gap-4 px-4 py-2 mb-2 cursor-pointer rounded-lg"
      status={video.status}
      onClick={() => onClick(video.id)}
      active={active}
    >
      <>
        {video.status === "completed" ? (
          <HiOutlineCheckCircle />
        ) : (
          <HiOutlinePlayCircle />
        )}
      </>
      <span className="mr-auto">{video.title}</span>
      <span>{video.duration}</span>
    </StyledVideo>
  );
}

export default CourseVideo;
