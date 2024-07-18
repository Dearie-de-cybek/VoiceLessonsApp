import {
    HiOutlineBanknotes,
    HiOutlineBriefcase,
    HiOutlineCalendarDays,
    HiOutlineChartBar,
  } from "react-icons/hi2";
  import Stat from "./Stat";
  
  function Stats() {
   
    return (
      <>
        <Stat
          title="Bookings"
          color="blue"
          icon={<HiOutlineBriefcase />}
          value={10}
        />
        <Stat
          title="Sales"
          color="green"
          icon={<HiOutlineBanknotes />}
          value={30}
        />
        <Stat
          title="Check ins"
          color="indigo"
          icon={<HiOutlineCalendarDays />}
          value={'logs'}
        />
        <Stat
          title="Occupancy rate"
          color="yellow"
          icon={<HiOutlineChartBar />}
          value={"%"}
        />
      </>
    );
  }
  
  export default Stats;
  