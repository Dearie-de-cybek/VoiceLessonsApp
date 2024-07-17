import DashboardLayout from "../features/dashboard/DashboardLayout";
// import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard Hello</Heading>
      </Row>
        <div>
          <h2>User Details</h2>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
        </div>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
