import React from "react";
import "./work.css";
export default function Work() {
  return (
    <>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Pulsus Group India</span>
            <span className="Year-Passedout">March 2022 - present</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Web Designer</span>
          <span className="description-position">
            <ul>
              <li> Designing websites</li>
              <li> Working with HTML, CSS, JS and bootstrap</li>
              <li> Maintaining Webpages accuracy</li>
            </ul>
          </span>
        </div>
      </div>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Hindustan Shipyard Limited</span>
            <span className="Year-Passedout">March 2021 - March 2022</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Graduate Apprentice Trainee</span>
          <span className="description-position">
            <ul>
              <li>
                {" "}
                Worked in IT Department under the supervision of Manager (IT).
              </li>
              <li> Learned few basic concepts of networking and database.</li>
              <li>
                {" "}
                Designed Quiz applications in the organization with SQL
                database.
              </li>
              <li>
                {" "}
                Developed a basic chat app using flutter with firebase as a
                backend.
              </li>
              <li> Learned web development in the organization.</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
}
