import styled, { css } from "styled-components";

// This registers the different SIZES of texts that might be available throughout the application
const sizes = {
  small: css`
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 24px;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 2rem;
    }
  `,
  regular: css`
    font-size: 1.6rem;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 1.4rem;
      font-weight: 500;
    }
  `,

  semiMedium: css`
    font-size: 2.2rem;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 1.6rem;
      font-weight: 500;
    }
  `,

  medium: css`
    font-size: 2.8rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.6rem;
      font-weight: 500;
    }
  `,

  bold: css`
    font-size: 3.6rem;
    font-weight: 600;
    line-height: 3.2rem;

    @media (max-width: 768px) {
      font-size: 2.6rem;
      font-weight: 700;
      letter-spacing: 0.01em;
    }
  `,

  bolder: css`
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 5.2rem;

    @media (max-width: 768px) {
      font-size: 3.2rem;
      font-weight: 700;
      line-height: 3.2rem;
      letter-spacing: 0.02em;
    }
  `,

  boldest: css`
    font-size: 7.2rem;
    line-height: 7.2rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 4rem;
      font-weight: 700;
      line-height: 4.8rem;
    }
  `,
};

// Create TEXT component
const Text = styled.p`
  letter-spacing: 0em;
  line-height: 1.5;

  ${(props) => sizes[props.size]}
`;

// set default props on TEXT component
Text.defaultProps = {
  size: "regular",
};

export default Text;
