import React from "react";
// Routers
import { Link } from "react-router-dom";
// Styles
import "./Register.scss";

const Register = () => {
    return (
        <div className="register">
            <div className="container">
                <div className="form">
                    <h2 className="title">Sign Up</h2>
                    <form method="POST">
                        <div className="inputs">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <input type="email" name="email" placeholder="Email" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <div className="buttons">
                            <Link className="btn">Register</Link>
                            <Link className="btn" to="/login">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
