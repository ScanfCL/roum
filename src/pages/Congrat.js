import React, { useRef } from "react";
import Particles from "../components/Particles";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Image from "../components/Image";
import Info from "../components/Info";
import { cards } from "../utilities/constances";
import "../index.css";

const Congrat = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

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
};

export { Congrat };
