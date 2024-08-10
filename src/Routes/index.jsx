import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../FarmerDashboard/Layout/dashboard";
import Login from "../Login/login";
import MainContent from "../dashboard/maincontent";

const router = createBrowserRouter([
    {
        path: "",
        element: <Login />
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [{
            path: "",
            element: <MainContent />
        }]
    },

])

export default router;