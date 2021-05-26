import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Akshay V J" },
    { id: 2, title: "Email:", text: "avj3395@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 9744649326" },
    { id: 4, title: "Linkedin", text: "akshay-v-j-5b4b501b5" },
  ]);
  return (
    <div className="about" id="about-us">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src={require("../images/man-01.png")} alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                I am frontend developer, designing and building responsive web
                design and mobile apps. Proficient in REACT, HTML and CSS.​
              </div>
              <div className="about__info-p2">
                I love to work in User Experience and User Interface designing,
                because i love to solve the design problem and find easy and
                better solution to solve it.. I experience, i have been working
                as visual designer from...
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6" key={info?.id}>
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
