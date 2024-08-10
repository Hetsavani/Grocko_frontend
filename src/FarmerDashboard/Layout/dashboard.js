import { Outlet } from "react-router-dom";
import Footer from "../../footer";
import Navbar from "./navbar";
import SeedList from "../../Seeds/seeds";
import { useEffect } from "react";

function Dashboard() {
  useEffect(()=>{
    // sessionStorage.setItem("isLoggedIn",false)
  },[])
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
