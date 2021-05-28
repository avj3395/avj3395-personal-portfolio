import React from "react";
import {
  FaGithub,
  FaCircleNotch,
  FaAndroid,
  FaNetworkWired,
} from "react-icons/fa";
import { VscDebugAlt } from "react-icons/vsc";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text: "I do services which includes web development, API development, testing and debugging, web design & mobile app development ",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text: "Closely work with enterprise level customers to create outstanding high performing and secure custom websites.",
    },

    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text: "Make a positive impact on clients, co-workers and internet using my skills and experience to design compelling and attractive websites.",
    },
    {
      id: 4,
      icon: <FaAndroid className="commonIcons" />,
      heading: "Mobile App Devlopment",
      text: "Mobile app developer, by using REACT NATIVE. REACT NATIVE help to maximizing javascript to build excellent, cross -platform native app for android and ios.",
    },
    {
      id: 5,
      icon: <FaNetworkWired className="commonIcons" />,
      heading: "API Devlopment",
      text: "is an application programming interface that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.",
    },
    {
      id: 6,
      icon: <VscDebugAlt className="commonIcons" />,
      heading: "Testing and Debugging",
      text: "Debug code is computer code introduced to a computer program to test for errors or to help determine the cause of an error.",
    },
  ]);
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>
          <Carousel infiniteLoop={true} autoPlay={true}>
            <div className="row bgMain">
              {state.slice(0, 3).map((info) => (
                <div className="col-4 bgMain" key={info?.id}>
                  <div className="services__box">
                    {info.icon}
                    <div className="services__box-header">{info.heading}</div>
                    <div className="services__box-p">{info.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row bgMain">
              {state.slice(3, 5).map((info) => (
                <div className="col-4 bgMain" key={info?.id}>
                  <div className="services__box">
                    {info.icon}
                    <div className="services__box-header">{info.heading}</div>
                    <div className="services__box-p">{info.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Services;
