import React from "react";
import styled from "styled-components";

const Square = styled.div`
  width: 60px;
  height: 60px;
  background: #4e86c2;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;
  animation: square 11s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #ea9696;
  opacity: 0.8;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;
  animation: circle 18s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(70vw, -50vh);
    }
  }
`;

const Rect = styled.div`
  width: 50px;
  height: 100px;
  background: #669966;
  opacity: 0.5;
  position: absolute;
  top: 400px;
  left: -100px;
  z-index: -1;
  animation: rect 15s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(100vw, -30vh);
    }
  }
`;

function AnimatedShapes() {
  return (
    <>
      <Square />
      <Circle />
      <Rect />
    </>
  );
}

export default AnimatedShapes;
