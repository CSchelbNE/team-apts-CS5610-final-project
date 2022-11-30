import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk, registerThunk } from "../services/users-thunks";
import bgImg from "../images/login-music-final.jpg";
import './index.css';
import { Navigate, useNavigate } from "react-router";
import { setError } from "../reducers/users-reducer";

const Login = () => {
    const [username, setUserName] = useState('alice');
    const [password, setPassword] = useState('alice123');
    const [validatePassword, setValidatePassword] = useState('alice123');
    const [loginPageFlag, setLoginPageFlag] = useState(true);
    const {currentUser, error} = useSelector((state) => state.users)
    const dispath = useDispatch()
    const handleLoginBtn = () => {
        const loginUser = {username,password};
        dispath(loginThunk(loginUser));
        return;
    }
    const handleRegisterBtn = () => {
        console.log("inside", password !== validatePassword, password, validatePassword)
        if (password !== validatePassword) {
            dispath(setError("Passwords must match."))
            return;
        }
        const newUser = {username,password};
        dispath(registerThunk(newUser))
        return;
    }
    console.log("ohoo------------->",error, currentUser)
    if (error == null && currentUser) {
        return (<Navigate to="/home"/>);
    }
    const changePageFlag = (flag) => {
        // setUserName("")
        // setPassword("")
        // setValidatePassword("")
        setLoginPageFlag(flag)
    }
    return (
        <>
            <section className="login-page-main-section vh-100">
                <div className="container h-100 py-5">
                    <div className="row h-100 align-items-center justify-content-center">
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="row g-0">
                                    <div className="d-flex align-items-center col-lg-7 col-md-6">
                                        <div className="card-body p-4 p-lg-5">
                                                {
                                                    !error 
                                                    ? 
                                                        <></>
                                                     :
                                                    <div className="alert alert-danger" role="alert">{error}</div>
                                                }
                                            <form>
                                                     {
                                                        loginPageFlag == true ? 
                                                            <>
                                                                <h4 className="fw-bold mb-3 pb-3">Sign into your account</h4>
                                                                <div className="form-group pb-4">
                                                                    <label className="form-label" htmlFor="username">Username:</label>
                                                                    <input type="email" id="username" onChange={e => setUserName(e.target.value)} defaultValue={username} className="form-control form-control-lg"/>
                                                                </div>
                                                                <div className="form-group pb-4">
                                                                    <label className="form-label" htmlFor="password">Password:</label>
                                                                    <input type="text" id="password" onChange={e => setPassword(e.target.value)} defaultValue={password} className="form-control form-control-lg"/>
                                                                </div>
                                                                <div className="form-group pt-1 d-flex justify-content-center pb-4">
                                                                    <button type="button" className="btn btn-lg btn-primary rounded-pill w-100" onClick={() => handleLoginBtn()} >Login</button>
                                                                </div>
                                                                <div className="form-group d-flex justify-content-center">
                                                                    <span>New to the site? <a onClick={() => changePageFlag(false)} className="cursor-pointer text-primary text-decoration-none">Register here</a></span>
                                                                </div>
                                                            </>
                                                        : 
                                                         <>
                                                            <h4 className="fw-bold mb-3 pb-3">New User Registration</h4>
                                                                <div className="form-group pb-4">
                                                                    <label className="form-label" htmlFor="username">Username:</label>
                                                                    <input type="email" id="username" onChange={e => setUserName(e.target.value)} defaultValue={username} className="form-control form-control-lg" />
                                                                </div>
                                                                <div className="form-group pb-4">
                                                                    <label className="form-label" htmlFor="password">Password:</label>
                                                                    <input type="text" id="password" onChange={e => setPassword(e.target.value)} defaultValue={password} className="form-control form-control-lg" />
                                                                </div>
                                                                <div className="form-group pb-4">
                                                                    <label className="form-label" htmlFor="re-enter-password">Re-enter Password:</label>
                                                                    <input type="text" id="re-enter-password" onChange={e => setValidatePassword(e.target.value)} defaultValue={validatePassword} className="form-control form-control-lg" />
                                                                </div>
                                                                <div className="form-group pt-1 d-flex justify-content-center pb-4">
                                                                    <button type="button" className="btn btn-lg btn-primary rounded-pill w-100"  onClick={() => handleRegisterBtn()}>Register</button>
                                                                </div>
                                                                <div className="form-group d-flex justify-content-center">
                                                                    <span>Already have an account? <a onClick={() => changePageFlag(true)} className="cursor-pointer text-primary text-decoration-none">Login here</a></span>
                                                                </div>
                                                         </>
                                                    }
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src={bgImg} alt="login page image" className="img-fluid right-side-radius" />
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
                </div>
            </section>
        </>
    )

}

export default Login;