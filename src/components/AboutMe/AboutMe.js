import React from "react";
import { Image, Typography, Popover, Divider } from "antd";
import MyPhoto from "../../images/picture.jpeg";
import "./AboutMe.css";
import QueueAnim from "rc-queue-anim";
import { Fade } from "react-awesome-reveal";

const contentName = (
  <div>
    <p>Made in Malaysia on Earth.</p>
  </div>
);
const contentOccu = (
  <div>
    <p>Developed this page using React JS.</p>
  </div>
);
const contentMajor = (
  <div>
    <p>Expected to graduate in Spring 2024.</p>
  </div>
);
export const AboutMe = () => {
  const { Paragraph, Text, Title } = Typography;
  return (
    <Fade>
      <div className="title">
        <Typography>
          <Title>Me.</Title>
        </Typography>
      </div>
      <div className="aboutContainer">
        <div className="profilePic">
          <Image style={{ borderRadius: "13%" }} width={400} src={MyPhoto} />
        </div>
        <div className="personalInfo">
          <div style={{ alignItems: "center" }}>
            <Typography>
              <Paragraph strong>
                I'm{" "}
                <Popover content={contentName} title="Ley Kwan Choo">
                  <Text className="clickable" code>
                    Ley Kwan Choo
                  </Text>
                </Popover>
              </Paragraph>
              <Paragraph strong>
                I'm a{" "}
                <Popover content={contentOccu} title="Software Dev.">
                  <Text className="clickable" code>
                    Software Dev.
                  </Text>{" "}
                </Popover>
                based in Madison, WI
              </Paragraph>
              <Paragraph strong>
                I'm currently pursuing
                <Popover content={contentMajor} title="B.S. in Data Science">
                  <Text className="clickable" code>
                    B.S. in Data Science
                  </Text>
                </Popover>
                at University of Wisconsin Madison.
              </Paragraph>
            </Typography>
          </div>
        </div>
      </div>
      <Divider />
    </Fade>
  );
};
