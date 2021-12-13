import { GlobalStyle, ImageContainer, Wrapper } from "./styles";
import Header from "./components/header";
import Footer from "./components/footer";
import ImgBox from "./components/imgBox";
import React, { useState } from "react";

const matrix = [
  [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0],
  [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1],
  [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2],
  [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3],
  [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4]
]

const App = () => {
  const [distance, setDistance] = useState(1)

  const easing = (num) => Math.pow(num, 3)

  const calculateDistance = ([x, y]) => {
    const center = [window.innerWidth / 2, window.innerHeight / 2 ]
    const maxHypot = Math.hypot(center[0], center[1])
    const hypot = Math.hypot(center[0] - x, center[1] - y)
    const distance = hypot / maxHypot
    const easeDistance = easing(distance)
    setDistance(easeDistance)
  }
  const handleMove = ({clientX, clientY}) => {
    calculateDistance([clientX, clientY])
  }

  const handleTouchMove = ({touches}) => {
    calculateDistance([touches[0].clientX, touches[0].clientY])
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper
        onMouseMove={handleMove}
        onTouchMove={handleTouchMove}
        $color={Math.round(5 - distance * 40)} >
        <ImageContainer $isTogether={distance < 0.001}>
          {matrix.map(([x,y], index) => (
            <ImgBox key={index} x={x} y={y} percent={distance}/>
          ))}
        </ImageContainer>
      </Wrapper>
    </>
  );
}

export default App;
