import { createContext, useContext, useEffect, useState } from "react";
import { IContext } from "../../models/types/Context";
import { User, voidUser } from "../../models/types/Sesion";
import Sesions from "../../utils/Sesions/Sesions";

const INITIAL_CONTEXT:IContext ={
    user:voidUser,
    isLoading:true,
    isAuthenticated:false,
    setIsAuthenticated:() => {},
    setUser:() => {},
    checkAuthUser:async() => false as boolean
} 

const authContext = createContext<IContext>(INITIAL_CONTEXT);

const AuthProvider = ({ children } : { children : React.ReactNode}) => {
    const [user, setUser] = useState<User>(voidUser);
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const checkAuthUser = async () => {
        setIsLoading(true);
        try {
            const currentAccount = await Sesions.getAndValidateSesion();
    
            if (currentAccount) {
                setUser(currentAccount);
                setIsAuthenticated(true);
                return true;
            }
            setIsAuthenticated(false);
            return false;
        } catch (error) {
            setIsAuthenticated(false);
            return false;
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        checkAuthUser();
    },[])

    const value = {
        user,
        isLoading,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser
    }

    return (
        <authContext.Provider value = {value} >
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;
export const useUserContext = () => useContext(authContext);