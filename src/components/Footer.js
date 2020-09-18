import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="main-footer" className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="py-4">
                <h1 className="h3">LoopLAB</h1>
                <p>Copyright &copy;</p>
                <button
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#contactModal"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
