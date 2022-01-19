import React from "react";
import { Image, Typography, Popover, Divider } from "antd";
import MyPhoto from "../../images/picture.jpeg";
import { Chrono } from "react-chrono";
import { Fade } from "react-awesome-reveal";

export const Timeline = () => {
  const items = [
    {
      title: "June 2000",
      cardTitle: "Born in Malaysia",
      url: "https://www.britannica.com/place/Malaysia",
      cardSubtitle: "Please check out Kota Bharu, Kelantan.",
      media: {
        type: "IMAGE",
        source: {
          url: "data:image/jpeg;base64,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",
        },
      },
    },
    {
      title: "Dec 2017",
      cardTitle: "Done with High School",
      url: "https://www.facebook.com/SMJKChungHwaKotaBharuKelantan",
      cardSubtitle: "Some of my best times in my life at SMJK Chung Hwa.",
      media: {
        type: "IMAGE",
        source: {
          url: "http://online.anyflip.com/qufoe/accountlogo.jpg",
        },
      },
    },
    {
      title: "May 2020",
      cardTitle: "Weird year for college completion at INTI Subang.",
      url: "https://newinti.edu.my/campuses/inti-international-college-subang/",
      cardSubtitle: "Met some awesome people here.",
      media: {
        type: "IMAGE",
        source: {
          url: "data:image/jpeg;base64,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",
        },
      },
    },
    {
      title: "Aug 2020",
      cardTitle: "New start at UW-Madison.",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/assets/v3/editorial/f/01/f01e4fdd-4475-5819-98c0-4e306a1942bd/5f74dc0bb2f76.image.jpg?resize=1200%2C800",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];
  const { Paragraph, Text, Title } = Typography;
  return (
    <div>
      <Fade>
        <Typography className="timeline-title">
          <Title>Timeline.</Title>
        </Typography>
        <div style={{ width: "auto", height: "450px" }}>
          <Chrono items={items} mode="HORIZONTAL" />
        </div>
        <Divider />
      </Fade>
    </div>
  );
};
