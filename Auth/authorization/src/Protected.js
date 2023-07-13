import { useSelector } from "react-redux"
import { fetchToken } from "./features/user/userSlice"
import { Navigate } from "react-router-dom";

const Protected = ({child}) => {
    const token = useSelector(fetchToken);
    if(!token){
        return <Navigate to="/login" />;
    }
    return child;
}

export default Protected;