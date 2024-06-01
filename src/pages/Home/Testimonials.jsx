import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import lydiaImg from "../../assets/lydia.jpg";
import miriumImg from "../../assets/mirium.jpg";
import victorImg from "../../assets/victor.jpg";

function Testimonials() {
  return (
    <section className="section">
      <div className="title">
        <h2>Testimonials</h2>
      </div>
      <div className="section-testimonal">
        <div className="section2">
          <div className="section-center">
            <img src={lydiaImg} alt="lydia a student" />
            <h3 className="name-para">Lydia wambui</h3>
            <h2 className="name-para1">*Student*</h2>
          </div>
          <div className="testimony">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              pariatur eius officiis velit quibusdam possimus adipisci.
              Accusantium sit aperiam praesentium reprehenderit, nobis, repellat
              vero provident dignissimos ex inventore eos suscipit.
            </p>
          </div>
        </div>
        <div className="section2" id="out">
          <div className="section-center">
            <img src={miriumImg} alt="Mirium a VC" />
            <h3 className="name-para">Mirium Mugure</h3>
            <h2 className="name-para1">*COD*</h2>
          </div>
          <div className="testimony">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              pariatur eius officiis velit quibusdam possimus adipisci.
              Accusantium sit aperiam praesentium reprehenderit, nobis, repellat
              vero provident dignissimos ex inventore eos suscipit.
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="section-center">
            <img src={victorImg} alt="Victor a student leaader" />
            <h3 className="name-para">Victor Tanui</h3>
            <h2 className="name-para1">*Leader*</h2>
          </div>
          <div className="testimony">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
              pariatur eius officiis velit quibusdam possimus adipisci.
              Accusantium sit aperiam praesentium reprehenderit, nobis, repellat
              vero provident dignissimos ex inventore eos suscipit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
