import { Navigate } from "react-router-dom";

const Protected = (props) => {
    if(!localStorage.getItem('token') || localStorage.getItem("token") === "[object Object]"){
        return <Navigate to="/login" />;
    }else{
        return props.children;
    }
}

export default Protected;