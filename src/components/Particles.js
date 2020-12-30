import ReactParticles from "react-particles-js";
import particlesConfig from "../particles-config";
import React from "react";

export default function Particles({ children }) {
  return (
    <div style={{ position: "relative", height: "100%" }}>
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
