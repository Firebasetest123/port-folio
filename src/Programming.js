import React from "react";
import "./programming.css";
export default function Programming() {
  const value = [
    {
      text: "c",
      percentage: 60
    },
    {
      text: "java",
      percentage: 50
    },
    {
      text: "WebDevelopment",
      percentage: 60
    },
    {
      text: "Android",
      percentage: 60
    },
    {
      text: "Flutter",
      percentage: 50
    },
    {
      text: "Dart",
      percentage: 50
    },
    {
      text: "Firebase",
      percentage: 60
    },
    {
      text: "Data Mining",
      percentage: 30
    },
    {
      text: "Artificial Intelligence",
      percentage: 40
    },
    {
      text: "Machine Learning",
      percentage: 30
    }
  ];
  return (
    <>
      <div>
        <div className="row">
          {value.map((value, index) => {
            return (
              <>
                <div className="col-lg-6 col-mg-6 col-sm-12 my-2">
                  <span className="language">{value.text} </span>
                  <div className="progress-some">
                    <div
                      className="progress-new"
                      style={{ width: `${value.percentage}%` }}
                    >
                      {" "}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
