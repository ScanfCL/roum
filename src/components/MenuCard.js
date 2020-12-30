import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useOnClickOutside } from "../utilities/hooks/useOnClickOutside";
import hat from "../statics/images/santa-hat.png";
import { useMain } from "../index";

const MenuCard = ({ className, text, date, to, ...props }) => {
  const ref = useRef();
  const { setMuted } = useMain();
  const [isFlip, setIsFlip] = useState(false);

  useOnClickOutside(ref, () => setIsFlip(false));

  return (
    <div className={className} {...props}>
      <div className={`flip-card-inner ${isFlip ? "flip" : ""}`} ref={ref}>
        <div className="flip-card-front" onClick={() => setIsFlip(true)}>
          <div className="text">{text}</div>
          <img className="hat" src={hat} />
          <div className="bow-x" />
          <div className="bow-y" />
        </div>
        <div className="flip-card-back">
          <div>{date}</div>
          <Link to={to}>
            <div className="view">View</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const StyledMenuCard = styled(MenuCard)`
  width: 200px;
  height: 200px;
  background: transparent;
  margin-bottom: 50px;
  font-size: 20px;
  perspective: 1000px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background: #165b33;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    padding: 6px;
    border-radius: 10px;

    > .text {
      z-index: 1;
      background-color: #bb2528;
      border-radius: 10px;
      opacity: 1;
      transition: all 0.6s;
    }

    > .bow-x {
      background-color: #bb2528;
      width: 55px;
      height: 100%;
      position: absolute;
      top: 0;
    }
    > .bow-y {
      background-color: #bb2528;
      width: 100%;
      height: 55px;
      position: absolute;
      left: 0;
    }

    > .hat {
      position: absolute;
      width: 70px;
      top: -30px;
      left: -35px;
      transform: rotate(-30deg);
    }
  }

  .flip-card-back {
    background-color: #f8b229;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    flex-direction: column;
    padding: 6px;
    border-radius: 10px;
    transform: rotateY(180deg);
    border-radius: 10px;

    > a {
      text-decoration: unset;
      color: white;
      z-index: 2;
    }
    > a > .view {
      background: #ea4630;
      padding: 5px;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 10px;
    }
  }

  .flip-card-inner {
    &.flip {
      transform: rotateY(180deg);

      .text {
        opacity: 0;
        pointer-events: none;
      }
    }
  }
`;

export { StyledMenuCard as MenuCard };
