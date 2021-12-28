import { supabase } from "../utils/supabase";
import { useEffect } from "react";
import {useRouter} from "next/router";

const Logout = () => {
    const router = useRouter();

    useEffect(() => {


        const logout = async () => {
            await supabase.auth.signOut();
            router.push("/");
        }
        logout();

    }, []);

    return (
        <div>
            Logging out of the application.
        </div>
    );
};

export default Logout;