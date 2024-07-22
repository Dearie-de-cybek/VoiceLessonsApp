import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineHome,
  HiOutlineUsers,
} from "react-icons/hi2";
import { MdOutlineQuiz, MdOutlineAssignment } from "react-icons/md";
import "../../index.css";

const NavContainer = styled.nav`
  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    padding: 1rem 0.5rem;
    margin-top: 8rem;
    gap: 0.5rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 640px) {
    width: 100%;
    overflow-x: scroll;
    flex-direction: row;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);

    @media (max-width: 640px) {
      text-decoration: underline;
      text-underline-offset: 10px;
      background-color: transparent;
    }
  }

  @media (max-width: 640px) {
    font-size: 1.4rem;
    padding: 0.8rem 1.6rem;
    gap: 0.8rem;
  }
`;

const Icons = styled.span`
  @media (max-width: 640px) {
    display: none;
  }
`;

function MainNav() {
  return (
    <NavContainer>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <Icons>
              <HiOutlineHome />
            </Icons>
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/courses">
            <Icons>
              <HiOutlineCalendarDays />
            </Icons>
            <span>Courses</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <Icons>
              <HiOutlineUsers />
            </Icons>
            <span>User Profile</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/quiz">
            <Icons>
              <MdOutlineQuiz />
            </Icons>
            <span>Quiz</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/assignments">
            <Icons>
              <MdOutlineAssignment />
            </Icons>
            <span>Assignments</span>
          </StyledNavLink>
        </li>
      </NavList>
    </NavContainer>
  );
}

export default MainNav;
