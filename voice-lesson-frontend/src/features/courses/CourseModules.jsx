import { createPortal } from "react-dom";
import styled from "styled-components";
import CourseAudio from "./CourseAudio";
import { useState } from "react";
import "../../index.css";

const StyledCourseModel = styled.span`
  color: var(--color-ash-800);
  background-color: var(--color-white);
  border-top-left-radius: var(--border-radius-xlg);
  border-bottom-left-radius: var(--border-radius-xlg);

  @media (max-width: 900px) {
    border-radius: var(--border-radius-xlg);
    background-color: var(--color-pink-300);
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
              {mod.Audios.map((Audio) => (
                <CourseAudio
                  key={Audio.id}
                  Audio={Audio}
                  onClick={handleCurrAudio}
                  active={Audio.id === currAudio}
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

export default CourseModules;
