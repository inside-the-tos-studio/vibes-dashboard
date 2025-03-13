import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { SigninPage } from "./SigninPage"
import { DashBoard } from "./DashBoard";

export const Container = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <div>
            {isAuthenticated ? <DashBoard /> : <SigninPage />}
        </div>
    )
}