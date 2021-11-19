import { createContext, useState } from "react";

import {signIn as singnInApi} from '../api'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [loading, setLoading] = useState(false);


    const signIn = async (username, password, callback) => {
        setLoading(true);
        const res = await singnInApi(username, password);
        console.log("res", res);

        if(res && res.auth_token) {
            localStorage.setItem("token", res.auth_token);
            setToken(res.auth_token);
            callback();
        }

        setLoading(false);
    }

    const signOut = () => {
        localStorage.removeItem("token");
        setToken("");
    }


    const value = {
        token,
        loading,
        signIn,
        signOut
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext;