import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);

`;

const LogoContainer = styled.div`
  @media (max-width: 640px) {
    background-color: var(--color-offwhite-400);
  }
`;

function Sidebar() {
  return (
    <StyledSidebar className="overflow-hidden p-0 md:px-[1.8rem] md:py-[3.2rem] row-span-full flex flex-col gap-20 md:gap-16 w-full">
      <LogoContainer className="absolute sm:static p-8 sm:p-0 w-full flex items-start">
        <Logo />
      </LogoContainer>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
