import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Auth/Contex";


const PrivetRout = ({ children }) => {
    // const {user, loading, setLoading} = useContext(AuthContext); line-16 releted
    const { user, loading } = useContext(authContext);
    const location = useLocation();

    // loading when relaod page 
    if (loading) {
        return <div className=" flex justify-center items-center p-52">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    }

    // redirect route
    if (!user) {
        return <Navigate to='/signup' state={{ from: location }} replace ></Navigate>
    }
    return children;

};

export default PrivetRout;