import React from "react";

export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="University-Name">Mobile Application </span>
            <span className="University-Degree">
              Technologies Used: Flutter and Firebase{" "}
            </span>
          </div>{" "}
          <div>
            <span className="Year-Passedout">2021</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="University-Name">
              College project on Sentimental Analysis of Tweets for Movie
              Success Rate Prediction using Data Science{" "}
            </span>
            <span className="University-Degree">
              Technologies Used: DataMining, Hadoop{" "}
            </span>
          </div>{" "}
          <div>
            <span className="Year-Passedout">2020</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="University-Name">Internship on Wordpress </span>
            <span className="University-Degree">
              Technologies used: HTML, CSS, Bootstrap, PHP, Themes and Plugins{" "}
            </span>
          </div>{" "}
          <div>
            <span className="Year-Passedout">2019</span>
          </div>
        </div>
      </div>
    </>
  );
}
