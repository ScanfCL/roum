import React from "react";
import { useSpring, animated, interpolate } from "react-spring";
import { useGesture } from "react-with-gesture";
import "./styles.css";

const Item = ({ info }) => {
  const [bind, { delta, down }] = useGesture();
  const { x, bg, size } = useSpring({
    x: down ? delta[0] : 0,
    bg: `linear-gradient(120deg, ${
      delta[0] < 0 ? "#f093fb 0%, #f5576c" : "#96fbc4 0%, #f9f586"
    } 100%)`,
    size: down ? 1.1 : 1,
    immediate: (name) => down && name === "x",
  });

  return (
    <animated.div {...bind()} className="item" style={{ background: bg }}>
      <div className="inner-content">{info.text}</div>
      <animated.div
        className="fg"
        style={{
          transform: interpolate(
            [x, size],
            (x, s) => `translate3d(${x}px,0,0) scale(${s})`
          ),
          background: info.color,
        }}
      >
        {info.title}
      </animated.div>
    </animated.div>
  );
};

export default function Slider({ data }) {
  return (
    <div className="root">
      {data.map((d) => (
        <Item info={d} />
      ))}
    </div>
  );
}
