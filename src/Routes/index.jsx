import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../FarmerDashboard/Layout/dashboard";
import Login from "../Login/login";
import MainContent from "../dashboard/maincontent";
import SeedList from "../Seeds/seeds";
import TransportRequest from "../Transport/TransportRequest";

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
        },
    {
        path:"seeds",
        element:<SeedList/>
    },
    {
        path:"transport",
        element:<TransportRequest/>
    }
    ]
    },

])

export default router;