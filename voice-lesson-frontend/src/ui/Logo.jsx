import styled from "styled-components";
import logo from "../../public/mh.png";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  margin-top: 20px;
  height: 15.6rem;
  width: auto;
  background-color: black;
  border-radius: 100px;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src={logo} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
