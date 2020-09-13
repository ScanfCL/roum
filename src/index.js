import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated } from "react-spring";
import ReactParticles from "react-particles-js";
import particlesConfig from "./particles-config.js";
import "./styles.scss";

function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  console.log("tset");

  function scrollDown(el) {
    if (el === 1) {
      ref1.current.scrollIntoView({ behavior: "smooth" });
    } else if (el === 2) {
      ref2.current.scrollIntoView({ behavior: "smooth" });
    } else if (el === 3) {
      ref3.current.scrollIntoView({ behavior: "smooth" });
    } else if (el === 4) {
      ref4.current.scrollIntoView({ behavior: "smooth" });
    } else if (el === 5) {
      ref5.current.scrollIntoView({ behavior: "smooth" });
    } else if (el === 6) {
      ref6.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="main">
      <div className="section1">
        งงอ่ะดิ
        <div className="next" onClick={() => scrollDown(1)}>
          Click
        </div>
      </div>
      <div className="section1" ref={ref1}>
        เรามีอะไรจาบอก
        <div className="next" onClick={() => scrollDown(2)}>
          Click
        </div>
      </div>
      <div className="section1 test1" ref={ref2}>
        เหมือนเราว่างมะ 55555+
        <div className="next" onClick={() => scrollDown(3)}>
          Click
        </div>
      </div>
      <div className="section1 test2" ref={ref3}>
        ทำให้ทั้งคืนเลยนะ
        <div className="next" onClick={() => scrollDown(4)}>
          Click
        </div>
      </div>
      <div className="section1 test3" ref={ref4}>
        ไม่มีอะไรมากหรอก
        <div className="next" onClick={() => scrollDown(5)}>
          Click
        </div>
      </div>
      <div className="section1" ref={ref5}>
        แค่อยากบอกว่า...
        <div className="next" onClick={() => scrollDown(6)}>
          Click
        </div>
      </div>
      <Particles>
        <Hero>
          <div className="container" ref={ref6}>
            <Info />
            <div className="row">
              {cards.map((card, i) => (
                <div className="column">
                  <Card>
                    <div className="card-title">{card.title}</div>
                    <div className="card-body">{card.description}</div>
                    <Image ratio={card.imageRatio} src={card.image} />
                    <div className="card-body">{card.detail}</div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
      </Particles>
    </div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop)) -
          window.pageYOffset;

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07, // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.interpolate(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        ),
      }}
    >
      {children}
    </animated.div>
  );
}

function Particles({ children }) {
  return (
    <div style={{ position: "relative" }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: "absolute",
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      />
      {children && <div style={{ position: "relative" }}>{children}</div>}
    </div>
  );
}

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      <div className="image-inner-container">
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + "%",
          }}
        >
          <div className="ratio-inner">
            <img src={src} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
      Congratulations Roum นะงับ 5555555+
      <div className="notice">(best viewed at larger screen width)</div>
    </div>
  );
}

const cards = [
  {
    title: "ยินดีด้วยน่ะงับ️",
    description: "",
    image:
      "https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/s960x960/119164339_2183036238506915_1366665758378163247_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_eui2=AeEgk0BebPo10CBohEf970WGNPtrZIVHE8U0-2tkhUcTxborgA5sU2sacDvBIHlLLd239MGGytbkqjk7iAUwOMNc&_nc_ohc=y7zwAWTmw0YAX_fnnh0&_nc_ht=scontent.fbkk5-6.fna&tp=7&oh=7cd9a0e8fb2162441841457bf4612db3&oe=5F85D2FA",
    imageRatio: 2016 / 1016,
    detail:
      "ขอยืมรูปหน่อยน้าาาาา 555555+ เราก็ไม่มีอะไรจะให้ นี่ขนาดไม่มีนะ นั่งเขียนโค้ดให้เลยนะ คิคิ -3-  ",
  },
  {
    title: "ยินดีด้วยน่ะงับ️",
    description: "",
    image:
      "https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/s960x960/118612327_2168800483263824_7932602538724008251_o.jpg?_nc_cat=102&_nc_sid=110474&_nc_eui2=AeHGcICXv4QIUSWk2HPIojftfB7n-3vin_98Huf7e-Kf_5DFiqslXVWMOsM66OVi-YnrKM2JoltREEs7hiWFBKOf&_nc_ohc=BWuWBKa-iaMAX95tbN1&_nc_ht=scontent.fbkk5-6.fna&tp=7&oh=40f23664799b48d8196923da91dce239&oe=5F826B7F",
    imageRatio: 2016 / 1016,
    detail:
      "ยินดีกับคุงอาอุ้มด้วยงับบบ ขอโทษน้าไปไม่ได้ ก็ขอให้เทอมีหน้าที่การงานที่ดีน้าา ไม่เจ็บไม่ป่วย ไม่งอแง :3",
  },
  {
    title: "ยินดีด้วยน่ะงับ️",
    description: "",
    image:
      "https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/p720x720/118347571_2165686270241912_5373219508938474219_o.jpg?_nc_cat=106&_nc_sid=110474&_nc_eui2=AeHcIE9OTZMpDk8GZp4TpPkDnz4GK7He6-GfPgYrsd7r4d3k6Ay_btxUtBf_5_-pLcRoqjfWi1jq1BaKWfp2QF7G&_nc_ohc=TCGdRAJPv2oAX_wGImB&_nc_ht=scontent.fbkk5-8.fna&tp=6&oh=6936967a1daad2209dcbe7697504a74e&oe=5F85A338",
    imageRatio: 2016 / 1016,
    detail:
      "เป็นไง อลังมั้ย 555555 ยังไงก็ เดี๋ยววันไหนกลับปากช่อง เดี๋ยวชวนเที่ยวนะงับ สู้ๆค้าบ <3 ไว้เจอกัน :) ",
  },
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
