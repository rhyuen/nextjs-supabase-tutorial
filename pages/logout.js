import { useEffect } from "react";
import {useUser} from "./context/user.js";

const Logout = () => {
    const {logout} = useUser();

    useEffect(logout, []);

    return (
        <div>
            Logging out of the application.
        </div>
    );
};

export default Logout;