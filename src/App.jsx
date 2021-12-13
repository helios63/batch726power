import { GlobalStyle, ImageContainer, Wrapper } from "./styles";
import Header from "./components/header";
import Footer from "./components/footer";
import ImgBox from "./components/imgBox";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper>
        <ImageContainer>
          <ImgBox />
        </ImageContainer>
      </Wrapper>
    </>
  );
}

export default App;
