import React from "react";
// Routers
import { Link } from "react-router-dom";
// Styles
import "./Login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="form">
                    <h2 className="title">Login</h2>
                    <form method="POST">
                        <input type="email" name="email" placeholder="Email" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <p>Forget Your Password?</p>
                        <div className="buttons">
                            <Link className="btn">Login</Link>
                            <Link className="btn" to="/register">
                                Sign Up
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
