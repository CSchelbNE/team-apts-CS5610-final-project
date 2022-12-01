import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../services/users-thunks";
import { Navigate} from "react-router";

const Logout = () => {
    const dispath = useDispatch();
    const {currentUser, error} = useSelector((state) => state.users)
    useEffect(() => {
        setTimeout(() => {
            dispath(logoutThunk());
        }, 1000);
      });
      if (!error && !currentUser) {
        return (<Navigate to="/login" />);
      }
    return (
        <>
             <p>Logging the user: {currentUser.username} out of this site.....</p> 
        </>
    )
}
export default Logout;