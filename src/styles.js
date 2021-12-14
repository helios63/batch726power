import styled, {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@keyframes glow {
  0% { box-shadow: rgb(255,255,255) 0 0 0px; }
  100% { box-shadow: rgb(255,255,255) 0 10px 100px; }
}
  body {
    background-color: #fd1015;
    color: #FBFBFB;
    font-family: 'DM Sans', sans-serif;
    font-size:18px;
    font-weight:500;
    line-height:1.2;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
`
export const Marginals = css`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  width: 100vw;
  align-items: center;
  z-index: 1;
`

export const ImageContainer = styled.div.attrs(({$isTogether}) => ({
  style: {
    animation: $isTogether ? 'glow 3s infinite alternate' : 'none'
  }
}))`
  width: 800px;
  height: 500px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`
export const Wrapper = styled.section.attrs(({$color}) => ({
  style: {
    backgroundColor: `hsl(${$color}, 80%, 45%)`
  }
}))`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
export const Button = styled.button`
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  background: none;
  border: 2px solid #FBFBFB;
  border-radius: 100%;
  color: #FBFBFB;
  cursor: pointer;
  font-size: 34px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 25px 0 20px;
  width:300px;
  z-index:1;

  @media (max-width: 700px) {
    font-size: 24px;
    width: 200px;
  }
`
