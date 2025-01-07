import React, { useState, useEffect, useContext } from "react";
import {UserContext} from "../Context/UserContext";
let Login = () => {
  const [email, setEmail] = useState("scott@test.com");
  const [password, setPassword] = useState("Scott123");

  let [message, setMessage] = useState("");

  let userContext = useContext(UserContext);

  let [errors, setErrors] = useState({
    email: [],
    password: [],
  });

  let [dirty, setDirty] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    document.title = "Login - Furlenco";
  }, []);

  let validate = () => {
    let errorsData = {};

    errorsData.email = [];
    errorsData.password = [];
    const validEmailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    const validPasswordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/;

    if (!email) {
      errorsData.email.push("Email can't be blank");
    }
    if (email) {
      if (!validEmailRegex.test(email)) {
        errorsData.email.push("Email address should be proper");
      }
    }

    if (!password) {
      errorsData.password.push("Password can't be blank");
    }
    if (password) {
      if (!validPasswordRegex.test(password)) {
        errorsData.password.push(
          "Password should be between 6-15 characters long at least one uppercase letter, one lowercase letter and one digit"
        );
      }
    }

    setErrors(errorsData);
  };

  useEffect(validate, [email, password]);

  let onLoginClick = async () => {
    let dirtyData = dirty;
    Object.keys(dirty).forEach((control) => {
      dirtyData[control] = true;
    });
    setDirty(dirtyData);
    validate();

    if (isValid()) {
      let response = await fetch(
        `http://localhost:5000/users?email=${email}&password=${password}`
      );
      if (response.ok) {
        let body = await response.json();
        if (body.length > 0) {
          userContext.setUser({
            ...userContext.user,
            isLoggedIn: true,
            currentUserName: body[0].fullName,
            currentUserId: body[0].id,
          });
          window.location.hash = "/dashboard";
        } else {
          setMessage(<span className="text-danger form-text">Invalid Credentials</span>);
        }
      } else {
        setMessage(
          <span className="text-danger">Errors in database connection</span>
        );
      }
    }
  };

  let isValid = () => {
    let valid = true;
    for (let control in errors) {
      if (errors[control].length > 0) {
        valid = false;
      }
    }

    return valid;
  };
  return (
    <div className="row">
      <div className="col-lg-5 col-md-7 mx-auto">
        <div className="card border-success shadow-lg my-2">
          <div className="card-header border-bottom border-success">
            <h4
              style={{ fontSize: "40px" }}
              className="text-success text-center"
            >
              Login
            </h4>
          </div>

          <div className="card-body border-bottom border-success">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                name="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                onBlur={(event) => {
                  setDirty({ ...dirty, [event.target.name]: true });
                  validate();
                }}
                className="form-control"
              />
              <div className="text-danger form-text">
                {dirty["email"] && errors["email"][0] ? errors["email"] : ""}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                name="password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                onBlur={(event) => {
                  setDirty({ ...dirty, [event.target.name]: true });
                  validate();
                }}
                className="form-control"
              />
              <div className="text-danger form-text">
                {dirty["password"] && errors["password"][0]
                  ? errors["password"]
                  : ""}
              </div>
            </div>
            <a href="#" style={{textDecoration: "none"}} className="form-text text-primary">New user? Create Account</a>
          </div>

          <div className="card-footer border-bottom border-success text-center">
            <div className="m-1">{message}</div>
            <button className="btn btn-success m-2" onClick={onLoginClick}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
