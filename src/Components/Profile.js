import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import "../css/profile.css";

function Profile(props) {
  const userContext = useContext(UserContext);
  return (
    <div>
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>{userContext.user.currentUserName}</h4>
                    <p className="text-secondary mb-1">Furniture Buyer</p>
                    <p className="text-muted font-size-sm">
                      Bay Area, San Francisco, CA
                    </p>
                    <button
                      className="btn btn-primary"
                      style={{ marginRight: "20px" }}
                    >
                      Follow
                    </button>
                    <button className="btn btn-outline-primary">Message</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {userContext.user.currentUserName}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary"></div>
                </div>
                <hr />

                <div className="row">
                  <div className="col-sm-12 text-center">
                    <a
                      className="btn btn-outline-dark"
                      target="__blank"
                      href="#"
                    >
                      Edit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
