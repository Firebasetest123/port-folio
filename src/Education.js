import React from "react";
import "./education.css";
export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="University-Name">
              GITAM University, Visakhapatnam{" "}
            </span>
            <span className="University-Degree">
              Bachelor Of Technology In Computer Science{" "}
            </span>
          </div>{" "}
          <div>
            <span className="Year-Passedout">2016-2020 </span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="University-Name">
              Narayana Junior College, Visakhapatnam{" "}
            </span>
            <span className="University-Degree">Intermediate </span>
          </div>{" "}
          <div>
            <span className="Year-Passedout">2016-2020 </span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="University-Name">
              Pereira English Noble School, Visakhapatnam{" "}
            </span>
            <span className="University-Degree">X class </span>
          </div>{" "}
          <div>
            <span className="Year-Passedout">2016-2020 </span>
          </div>
        </div>
      </div>
    </>
  );
}
