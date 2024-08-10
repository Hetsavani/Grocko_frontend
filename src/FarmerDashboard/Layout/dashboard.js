import { Outlet } from "react-router-dom";
import Footer from "../../footer";
import Navbar from "./navbar";
import SeedList from "../../Seeds/seeds";

function Dashboard() {
  return (
    <>
      <div style={{marginBottom:"100px"}}>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      {/* <Outlet></Outlet> */}
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Dashboard;
