import {
    HiOutlineCalendarDays,
  } from "react-icons/hi2";
  import { MdOutlineOndemandVideo } from "react-icons/md";
  import Stat from "./Stat";
  
  function Stats() {
   
    return (
      <>
        <Stat
          title="Courses"
          color="blue"
          icon={<MdOutlineOndemandVideo />}
          value={10}
        />
        <Stat
          title="Assignments"
          color="indigo"
          icon={<HiOutlineCalendarDays />}
          value={'2 Done'}
        />
      </>
    );
  }
  
  export default Stats;
  