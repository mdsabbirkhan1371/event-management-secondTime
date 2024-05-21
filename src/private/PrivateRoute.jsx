import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const PrivateRoute = ({children}) => {

const navigate = useNavigate()
const {user}=useContext(AuthContext)
if(user){
    return children
}
else{
    toast('Login To Your Account First Then Book')
    navigate('/')
}

<ToastContainer></ToastContainer>
};

export default PrivateRoute;