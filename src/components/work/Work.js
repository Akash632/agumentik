import React from "react";
import "./Work.css";
function Work() {
  return (
    <div className="work-main-container">
        <h1 className="work-heading">What We're Offering</h1>
      <div className="work-bg-container">
        <div className="work-bg-card">
          <div className="work-img-container">
            <img src="https://as2.ftcdn.net/v2/jpg/02/72/52/83/1000_F_272528399_ZBvXENrNYUVhI2PAeMqClaDSxaixb9H0.jpg" />
          </div>
          <div className="work-text-container">
            <h3>Co-Business Analysis</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form.
            </p>
          </div>
        </div>
        <div className="work-bg-card">
          <div className="work-img-container">
            <img src="https://as2.ftcdn.net/v2/jpg/00/94/85/13/1000_F_94851378_lSzbBF39H6yb1zM57Z21XNAvrtuA48fg.jpg" />
          </div>
          <div className="work-text-container">
            <h3>Co-Business Analysis</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form.
            </p>
          </div>
        </div>
        <div className="work-bg-card">
          <div className="work-img-container">
            <img src="https://as1.ftcdn.net/v2/jpg/02/88/71/12/1000_F_288711262_Em752YbWUI8rXPkfqfwiaph4Aw42zpL4.jpg" />
          </div>
          <div className="work-text-container">
            <h3>Business Consulting</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
