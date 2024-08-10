import { Outlet } from "react-router-dom";
import Footer from "../../footer";
import Navbar from "./navbar";

function Dashboard() {
  return (
    <>
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
    </>
  );
}
export default Dashboard;
