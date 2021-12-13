import styled, {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fd1015;
    color: #FBFBFB;
    font-family: 'DM Sans', sans-serif;
    font-size:18px;
    font-weight:500;
    line-height:1.2;
    width: 100vh;
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

export const ImageContainer = styled.div`
  width: 800px;
  height: 533px;
  position: relative;
  display: flex;
  flex-wrap: wrap;

`
export const Wrapper = styled.section`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
