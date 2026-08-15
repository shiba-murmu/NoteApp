import { Navigate } from "react-router-dom";
import LandingPage from "../../pages/LandingPage";
import { isAuthenticated } from "../../utils/auth";

export default function HomeRoute() {

    if (isAuthenticated()) {

        return (
            <Navigate
                to="/dashboard"
                replace
            />
        );
    }

    return <LandingPage />;
}