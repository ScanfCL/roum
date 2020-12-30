import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";

import { Snow } from "../components/SnowEffect";
import { useMain } from "../index";
import Slide from "../components/Slide/Slide";

const HNY = ({ className }) => {
  const { muted, setMuted } = useMain();

  const data = [
    {
      title: "Slide Me :)",

      text:
        "เราดูว่างอีกแล้วช้ะ 55555 แทบไม่ได้คุยด้วยเลยยย เรามีพลังบวกมาให้อาอุ้มซักหน่อย 🎄",
      color: "#f8b229",
    },
    {
      title: "Me too :)",
      text:
        "เราก็ไม่คิดว่าอาอุ้มจะเข้ามาดูหรอก แต่ก็ดีใจนะ ที่เทอเข้ามาดู ยังไงวันนี้ก็เป็นวันสุดท้ายของปี 2020 แล้ว",
      color: "#146b3a",
    },
    {
      title: "Me again :)",
      text:
        "ก็ขอให้อาอุ้มมีความสุขมากๆนะฮับ กับปีใหม่ 2021 ขอให้มีสิ่งดีๆ ผ่านเข้ามาในชีวิตอาอุ้มน้า",
      color: "#ea4630",
    },
    {
      title: "Last thing ",
      text: "อยากจีบเทอจังเล้ยยย 😳",
      color: "#bb2528",
    },
  ];

  return (
    <div className={className}>
      <Snow />
      <div
        className="click-me"
        onClick={() => setMuted((oldState) => !oldState)}
      >
        Click Me!
      </div>
      {!muted && (
        <>
          <div className="wrapper-slider">
            <Slide data={data} />
          </div>
          <div className="wrapper-video">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=WFtlIOoVQ14"
              playing
              muted={muted}
              loop
              width={"100%"}
              style={{ opacity: 1, pointerEvent: "none" }}
            />
          </div>
        </>
      )}
    </div>
  );
};

const StyledHNY = styled(HNY)`
  > .click-me {
    background: white;
    width: 300px;
    height: 100px;
    margin: 20px auto;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > .wrapper-slider {
    position: relative;
  }

  > .wrapper-video {
    margin-top: 100px;
    opacity: 0;
    pointer-events: none;
  }
`;

export { StyledHNY as HNY };
