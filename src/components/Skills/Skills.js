import React from "react";
import { Image, Typography, Divider } from "antd";
import "./Skills.css";
import { Fade } from "react-awesome-reveal";
import MyPhoto from "../../images/skills.png";

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
      <Image width={700} src={MyPhoto} preview={false} />
      <Divider />
    </Fade>
  );
};
