import { createContext, useContext } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Track = styled.span`
  width: 100%;
  display: inline-block;
  background-color: var(--color-brand-200);
  height: ${({ height }) => (height ? `${height}px` : "2px")};

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: var(--color-brand-500);
    width: ${({ currtrack }) => (currtrack ? `${currtrack}%` : "25%")};
  }
`;

const TrackerContext = createContext();

function useTracker() {
  const context = useContext(TrackerContext);
  if (context === undefined)
    throw new Error("useTracker must be used within a TrackerProvider");
  return context;
}

function Tracker({ currtrack, height, children }) {
  return (
    <TrackerContext.Provider value={{ currtrack, height }}>
      {children}
    </TrackerContext.Provider>
  );
}

function Bar() {
  const { currtrack, height } = useTracker();
  return <Track currtrack={currtrack} height={height} />;
}

function Progress() {
  const { currtrack } = useTracker();

  if (currtrack === 100) return <span>Completed</span>;

  return <span>{currtrack}% complete</span>;
}

Tracker.Bar = Bar;
Tracker.Progress = Progress;

Tracker.propTypes = {
    currtrack: PropTypes.object.isRequired,  // Adjust the type according to the expected type of currtrack
    height: PropTypes.number.isRequired,     // Adjust the type if height is not a number
    children: PropTypes.node.isRequired,
  };

export default Tracker;
