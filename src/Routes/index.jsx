import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../FarmerDashboard/Layout/dashboard";
import Login from "../Login/login";

const router = createBrowserRouter([
    {
        path : "",
        element : <Login/>
    }, 
    {
        path : "dashboard",
        element : <Dashboard/>
    },

])

export default router;