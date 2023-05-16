import axios from "axios";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main.js";

function App() {

  const Corpo = styled.div `
  background-color: white;
  `

  return (
    <Corpo >
      <Header/>
      <Main />
    </Corpo>
  );
}

export default App;
