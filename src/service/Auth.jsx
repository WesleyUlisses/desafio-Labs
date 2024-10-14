import { createContext, useEffect, useState } from "react";



export const AuthContext = createContext()

export const AuthProvider = ({ clidren }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadingStorageData = async () => {
            const storageUser = localStorage.getItem("@Auth:user", user);
            const storageToken = localStorage.getItem("@Auth:token", token);
     
            if (storageUser && storageToken) {
             setUser(storageUser);
            }
         };
         loadingStorageData();

    }, [])

    

    const signIn = async ({ email, password }) => {
        const response = await AuthProvider.post("/user/auth-user", {
            email,
            password
        });

        if (response.data.error) {
            alert(response.data.error)
        } else {
            setUser(response.data);
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`;
            localStorage.setItem("@Auth:token", token);
            localStorage.setItem("@Auth:user", user);
        }
    };

    return (
        <AuthContext.Provider>
            {clidren}
        </AuthContext.Provider>
    )
}