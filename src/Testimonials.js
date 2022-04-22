import React from "react";
import "./testimonials.css";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Raj",
      text: "This guy is incredibly awesome"
    },
    {
      name: "Vikram",
      text: "Good Performance"
    },
    {
      name: "Ram",
      text: "Excellent"
    }
  ];
  return (
    <>
      <div>
        <div className="row mx-5">
          {testimonials.map((value) => {
            return (
              <div className="col-lg-4 col-sm-12 col-md-6 my-4">
                <div className="card shadow testimonial-card d-flex flex-column">
                  <span className="description">{value.text}</span>
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="name">{value.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
