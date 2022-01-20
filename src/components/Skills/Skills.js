import React from "react";
import { Image, Typography, Divider } from "antd";
import "./Skills.css";
import { Fade } from "react-awesome-reveal";
import MyPhoto from "../../images/skills.png";

export const Skills = () => {
  const { Paragraph, Text, Title } = Typography;
  return (
    <Fade>
      <Typography>
        <Title>Skills.</Title>
      </Typography>
      <Image width={600} src={MyPhoto} preview={false} />
      <Divider />
    </Fade>
  );
};
