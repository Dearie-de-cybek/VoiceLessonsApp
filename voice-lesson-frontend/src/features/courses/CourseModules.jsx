import { createPortal } from "react-dom";
import styled from "styled-components";
import CourseAudio from "./CourseAudio";
import { useState } from "react";
import PropTypes from "prop-types";
import "../../index.css";

const StyledCourseModel = styled.span`
  color: var(--color-ash-800);
  background-color: var(--color-blue-100);
  border-top-left-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);

  @media (max-width: 900px) {
    border-radius: var(--border-radius-lg);
    background-color: var(--color-red-100);
  }
`;

function CourseModules({ courseModels }) {
  const [currAudio, setCurrAudio] = useState();

  function handleCurrAudio(index) {
    setCurrAudio(index);
  }


  return createPortal(
    <StyledCourseModel className="h-full block md:flex md:justify-center mt-8 py-8 px-6 md:pt-20 md:px-8 border-none md:border md:rounded-l-[3rem] w-[90%] m-auto md:m-0 md:w-full">
      <div className="flex flex-col gap-6">
        {courseModels?.modules?.map((mod, index) => (
          <div key={index}>
            <span className="text-[1.8rem] inline-block mb-3">
              {" "}
              {mod.title}
            </span>

            <div className="flex flex-col text-[1.4rem]">
              {mod.audios.map((audio) => (
                <CourseAudio
                  key={audio.id}
                  audio={audio}
                  onClick={handleCurrAudio}
                  active={audio.id === currAudio}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </StyledCourseModel>,
    document.getElementById("courses-outline") || document.body
  );
}

CourseModules.propTypes = {
    courseModels: PropTypes.shape({
      modules: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          Audios: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string.isRequired,
              status: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              duration: PropTypes.string.isRequired,
            }).isRequired
          ).isRequired,
        }).isRequired
      ).isRequired,
    }),
  };
  
  CourseModules.defaultProps = {
    courseModels: {
      modules: [],
    },
  };

export default CourseModules;
