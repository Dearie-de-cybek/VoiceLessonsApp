import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function AppLayout() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] grid-rows-1fr h-max md:h-screen overflow-y-hidden"
      style={{ backgroundColor: "var(--color-white)" }}
    >
    <StyledAppLayout>
      {/* <Header /> */}
      <Sidebar />
      <Main className="md:overflow-x-auto md:h-screen [&::-webkit-scrollbar]:hidden md:p-8 lg:p-12 lg:pt-0 relative flex flex-col">
        <Container>
        <div className="w-full h-max md:px-1">
          <Outlet />
        </div>
        </Container>
      </Main>
    </StyledAppLayout>
    </div>
  );
}

export default AppLayout;
