import React from "react";
import {
  FaGithub,
  FaCircleNotch,
  FaAndroid,
  FaNetworkWired,
} from "react-icons/fa";

const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },

    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 4,
      icon: <FaAndroid className="commonIcons" />,
      heading: "Mobile App Devlopment",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting  industry. simply dummy",
    },
    {
      id: 5,
      icon: <FaNetworkWired className="commonIcons" />,
      heading: "API Devlopment",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting  industry. simply dummy",
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

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain" key={info?.id}>
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
