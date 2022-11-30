import {useState} from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "./users-thunks";

const Register = () => {
    const [username, setUserName] = useState('alice');
    const [password, setPassword] = useState('alice123');
    const [validatePassword, setValidatePassword] = useState('alice');
    const [error, setError] = useState(null);
    const {currentUser} = useSelector((state) => state.users)
    const dispath = useDispatch()
    const handleRegisterBtn = () => {
        if (password !== validatePassword) {
            setError("Password must match");
            return;
        }
        setError(null);
        const newUser = {username,password};
        dispath(registerThunk(newUser))
    }
    return (
        <>
            <h1>Register</h1>
            {
                error && 
                <div className="alert alert-danger">
                    {error}
                </div>
            }

            <input 
                className="form-control mb-2"
                value= {username}
                onChange={(e) => setUserName(e.target.value)}/>

            <input 
                className="form-control mb-2"
                value= {password}
                onChange={(e) => setPassword(e.target.value)}/>
            <input 
                className="form-control mb-2"
                value= {validatePassword}
                onChange={(e) => setValidatePassword(e.target.value)}/>

            <button 
                onClick={handleRegisterBtn}
                className="btn btn-primary w-100">Register</button>
            {
                    currentUser && 
                    <h2>{currentUser.username}</h2>
                }
        </>
    )
}

export default Register;