import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../FarmerDashboard/Layout/dashboard";
import Login from "../Login/login";
import MainContent from "../dashboard/maincontent";
import SeedList from "../Seeds/seeds";
import TransportRequest from "../Transport/TransportRequest";
// import Login from './login';

const router = createBrowserRouter([
    {
        path: "",
        element: <Dashboard />,
        children:[
            {
                path:"",
            element:<MainContent />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        // children: [
            children: [{
                path: "",
                element: <MainContent />
            },
            {
                path: "seeds",
                element: <SeedList />
            },
            {
                path: "transport",
                element: <TransportRequest />
            },
            {
                path: "dashboard",
                element: <MainContent />,
                
            }
        ]}
    ],
)

export default router;
