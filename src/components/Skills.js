import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimationControl/AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
const Skills = () => {
  const [header] = React.useState({
    mainHeader: "CHOOSE A PLAN",
    subHeading: "Skills",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "React JS",
      value: 80,
    },
    {
      id: 2,
      heading: "Node JS",
      value: 70,
    },
    {
      id: 3,
      heading: "HTML & CSS",
      value: 80,
    },
    {
      id: 4,
      heading: "React Native",
      value: 75,
    },
    {
      id: 5,
      heading: "MySql",
      value: 50,
    },
    {
      id: 6,
      heading: "Express JS",
      value: 65,
    },
  ]);

  return (
    <div className="prices" id="skills">
      <div className="container">
        <div className="common">
          {/* <h3 className="heading">{header.mainHeader}</h3> */}
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((item) => (
            <div
              className="col-4"
              style={{
                marginBottom: "35px",
                height: "200px",
              }}
            >
              <div
                style={{
                  width: "40%",
                  height: "100%",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <h2 style={{ color: "#ff4a57" }}>{item?.heading} </h2>
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={item?.value}
                  duration={1.4}
                  easingFunction={easeQuadInOut}
                  // repeat
                >
                  {(value) => {
                    const roundedValue = Math.round(value);
                    return (
                      <CircularProgressbar
                        value={value}
                        text={`${roundedValue}%`}
                        /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                        styles={buildStyles({
                          pathTransition: "none",
                        })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
