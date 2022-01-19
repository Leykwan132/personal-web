import React from "react";
import "./PageBackground.css";
import Particles from "react-tsparticles";
import { Typography } from "antd";
import TypeAnimation from "react-type-animation";

const particlesOption = {
  fullScreen: {
    enable: false,
    zIndex: -999,
  },
  background: {
    color: {
      value: "#043564",
    },
    image:
      "url('http://vincentgarreau.com/particles.js/assets/img/kbLd9vb_new.gif')",
    position: "0 50%",
    repeat: "no-repeat",
    size: "60%",
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        mode: "grab",
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 8,
        size: 40,
      },
      grab: {
        distance: 200,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: {
        value: "#ffffff",
      },
      distance: 150,
      opacity: 0.4,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      direction: "left",
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      speed: 6,
      straight: true,
    },
    opacity: {
      value: 0.5,
      animation: {
        speed: 1,
        minimumValue: 0.1,
      },
    },
    shape: {
      options: {
        star: {
          sides: 5,
        },
      },
      type: "star",
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 1,
        max: 4,
      },
      animation: {
        speed: 40,
        minimumValue: 0.1,
      },
    },
  },
};
export const PageBackground = () => {
  const { Paragraph, Text, Title } = Typography;

  return (
    <div className="page-container">
      <Particles className="page-particles" options={particlesOption} />
      <div className="page-text-container">
        <TypeAnimation
          className="page-text"
          cursor={true}
          sequence={[
            "Welcome to my personal website.",
            2000,
            "Scroll down for more.",
            2000,
          ]}
          wrapper="div"
          repeat={Infinity}
        />
        <TypeAnimation
          className="page-text"
          cursor={true}
          sequence={[
            "This Web was started on Jan 18th 2022.",
            2000,
            "Cheers.",
            2000,
          ]}
          wrapper="div"
          repeat={Infinity}
        />
      </div>
    </div>
  );
};
