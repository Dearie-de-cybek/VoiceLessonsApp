import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
  display: grid;
`;

function DashboardLayout() {
  const { courses, isLoading: isLoading1 } = '';
  const { assignments, isLoading: isLoading2, numDays } = '';

  if (isLoading1 || isLoading2 ) return <Spinner />;

  return (
    <div className="grid gap-8">
    <StyledDashboardLayout className="grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-8">
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
