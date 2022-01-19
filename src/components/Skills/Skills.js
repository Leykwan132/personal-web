import React from "react";
import { Typography, Divider } from "antd";
import "./Skills.css";
import { Fade } from "react-awesome-reveal";
import BubbleUI from "react-bubble-ui";

export const Skills = () => {
  const options = {
    size: 180,
    minSize: 20,
    gutter: 8,
    provideProps: true,
    numCols: 6,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 5,
  };
  const { Paragraph, Text, Title } = Typography;
  return (
    <Fade>
      <div className="title">
        <Typography>
          <Title>Skills.</Title>
        </Typography>
      </div>
      <BubbleUI options={options} className="myBubbleUI">
        <div className="child">
          <p>123</p>
        </div>
      </BubbleUI>

      <Divider />
    </Fade>
  );
};
