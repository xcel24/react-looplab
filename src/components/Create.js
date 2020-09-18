import React from "react";
import logo from "../img/create-section1.jpg";

const Create = () => {
  return (
    <div>
      <section id="create-head-section" className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="py-5">
                <h1 className="display-4">Create</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  perspiciatis distinctio nam eaque quis odio atque, error ad in
                  quod.
                </p>
                <a href="#" className="btn btn-outline-light">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="create-section" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Create Your Passion</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
                debitis deleniti laborum blanditiis incidunt facere, quae
                voluptatum aspernatur reprehenderit, magni dolorem dolores.
              </p>
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
            <div className="col-md-6">
              <img
                src={logo}
                alt=""
                className="img-fluid mg-3 rounded-circle"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
