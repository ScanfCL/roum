import React from "react";
import styled from "styled-components";

import { Snow } from "../components/SnowEffect";
import { MenuCard } from "../components/MenuCard";

const Home = ({ className }) => {
  return (
    <div className={className}>
      <Snow />
      <div className="wrapper-menu">
        <div className="title">Hi Roum :)</div>
        <MenuCard
          text="Merry Christmas & Happy New Year"
          date="25 Dec 2020"
          to="hny"
        />
        <MenuCard text="Congratulation" date="14 Sep 2020" to="congrat" />
      </div>
    </div>
  );
};

const StyledHome = styled(Home)`
  > .wrapper-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    > .title {
      font-size: 50px;
      color: white;
      margin-bottom: 70px;
      font-weight: bold;
    }
  }
`;

export { StyledHome as Home };
