import React from "react";
import logo from "../img/explore-section1.jpg";

const Explore = () => {
  return (
    <div>
      <section id="explore-head-section">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="py-5">
                <h1 className="display-4">Explore</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  perspiciatis distinctio nam eaque quis odio atque, error ad in
                  quod.
                </p>
                <a href="#" className="btn btn-outline-secondary">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="explore-section" className="bg-light text-muted py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={logo}
                alt="Loading"
                className="img-fluid mb-3 rounded-circle"
              />
            </div>
            <div className="col-md-6">
              <h3>Explore & Connect</h3>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
