import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Shape = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  background-color: crimson;
  clip-path: polygon(63% 0, 100% 0, 100% 100%, 51% 100%);
`;
const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
      <Shape />
    </Container>
  );
};
export default App;
