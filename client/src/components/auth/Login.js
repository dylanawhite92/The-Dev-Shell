import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  // Destructuring for more concise code
  const { email, password } = formData;

  // Handle form values changing
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const onSubmit = async e => {
    e.preventDefault();
    console.log("Success.");
  };

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>

        <p className="lead">
          <i className="fas fa-user" /> Sign In to Your Account
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              minLength="6"
              name="password"
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
          <input type="submit" value="Log In" className="btn btn-primary" />
        </form>

        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </>
  );
};

export default Login;
