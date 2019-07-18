import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  // Destructuring for more concise code
  const { name, email, password, password2 } = formData;

  // Handle form values changing
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const onSubmit = async e => {
    e.preventDefault();

    if (password !== password2) {
      console.log("Passwords do not match.");
    } else {
      const newUser = {
        name,
        email,
        password
      };

      try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        };

        const body = JSON.stringify(newUser);

        const res = await axios.post("/api/users", body, config);

        console.log(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>

        <p className="lead">
          <i className="fas fa-user" /> Create Your Account
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onChange(e)}
              required
            />
            <small className="form-text">
              This site uses Gravatar, so if you want a profile image, use a
              Gravatar email!
            </small>
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

          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              minLength="6"
              name="password2"
              value={password2}
              onChange={e => onChange(e)}
            />
          </div>

          <input type="submit" value="Register" className="btn btn-primary" />
        </form>

        <p className="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};

export default Register;
