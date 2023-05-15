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
      <h1>estou no appjs</h1>
    </Corpo>
  );
}

export default App;
