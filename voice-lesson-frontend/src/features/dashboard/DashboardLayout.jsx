import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { courses, isLoading: isLoading1 } = '';
  const { assignments, isLoading: isLoading2, numDays } = '';

  if (isLoading1 || isLoading2 ) return <Spinner />;

  return (
    <div className="grid gap-8">
    <StyledDashboardLayout>
      <Stats
        courses={courses}
        assignments={assignments}
        numDays={numDays}
      />
    </StyledDashboardLayout>
    </div>
  );
}

export default DashboardLayout;
