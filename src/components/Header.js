import React from "react";

const Header = () => {
  return (
    <div>
      <header id="home-section">
        <div className="dark-overlay">
          <div className="home-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 d-none d-lg-block">
                  <h1 className="display-4">
                    Build <strong>socila profiles</strong> and gain revenue and
                    <strong>profits</strong>
                  </h1>
                  <div className="d-flex flex-row ">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end para">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Itaque perferendis vitae autem aspernatur expedita quod?
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Itaque perferendis vitae autem aspernatur expedita quod?
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="p-4 align-self-start">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="p-4 align-self-end">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Itaque perferendis vitae autem aspernatur expedita quod?
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card bg-primary text-center card-form">
                    <div className="card-body">
                      <h3>Sign Up Today</h3>
                      <p>Please Fill out this form to register</p>
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="User Name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Confirm Password"
                          />
                        </div>
                        <input
                          type="submit"
                          className="btn btn-outline-light btn-block"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
