import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button> Sign up </button>
        <p> This is an error</p>
        <span>
          Do you have an account with us?
          <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
