import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Login = () => {
  const [email, setEmail] = useState("scott@test.com");
  const [password, setPassword] = useState("Scott123");
  const [message, setMessage] = useState("");
  const userContext = useContext(UserContext);
  const cartContext = useContext(CartContext);
  const [errors, setErrors] = useState({
    email: [],
    password: [],
  });
  const [dirty, setDirty] = useState({
    email: false,
    password: false,
  });

  useEffect(() => {
    const img = new Image();
    img.src = './assets/sofa.webp';
  }, []);

  useEffect(() => {
    document.title = "Login - Furlenco";
  }, []);

  const validate = () => {
    let errorsData = {
      email: [],
      password: [],
    };
    const validEmailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    const validPasswordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/;

    if (!email) {
      errorsData.email.push("Email can't be blank");
    } else if (!validEmailRegex.test(email)) {
      errorsData.email.push("Email address should be proper");
    }

    if (!password) {
      errorsData.password.push("Password can't be blank");
    } else if (!validPasswordRegex.test(password)) {
      errorsData.password.push(
        "Password should be between 6-15 characters long with at least one uppercase letter, one lowercase letter, and one digit"
      );
    }

    setErrors(errorsData);
  };

  useEffect(validate, [email, password]);

  const isValid = () => {
    return Object.values(errors).every((errorArray) => errorArray.length === 0);
  };

  const onLoginClick = async () => {
    setDirty({
      email: true,
      password: true,
    });
    validate();

    if (isValid()) {
      try {
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

            let orderResponse = await fetch(
              `http://localhost:5000/orders?userId=${body[0].id}`
            );
            if (orderResponse.ok) {
              let orderBody = await orderResponse.json();
              cartContext.setItemsCount(orderBody.length);
              window.location.hash = "/dashboard";
            } else {
              setMessage(
                <span className="text-danger">Failed to fetch orders</span>
              );
            }
          } else {
            setMessage(
              <span className="text-danger form-text">Invalid Credentials</span>
            );
          }
        } else {
          setMessage(
            <span className="text-danger">Errors in database connection</span>
          );
        }
      } catch (error) {
        console.error("Error during login:", error);
        setMessage(
          <span className="text-danger">
            An error occurred. Please try again later.
          </span>
        );
      }
    }
  };

  return (
    <div>
      <div className="row d-flex align-items-center" style={{ height: "90vh" }}>
        <div className="col-lg-11 mx-auto">
          <div className="card border-warning shadow-lg my-2">
            <div className="card-header border-bottom border-warning bg-light">
              <h4
                style={{ fontSize: "30px", fontWeight: 700 }}
                className="text-dark text-center my-auto p-3"
              >
                Welcome to Furlenco - Furniture Shop
              </h4>
            </div>
            <div className="card-body border-success row">
              <div className="col-lg-6">
                <div className="mb-3 my-5">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder="Email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    onBlur={(event) => {
                      setDirty({ ...dirty, [event.target.name]: true });
                      validate();
                    }}
                    className="form-control"
                  />
                  <div className="text-danger form-text">
                    {dirty.email && errors.email[0] ? errors.email : ""}
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
                    onChange={(event) => setPassword(event.target.value)}
                    onBlur={(event) => {
                      setDirty({ ...dirty, [event.target.name]: true });
                      validate();
                    }}
                    className="form-control"
                  />
                  <div className="text-danger form-text">
                    {dirty.password && errors.password[0]
                      ? errors.password
                      : ""}
                  </div>
                </div>
                <div className="row">
                  <Link
                    to="/register"
                    style={{ textDecoration: "none" }}
                    className="form-text text-primary col-10"
                  >
                    New user? Create Account
                  </Link>
                  <button
                    className="btn btn-outline-success col-2"
                    onClick={onLoginClick}
                  >
                    Login
                  </button>
                </div>
              </div>
              <img
                src="./assets/sofa.webp"
                className="col-lg-6 mx-auto"
                alt="Sofa"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Login;
