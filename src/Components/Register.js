import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { Link, useHistory } from "react-router-dom";

let Register = (props) => {
  let [state, setState] = useState({
    email: "",
    password: "",
    fullName: "",
    gender: "",
    country: "",
  });

  let userContext = useContext(UserContext);
  let [errors, setErrors] = useState({
    email: [],
    password: [],
    fullName: [],
    gender: [],
    country: [],
  });

  let [dirty, setDirty] = useState({
    email: false,
    password: false,
    fullName: false,
    gender: false,
    country: false,
  });

  let [message, setMessage] = useState("");
  let [showSuccess, setShowSuccess] = useState(false);

  let [countries] = useState([
    { id: 1, countryName: "India" },
    { id: 2, countryName: "USA" },
    { id: 3, countryName: "UK" },
    { id: 4, countryName: "China" },
    { id: 5, countryName: "Russia" },
    { id: 6, countryName: "Japan" },
    { id: 7, countryName: "Germany" },
    { id: 8, countryName: "France" },
  ]);

  let validate = () => {
    let errorsData = {};
    const validEmailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    const validPasswordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15})/;

    // email
    errorsData.email = [];
    if (!state.email) {
      errorsData.email.push("Email can't be blank");
    } else if (!validEmailRegex.test(state.email)) {
      errorsData.email.push("Email address should be proper");
    }

    // password
    errorsData.password = [];
    if (!state.password) {
      errorsData.password.push("Password can't be blank");
    } else if (!validPasswordRegex.test(state.password)) {
      errorsData.password.push(
        "Password should be between 6-15 characters long with at least one uppercase letter, one lowercase letter, and one digit"
      );
    }

    // fullName
    errorsData.fullName = [];
    if (!state.fullName) {
      errorsData.fullName.push("Full name can't be blank");
    }

    // gender
    errorsData.gender = [];
    if (!state.gender) {
      errorsData.gender.push("Please select the gender");
    }

    // country
    errorsData.country = [];
    if (!state.country) {
      errorsData.country.push("Country can't be blank");
    }

    setErrors(errorsData);
  };

  useEffect(validate, [state]);

  useEffect(() => {
    document.title = "Register - Furlenco";
  }, []);

  let isValid = () => {
    let valid = true;
    for (let control in errors) {
      if (errors[control].length > 0) {
        valid = false;
      }
    }
    return valid;
  };

  let onRegisterClick = async () => {
    let dirtyData = dirty;
    Object.keys(dirty).forEach((control) => {
      dirtyData[control] = true;
    });
    setDirty(dirtyData);
    validate();
    console.log(state);

    if (isValid()) {
      let response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          password: state.password,
          fullName: state.fullName,
          gender: state.gender,
          country: state.country,
        }),
      });
      if (response.ok) {
        let body = await response.json();
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          window.location.hash = "/";
        }, 3000);
      } else {
        setMessage(
          <span className="text-danger">Errors in database connection</span>
        );
      }
    } else {
      setMessage(<span className="text-danger">Errors</span>);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setDirty((prevState) => ({
      ...prevState,
      [name]: true,
    }));
    validate();
  };

  return (
    <div>
         {showSuccess && (
        <div className="alert alert-success" role="alert">
          Registered successfully! Please Login
        </div>
      )}
      <div className="row d-flex align-items-center" style={{ height: "90vh" }}>
        <div className="col-lg-11 mx-auto">
          <div className="card border-warning shadow my-2">
            <div className="card-header border-bottom border-warning">
              <h4
                style={{ fontSize: "30px", fontWeight: "700" }}
                className="text-dark text-center my-auto p-3"
              >
                Welcome to Furlenco - Furniture Shop
              </h4>
            </div>

            <div className="card-body border-primary row">
              <div className="col-lg-6">
                <div className="mb-3 row">
                  <div className="col-lg-4">
                    <label htmlFor="fullName" className="col-form-label">
                      Full Name
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={state.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                    />
                    <div className="text-danger">
                      {dirty["fullName"] && errors["fullName"][0]
                        ? errors["fullName"]
                        : ""}
                    </div>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-lg-4 col-form-label">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                    />
                    <div className="text-danger">
                      {dirty["email"] && errors["email"][0]
                        ? errors["email"]
                        : ""}
                    </div>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-lg-4">
                    <label htmlFor="password" className="col-form-label">
                      Password
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="form-control"
                    />
                    <div className="text-danger">
                      {dirty["password"] && errors["password"][0]
                        ? errors["password"]
                        : ""}
                    </div>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-lg-4">
                    <label htmlFor="gender" className="col-form-label">
                      Gender
                    </label>
                  </div>
                  <div className="col-lg-8 mt-2">
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        name="gender"
                        id="male"
                        className="form-check-input"
                        value="male"
                        checked={state.gender === "male"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        className="form-check-input"
                        value="female"
                        checked={state.gender === "female"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        name="gender"
                        id="notSay"
                        className="form-check-input"
                        value="Prefer not to say"
                        checked={state.gender === "Prefer not to say"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <label htmlFor="notSay">Prefer not to say</label>
                    </div>
                    <div className="text-danger">
                      {dirty["gender"] && errors["gender"][0]
                        ? errors["gender"]
                        : ""}
                    </div>
                  </div>
                </div>

                <div className="mb-3 row">
                  <div className="col-lg-4">
                    <label htmlFor="country" className="col-form-label">
                      Country
                    </label>
                  </div>
                  <div className="col-lg-8">
                    <select
                      name="country"
                      id="country"
                      className="form-select"
                      value={state.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="" selected disabled>
                        Select a country
                      </option>
                      {countries.map((country) => (
                        <option value={country.countryName} key={country.id}>
                          {country.countryName}
                        </option>
                      ))}
                    </select>
                    <div className="text-danger">
                      {dirty["country"] && errors["country"][0]
                        ? errors["country"]
                        : ""}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <Link
                    to={"/"}
                    style={{ textDecoration: "none" }}
                    className="form-text text-primary col-10"
                  >
                    Already a user? Log in
                  </Link>
                  <button className="lg-btn col-2" onClick={onRegisterClick}>
                    Register
                  </button>
                </div>
              </div>
              <img src="./assets/sofa.webp" className="col-lg-6 mx-auto" />
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Register;
