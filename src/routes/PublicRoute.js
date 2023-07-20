import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectsIsLoggedIn } from "redux/selectors";


export default function PublicRoute({ children }) {
    const isLoggedIn = useSelector(selectsIsLoggedIn);
    return !isLoggedIn ? children: <Navigate to="/contacts" />;
}