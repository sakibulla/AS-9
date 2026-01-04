import { createBrowserRouter } from "react-router";

import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import PlantDetails from "../pages/PlantDetails/PlantDetails";
import AllPlants from "../pages/AllPlants/AllPlants";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Auth from "../pages/Auth/Auth";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../pages/Profile/Profile";
import ForgotPassword from "../pages/ForgetPassword/ForgetPassword";

const router = createBrowserRouter(

    [
        {
            path: "/",
            element: <Root></Root>,
            children: [
                {
                    index: true,
                    loader: () => fetch("/Trees.json").then(res => res.json()),
                    Component: Home
                },

                {
                    path: "/auth",
                    element: <Auth></Auth>,
                    children: [
                        {
                            path: "/auth/login",
                            element: <Login></Login>,
                        },
                        {
                            path: "/auth/Register",
                            element: <Register></Register>,
                        }
                    ]
                },
                {
                    path: "/Plants",
                    loader: () => fetch("/Trees.json").then(res => res.json()),
                    Component: AllPlants
                },
                {
                    path: "/*",
                    element: <h2>Error404</h2>
                }, {
                    path: "/PlantDetails/:id",
                    loader: () => fetch("/Trees.json").then(res => res.json()),
                    element: <PrivateRoute>
                        <PlantDetails>
                        </PlantDetails>
                    </PrivateRoute>
                },
                {
                    path: "/profile",
                    element: (
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    ),
                },
                {
                    path: "/auth/forgot-password",
                    element: <ForgotPassword />
                }
            ]
        },


    ]
);
export default router;